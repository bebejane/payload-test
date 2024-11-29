import type { GlobalConfig } from 'payload'
import { revalidateHook } from '@/payload/hooks/revalidate'

export const Home: GlobalConfig = {
  slug: 'home',
  admin: {
    livePreview: {
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
  },
  versions: {
    drafts: true
  },
  fields: [
    { label: 'Header', name: 'header', type: 'text', required: true },
    { label: 'Content', name: 'content', type: 'richText', required: true },
  ],
  hooks: {
    afterChange: [revalidateHook],
  },
}
