import type { GlobalConfig } from 'payload'
import revalidateHook from '@/payload/hooks/revalidate'
import draftHook from '@/payload/hooks/draft'

export const Home: GlobalConfig = {
  slug: 'home',
  admin: {
    description: 'Home',
  },
  versions: {
    drafts: true
  },
  access: { read: () => true },
  graphQL: {
    name: 'Home',
  },
  fields: [
    { label: 'Header', name: 'header', type: 'text', required: true, localized: true },
    { label: 'Image', name: 'image', type: 'upload', required: false, relationTo: 'media' },
    { label: 'Content', name: 'content', type: 'richText', required: true, localized: true },
    {
      label: 'Other',
      name: 'other',
      type: 'group', fields: [
        { label: 'Posts', name: 'posts', type: 'relationship', relationTo: 'posts', required: false, hasMany: true },
      ]
    },
  ],
  hooks: {
    afterChange: [revalidateHook, draftHook],
  },
}
