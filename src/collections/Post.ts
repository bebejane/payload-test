import type { CollectionConfig, CollectionAfterChangeHook } from 'payload'
import { revalidatePath } from 'next/cache'

const afterChangeHook: CollectionAfterChangeHook = async ({ doc }) => {
  console.log('update post', doc.slug)
  revalidatePath(`/posts/${doc.slug}`)
  revalidatePath('/');
  return doc
}

export const Post: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { label: 'Title', name: 'title', type: 'text', required: true },
    { label: 'Content', name: 'content', type: 'richText', required: true },
    { label: 'Slug', name: 'slug', type: 'text', required: true },
  ],
  hooks: {
    afterChange: [afterChangeHook],
  },
}
