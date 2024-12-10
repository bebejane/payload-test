import type { CollectionConfig } from 'payload'

export const File: CollectionConfig = {
  slug: 'file',
  access: {
    read: () => true,
  },
  upload: {
    disableLocalStorage: true,
  },
  fields: [],
}
