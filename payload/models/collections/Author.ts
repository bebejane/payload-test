import type { CollectionConfig } from 'payload'

export const Author: CollectionConfig = {
  slug: 'authors',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    description: 'Authors',
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
