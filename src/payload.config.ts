import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { BlocksFeature, lexicalEditor, LinkFeature, UploadFeature } from '@payloadcms/richtext-lexical'
import { buildConfig, Config } from 'payload'
import { fileURLToPath } from 'url'
import { en } from '@payloadcms/translations/languages/en'
import { sv } from '@payloadcms/translations/languages/sv'


import path from 'path'
import sharp from 'sharp'

import { Users } from './payload/collections/Users'
import { Media } from './payload/collections/Media'
import { Post, QuoteBlock } from './payload/collections/Post'
import { Home } from './payload/collections/Home'
import { Author } from './payload/collections/Author'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 320, height: 480 },
        { label: 'Tablet', name: 'tablet', width: 740, height: 1180 },
        { label: 'Desktop', name: 'desktop', width: 980, height: 1200 },
      ],
    },
  },
  i18n: {
    supportedLanguages: { en, sv },
  },
  localization: {
    locales: [
      {
        label: 'English',
        code: 'en',
      },
      {
        label: 'Svenska',
        code: 'se',
      },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  serverURL: process.env.NEXT_PUBLIC_SITE_URL,
  cors: "*",
  collections: [Users, Media, Post, Author],
  globals: [Home],
  editor: lexicalEditor({
    features: ({ defaultFeatures, rootFeatures }) => [
      ...defaultFeatures,
      LinkFeature({
        // Example showing how to customize the built-in fields
        // of the Link feature
        fields: ({ defaultFields }) => [
          ...defaultFields,
          {
            name: 'rel',
            label: 'Rel Attribute',
            type: 'select',
            hasMany: true,
            options: ['noopener', 'noreferrer', 'nofollow'],
            admin: {
              description:
                'The rel attribute defines the relationship between a linked resource and the current document. This is a custom link field.',
            },
          },
        ],
      }),
      BlocksFeature({
        blocks: [QuoteBlock],
      }),
    ],
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
