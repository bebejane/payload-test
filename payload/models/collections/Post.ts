import type { CollectionConfig, Block } from 'payload'

export const QuoteBlock: Block = {
  slug: 'quoteBlock',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'QuoteBlock', // optional
  labels: {
    singular: {
      en: 'Quote',
      sv: 'Citat',
    },
    plural: {
      en: 'Quotes',
      sv: 'Citat',
    },
  },
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
    description: 'Post',
  },
  access: {
    read: ({ req: { user } }) => true,
  },
  graphQL: {
    singularName: 'Post',
    pluralName: 'Posts',
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
      localized: true,
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
    { label: 'Author', name: 'author', type: 'relationship', relationTo: 'authors', required: false, admin: { position: 'sidebar' } },
    {
      name: 'slug',
      label: 'Slug',
      unique: true,
      type: 'text',
      admin: {
        components: {
          Field: {
            path: `@/payload/components/fields/slug`,
            clientProps: { trackingField: 'title' }
          }
        },
        position: 'sidebar',

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
  ]
}