import type { GlobalConfig } from 'payload'
import { revalidateHook } from '@/payload/hooks/revalidate'

export const Home: GlobalConfig = {
  slug: 'home',
  admin: {
    livePreview: {
      url: ({ data, locale }) => `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}`,
    }
  },
  versions: {
    drafts: false
  },
  fields: [
    { label: 'Header', name: 'header', type: 'text', required: true, localized: true },
    { label: 'Content', name: 'content', type: 'richText', required: true, localized: true },
    { label: 'Image', name: 'image', type: 'upload', required: false, relationTo: 'media' },
  ],
  hooks: {
    afterChange: [revalidateHook],
  },
}
