import type { GlobalConfig } from 'payload'
import revalidateHook from '@/payload/hooks/revalidate'
import draftHook from '../hooks/draft'

export const Home: GlobalConfig = {
  slug: 'home',
  admin: {

  },
  versions: {
    drafts: true
  },
  fields: [
    { label: 'Header', name: 'header', type: 'text', required: true, localized: true },
    { label: 'Content', name: 'content', type: 'richText', required: true, localized: true },
    { label: 'Image', name: 'image', type: 'upload', required: false, relationTo: 'media' },
  ],
  hooks: {
    afterChange: [revalidateHook, draftHook],
  },
}
