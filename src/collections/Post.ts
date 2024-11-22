import type { CollectionConfig, CollectionAfterChangeHook } from 'payload'
import { revalidatePath } from 'next/cache'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'

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
    livePreview: {
      url: ({ data }) => `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${data.slug}`,
    }
  },
  fields: [
    { label: 'Title', name: 'title', type: 'text', required: true },
    {
      label: 'Content',
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML('content', { name: 'content_html' }),
    { label: 'Image', name: 'image', type: 'upload', required: false, relationTo: 'media' },
    { label: 'Slug', name: 'slug', type: 'text', required: true },
  ],
  hooks: {
    afterChange: [afterChangeHook],
  },
}
