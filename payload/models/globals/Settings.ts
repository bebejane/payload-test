import type { GlobalConfig } from 'payload'
import revalidateHook from '@/payload/hooks/revalidate'
import draftHook from '@/payload/hooks/draft'

export const Settings: GlobalConfig = {
  slug: 'settings',
  admin: {

  },
  versions: {
    drafts: false
  },
  fields: [
    { label: 'Setting 1', name: 'setting1', type: 'checkbox', required: false }
  ],
  hooks: {
    afterChange: [revalidateHook, draftHook],
  },
}
