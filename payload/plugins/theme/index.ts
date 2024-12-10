import type { CollectionAfterChangeHook, Plugin, CollectionConfig, GlobalConfig, GlobalAfterChangeHook, Field } from 'payload'
import { revalidatePath } from "next/cache";
import draftHook from '@/payload/hooks/draft'
import { fileURLToPath } from 'url';
import path from 'path';

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export interface PluginOptions {
  enabled?: boolean,
}

export const themePlugin = (pluginOptions: PluginOptions): Plugin => (incomingConfig) => {
  let config = { ...incomingConfig }
  if (pluginOptions?.enabled === false)
    return config

  const theme: GlobalConfig = {
    slug: 'theme',
    admin: {
      description: 'Theme',
    },
    versions: {
      drafts: false
    },
    fields: [
      { label: 'Background', name: 'background', type: 'text', required: false, localized: false },
      { label: 'Text', name: 'text', type: 'text', required: false, localized: false },
    ]
  }

  const globals = config.globals ? [...config.globals, theme] : [theme]

  return {
    ...config,
    globals
  }
}
