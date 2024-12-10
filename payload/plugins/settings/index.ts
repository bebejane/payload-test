import type { CollectionAfterChangeHook, Plugin, CollectionConfig, GlobalConfig, GlobalAfterChangeHook, Field } from 'payload'
import { revalidatePath } from "next/cache";
import draftHook from '@/payload/hooks/draft'
import { fileURLToPath } from 'url';
import path from 'path';

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export interface PluginOptions {
  enabled?: boolean,
  fields: Field[]
}

export const settingsPlugin = (pluginOptions: PluginOptions): Plugin => (incomingConfig) => {
  let config = { ...incomingConfig }
  if (pluginOptions?.enabled === false)
    return config

  //const { } = pluginOptions

  const settings: GlobalConfig = {
    slug: 'settings',
    admin: {
      description: 'Settings',
    },
    versions: {
      drafts: false
    },
    fields: pluginOptions?.fields ?? []
  }
  const globals = config.globals ? [...config.globals, settings] : [settings]

  return {
    ...config,
    globals
  }
}
