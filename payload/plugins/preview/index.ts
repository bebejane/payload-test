import type { CollectionAfterChangeHook, Plugin, CollectionConfig, GlobalConfig, GlobalAfterChangeHook, Field, Config } from 'payload'
import { revalidatePath } from "next/cache";
import draftHook from '@/payload/hooks/draft'
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url)

export interface PluginOptions {
  enabled?: boolean,
  baseUrl: string,
  endpoint: string,
  secret: string,
  autosave: boolean,
  translate: (doc: Record<string, any>, slug: string, locale: string) => Promise<string[] | null>,
  slugs?: string[],
}

export const previewPlugin = (pluginOptions: PluginOptions): Plugin => (incomingConfig) => {
  let config = { ...incomingConfig }
  if (!pluginOptions || pluginOptions?.enabled === false)
    return config

  const { slugs } = pluginOptions

  return {
    ...config,
    collections: config.collections?.map(c => !slugs || slugs.includes(c.slug) ? transform<CollectionConfig>(c, pluginOptions, config) : c) ?? [],
    globals: config.globals?.map(g => !slugs || slugs.includes(g.slug) ? transform<GlobalConfig>(g, pluginOptions, config) : g) ?? [],
  }
}

const transform = <T extends CollectionConfig | GlobalConfig>(c: T, { endpoint, secret, baseUrl, translate, autosave }: PluginOptions, config: Config): T => {
  if (!c.admin)
    c.admin = {}

  c.admin.livePreview = {
    ...c.admin.livePreview,
    url: async ({ data: doc, locale }) => {
      console.log(doc._pathname)
      //let path = doc._pathname ?? (await translate(doc, c.slug, locale.code))?.[0] ?? '/_'
      let path = (await translate(doc, c.slug, locale.code))?.[0] ?? '/_'

      if (doc._status === 'draft')
        path = `${endpoint}?secret=${secret}&slug=${path}&collection=${c.slug}&global=${c.slug}`

      return `${baseUrl}${path}`
    }
  }

  c.admin.preview = async (doc, { locale }) => {
    let path = (await translate(doc, c.slug, locale))?.[0]
    if (!path) return null
    if (doc?._status === 'draft')
      path = `${endpoint}?secret=${secret}&exit=1&slug=${path}&collection=${c.slug}&global=${c.slug}`
    return `${baseUrl}${path}`
  }

  const revalidateHook: CollectionAfterChangeHook | GlobalAfterChangeHook = async (props: any) => {
    const { doc, req: { locale } } = props
    if (doc?._status !== 'published') return

    const paths = (await translate(doc, c.slug, locale))

    if (!paths) return
    console.log('revalidate', paths)
    paths.forEach(path => revalidatePath(path))
  }

  c.hooks = (c.hooks ?? {
    afterChange: [],
    beforeChange: [],
    afterRead: [],
  })

  const pathnameHook = async (props: any) => {

    const { data, req: { locale, routeParams: { collection, global } } } = props

    const slug = collection || global
    const paths = await translate(data, slug, locale)

    if (paths?.[0]) {
      data._pathname = paths[0]
      console.log('update _pathname', paths?.[0], slug, locale)
    } else {
      console.error('no paths', data._status, slug)
    }

    return data
  }

  //@ts-ignore
  c.hooks.afterChange = c.hooks?.afterChange ? [...c.hooks.afterChange, revalidateHook] : [revalidateHook]
  //@ts-ignore
  c.hooks.afterRead = c.hooks?.afterRead ? [...c.hooks.afterRead, draftHook] : [draftHook]
  //@ts-ignore
  c.hooks.beforeChange = c.hooks?.beforeChange ? [...c.hooks.beforeChange, pathnameHook] : [pathnameHook]
  c.versions = { drafts: !autosave ? true : { autosave: { interval: 300 } } }

  const fields = c.fields.filter((field: any) => field.name !== '_pathname')
  fields.push({
    label: "Pathname",
    name: "_pathname",
    type: "text",
    localized: config.localization ? true : false,
    admin: {
      readOnly: true,
      components: {
        Field: {
          path: `@/payload/plugins/preview/Pathname`,
          clientProps: { path: '_pathname' }
        }
      }
    }
  })
  c.fields = fields;

  return c as T
}

export { LivePreview } from './LivePreview'