import type { CollectionAfterChangeHook, Plugin, CollectionConfig, GlobalConfig, GlobalAfterChangeHook, Field } from 'payload'
import { revalidatePath } from "next/cache";
import draftHook from '@/payload/hooks/draft'
import { fileURLToPath } from 'url';
import path from 'path';

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

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
    collections: config.collections?.map(c => !slugs || slugs.includes(c.slug) ? transform<CollectionConfig>(c, pluginOptions) : c) ?? [],
    globals: config.globals?.map(g => !slugs || slugs.includes(g.slug) ? transform<GlobalConfig>(g, pluginOptions) : g) ?? [],
  }
}

const transform = <T extends CollectionConfig | GlobalConfig>(c: T, { endpoint, secret, baseUrl, translate, autosave }: PluginOptions): T => {
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

  //@ts-ignore
  c.hooks.afterChange = c.hooks?.afterChange ? [...c.hooks.afterChange, revalidateHook] : [revalidateHook]

  const pathnameHook = async (props: any) => {
    const { doc, req: { locale } } = props
    const paths = await translate(doc, c.slug, locale)
    if (paths?.[0])
      doc._pathname = paths[0]
    return doc
  }

  //@ts-ignore
  c.hooks.afterRead = c.hooks?.afterRead ? [...c.hooks.afterRead, draftHook, pathnameHook] : [draftHook, pathnameHook]

  c.versions = {
    drafts: !autosave ? true : { autosave: { interval: 300 } }
  }

  const fields = c.fields.filter((field: any) => field.name !== '_pathname')
  fields.push({
    label: "Pathname",
    name: "_pathname",
    type: "text",
    admin: {
      readOnly: true,
      components: {
        Field: {
          path: `@/payload/plugins/preview/Pathname`,
          exportName: 'default',
          clientProps: { path: '_pathname' }
        }
      }
    }
  })
  c.fields = fields;

  return c as T
}

