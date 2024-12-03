import type { CollectionConfig, Block } from 'payload'
import { revalidateHook } from '@/payload/hooks/revalidate'
import { exitDraftHook } from '@/payload/hooks/exit-draft'

export const QuoteBlock: Block = {
  slug: 'quoteBlock',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'QuoteBlock', // optional
  fields: [
    {
      name: 'quoteHeader',
      type: 'text',
      required: true,
    },
    {
      name: 'quoteText',
      type: 'text',
    },
  ],
}

export const Post: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    livePreview: {
      url: ({ data: { slug, _status }, locale }) => {
        const path = `/${locale}/posts/${slug}`
        const draftPath = `/api/draft?secret=${process.env.PAYLOAD_SECRET}&slug=${path}`
        return `${process.env.NEXT_PUBLIC_SITE_URL}${_status !== 'draft' ? path : draftPath}`
      }
    },
    preview: (doc, { locale }) => doc?.slug ? `/${locale}/posts/${doc.slug}` : null
  },
  versions: {
    drafts: true
  },
  access: {
    read: ({ req: { user } }) => user?.role === 'user' || user?.role === 'admin',
    create: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      label: {
        en: 'Title',
        sv: 'Titel',
      },
      name: 'title',
      type: 'text',
      required: true,
      localized: true
    }, {
      label: {
        en: 'Content',
        sv: 'Innehåll',
      },
      name: 'content',
      type: 'richText',
      required: true,
      localized: true
    },
    { label: 'Image', name: 'image', type: 'upload', required: false, relationTo: 'media' },
    { label: 'Author', name: 'author', type: 'relationship', relationTo: 'authors', required: false },
    {
      name: 'slug',
      label: 'Slug',
      unique: true,
      type: 'text',
      admin: {
        components: {
          Field: {
            path: `/payload/components/fields/slug`,
            clientProps: { trackingField: 'title' }
          }
        }
      },
    }, {
      name: 'date',
      label: {
        en: 'Date',
        sv: 'Datum',
      },
      type: 'date',
    }, {
      name: 'blocks',
      label: {
        en: 'Blocks',
        sv: 'Block',
      },
      type: 'blocks',
      blocks: [QuoteBlock]
    }
  ],
  hooks: {
    afterChange: [exitDraftHook, revalidateHook],
  },
}