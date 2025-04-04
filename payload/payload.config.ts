import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { previewPlugin, settingsPlugin, cloudinaryPlugin, navPlugin, i18nPlugin } from '@/payload/plugins'
import { BlocksFeature, lexicalEditor, LinkFeature } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { en } from '@payloadcms/translations/languages/en'
import { sv } from '@payloadcms/translations/languages/sv'
//import { translate } from '@/lib/routes'

import path from 'path'
import sharp from 'sharp'
import nodemailer from 'nodemailer'
import postmarkTransport from 'nodemailer-postmark-transport'
import { Author, Media, Post, User } from './models/collections'
import { Home } from './models/globals'
import { QuoteBlock } from './models/collections/Post'

const defaultLocale = 'en'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const isMongo = process.env.DATABASE_URI?.includes('mongodb')
const isPostgres = process.env.DATABASE_URI?.includes('postgres')

const db = isMongo ?
  mongooseAdapter({
    url: process.env.DATABASE_URI || '',
    connectOptions: {
      maxIdleTimeMS: 1000 * 60 * 5,
    }
  })
  :
  isPostgres ?
    postgresAdapter({
      pool: {
        connectionString: process.env.DATABASE_URI,
      }
    })
    :
    sqliteAdapter({
      client: {
        url: process.env.DATABASE_URI || '',
        authToken: process.env.DATABASE_AUTH_TOKEN || '',
      }
    })

export default buildConfig({
  db,
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
    defaultLocale,
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
    settingsPlugin({
      enabled: false,
      fields: [
        { label: 'Setting 1', name: 'setting1', type: 'checkbox', required: false, localized: false },
      ]
    }),
    navPlugin({
      enabled: false
    }),
    payloadCloudPlugin(),
    cloudinaryPlugin({
      folder: 'payload-test'
    }),
    previewPlugin({
      enabled: true,
      baseUrl: process.env.NEXT_PUBLIC_SITE_URL as string,
      secret: process.env.PAYLOAD_SECRET as string,
      endpoint: `/api/draft`,
      slugs: ['home', 'posts'],
      autosave: true,
      translate: async (doc: any, slug: string, locale: string) => {
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
        const fullPath = `${locale !== defaultLocale ? `/${locale}` : ''}${path === '/' ? '' : path}`
        return path ? [fullPath] : null
      }
    }),
    i18nPlugin({
      enabled: true
    }),

    /*
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
    */
  ]
})
