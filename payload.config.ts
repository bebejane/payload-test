import { s3Storage } from '@payloadcms/storage-s3'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { previewPlugin } from '@/payload/plugins/preview'
import { BlocksFeature, lexicalEditor, LinkFeature } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { en } from '@payloadcms/translations/languages/en'
import { sv } from '@payloadcms/translations/languages/sv'

import path from 'path'
import sharp from 'sharp'
import nodemailer from 'nodemailer'
import postmarkTransport from 'nodemailer-postmark-transport'

import { Author, Media, Post, User } from './payload/models/collections'
import { Home } from './payload/models/globals'

import { QuoteBlock } from './payload/models/collections/Post'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  //db: mongooseAdapter({
  //url: process.env.PAYLOAD_DATABASE_URL || '',
  //}),
  db: sqliteAdapter({
    // SQLite-specific arguments go here.
    // `client.url` is required.

    client: {
      url: 'file:payload.db',
      authToken: process.env.DATABASE_AUTH_TOKEN,
      //      filename: path.join(dirname, 'payload.db'),
      //authToken: process.env.DATABASE_AUTH_TOKEN,
    }
  }),
  globals: [Home],
  collections: [Post, Author, Media, User],
  admin: {
    user: User.slug,
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
    components: {
      views: {
        //dashboard: {
        //Component: '@/payload/components/views/Dashboard',
        //}
      },
      //Nav: { path: '/payload/components/views/Nav',}
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
  email: nodemailerAdapter({
    defaultFromAddress: process.env.EMAIL_FROM as string,
    defaultFromName: process.env.EMAIL_FROM_NAME as string,
    transportOptions: {
      transactionLog: true,
    },
    transport: nodemailer.createTransport(postmarkTransport({
      auth: {
        apiKey: process.env.POSTMARK_API_KEY as string,
      }
    })),
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  sharp,
  plugins: [
    payloadCloudPlugin(),
    s3Storage({
      collections: {
        media: true
      },
      bucket: process.env.NEXT_PUBLIC_S3_BUCKET as string,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
        },
        region: process.env.NEXT_PUBLIC_S3_REGION,
      },
    }),
    previewPlugin({
      enabled: true,
      baseUrl: process.env.NEXT_PUBLIC_SITE_URL as string,
      secret: process.env.PAYLOAD_SECRET as string,
      endpoint: `/api/draft`,
      slugs: ['home', 'posts'],
      autosave: true,
      translate: async (doc, slug, locale) => {
        let path = null
        switch (slug) {
          case 'home':
            path = `/`;
            break;
          case 'posts':
            if (doc.slug)
              path = `/posts/${doc.slug}`
            break
          default:
            path = null
            break;
        }
        return path ? [`/${locale}${path}`] : null
      }
    })
  ]
})
