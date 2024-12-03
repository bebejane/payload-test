import type { GlobalConfig } from 'payload'
import { revalidateHook } from '@/payload/hooks/revalidate'
import { exitDraftHook } from '../hooks/exit-draft'

export const Home: GlobalConfig = {
  slug: 'home',
  admin: {
    livePreview: {
      url: ({ data: { slug, _status }, locale }) => {
        const path = `/${locale}`
        const draftPath = `/api/draft?secret=${process.env.PAYLOAD_SECRET}&slug=${path}`
        return `${process.env.NEXT_PUBLIC_SITE_URL}${_status !== 'draft' ? path : draftPath}`
      }
    },
    preview: (doc, { locale }) => `/${locale}`
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
    afterChange: [revalidateHook, exitDraftHook],
  },
}
