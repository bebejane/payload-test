import { Plugin, Config, getPayload, CollectionAfterChangeHook } from 'payload'
import configPromise from '@payload-config'

export interface PluginOptions {
  enabled?: boolean
}

export const navPlugin = (pluginOptions: PluginOptions): Plugin => (incomingConfig) => {
  let config: Config = { ...incomingConfig }
  if (pluginOptions?.enabled === false)
    return config

  const afterChange: CollectionAfterChangeHook = async (props: any) => {
    const { doc, req: { locale } } = props
    const payload = await getPayload({ config: configPromise })
    const { docs } = await payload.find({ collection: 'nav' })
    //console.log('afterChange', docs)
  }

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
    collections: [...config.collections ?? []].concat([
      {
        slug: 'nav',
        admin: {
          description: 'Navigation',
          hidden: false,
        },
        fields: [{
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          label: 'Slug',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          label: 'Href',
          type: 'text',
          required: true,
        }, {
          name: 'type',
          label: 'Type',
          type: 'text',
          required: true,
          //@ts-ignore
          validate: (value: string) => ['collection', 'global'].includes(value),
        }, {
          name: 'icon',
          label: 'Icon',
          type: 'text',
          required: false,
        }, {
          name: 'position',
          label: 'Position',
          type: 'number',
          required: false,
        }]
      }
    ]).map(g => ({
      ...g,
      hooks: { ...g.hooks, afterChange: [...(g.hooks?.afterChange ?? [afterChange]), afterChange] }
    }))
  }
}
