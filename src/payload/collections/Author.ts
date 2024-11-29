import type { CollectionConfig } from 'payload'

export const Author: CollectionConfig = {
  slug: 'authors',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      label: {
        en: 'Name',
        sv: 'Namn',
      },
      name: 'name',
      type: 'text',
      required: true,
      localized: false
    }
  ]
}
