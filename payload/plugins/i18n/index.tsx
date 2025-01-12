import { Plugin, Config, Field } from 'payload'

export interface PluginOptions {
  enabled?: boolean
}

const i18nField: Field = {
  name: 'i18n',
  type: 'text',

  admin: {
    hidden: true,
    components: {
      Field: `@/payload/plugins/i18n/LocaleSwitcher`,
    },
  },
}

export const i18nPlugin =
  (pluginOptions: PluginOptions): Plugin =>
  (incomingConfig) => {
    let config: Config = { ...incomingConfig }
    if (pluginOptions?.enabled === false) return config

    return {
      ...config,
      collections: [...(config.collections ?? [])].map((c) => ({
        ...c,
        fields: [i18nField, ...(c.fields ?? [])],
      })),
      globals: [...(config.globals ?? [])].map((c) => ({
        ...c,
        fields: [i18nField, ...(c.fields ?? [])],
      })),
    }
  }
