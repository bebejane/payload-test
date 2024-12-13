import type { Plugin, Config } from 'payload'
import { fileURLToPath } from 'url';
import path from 'path';

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export interface PluginOptions {
  enabled?: boolean
}

export const navPlugin = (pluginOptions: PluginOptions): Plugin => (incomingConfig) => {
  let config: Config = { ...incomingConfig }
  if (pluginOptions?.enabled === false)
    return config

  return {
    ...config,
    admin: {
      ...config.admin,
      components: {
        ...(config?.admin?.components ?? {}),
        Nav: {
          path: `@/payload/plugins/nav/Nav`,
          exportName: 'default'
        }
      }
    },
    globals: [...config.globals ?? []].concat([
      {
        slug: 'nav',
        admin: {
          description: 'Navigation',
          hidden: true,
        },
        fields: [{
          name: 'data',
          label: 'Data',
          type: 'json',
          defaultValue: [],
        }]
      }
    ])
  }
}
