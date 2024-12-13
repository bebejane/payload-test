import type { CollectionConfig } from 'payload'

export const File: CollectionConfig = {
  slug: 'file',
  access: {
    read: () => true,
  },
  admin: {
    description: 'Files',
  },
  upload: {
    disableLocalStorage: true,
  },
  fields: [],
}
