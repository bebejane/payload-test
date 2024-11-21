import type { GlobalConfig, GlobalAfterChangeHook } from 'payload'
import { revalidatePath } from 'next/cache'

const afterChangeHook: GlobalAfterChangeHook = async ({ doc }) => {
  console.log('update home')
  revalidatePath(`/`)
  return doc
}

export const Home: GlobalConfig = {
  slug: 'home',
  admin: {
    livePreview: {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    },
  },
  fields: [
    { label: 'Header', name: 'header', type: 'text', required: true },
    { label: 'Content', name: 'content', type: 'richText', required: true },
  ],
  hooks: {
    afterChange: [afterChangeHook],
  },
}
