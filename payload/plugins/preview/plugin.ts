import type { CollectionAfterChangeHook, Plugin, Config, CollectionConfig, GlobalConfig, GlobalAfterChangeHook } from 'payload'
import type { PluginTypes } from './types'
import { revalidatePath } from "next/cache";
import draftHook from '@/payload/hooks/draft'

const transform = <T>(c: NonNullable<Config['collections']>[0] | NonNullable<Config['globals']>[0], pluginOptions: PluginTypes): T => {
  if (!c.admin)
    c.admin = {}

  c.admin.livePreview = {
    ...c.admin.livePreview,
    url: async ({ data: doc, locale }) => {

      let path = (await pluginOptions.translate(doc, c.slug, locale.code))?.[0]
      if (!path) return ''

      if (doc._status === 'draft')
        path = `${pluginOptions.draft.endpoint}?secret=${pluginOptions.draft.secret}&exit=1&slug=${path}`

      return `${process.env.NEXT_PUBLIC_SITE_URL}${path}`
    }
  }

  c.admin.preview = async (doc, { locale }) => {
    let path = (await pluginOptions.translate(doc, c.slug, locale))?.[0]
    if (!path) return null
    if (doc._status === 'draft')
      path = `${pluginOptions.draft.endpoint}?secret=${pluginOptions.draft.secret}&exit=1&slug=${path}`
    return `${process.env.NEXT_PUBLIC_SITE_URL}${path}`
  }

  const hooks: CollectionAfterChangeHook[] | GlobalAfterChangeHook[] = [draftHook, async (props: any) => {
    const { doc, req: { locale } } = props
    if (doc?._status === 'published') {
      const paths = (await pluginOptions.translate(doc, c.slug, locale))
      console.log('revalidate', paths)
      paths.forEach(path => revalidatePath(path))
    }
  }]

  if (!c.hooks)
    c.hooks = { afterChange: [...hooks] } as any
  else if (c.hooks.afterChange)
    c.hooks.afterChange.push.apply(c.hooks.afterChange, hooks)
  else
    c.hooks.afterChange = hooks
  return c
}

export const previewPlugin = (pluginOptions: PluginTypes): Plugin => (incomingConfig) => {
  let config = { ...incomingConfig }
  if (pluginOptions.enabled === false)
    return config

  config.collections = config.collections?.map(c => transform<CollectionConfig>(c, pluginOptions))
  config.globals = config.globals?.map(c => transform<GlobalConfig>(c, pluginOptions))

  return config
}
