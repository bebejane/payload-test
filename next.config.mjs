import { withPayload } from '@payloadcms/next/withPayload'
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
    loader: 'custom',
    loaderFile: './payload/plugins/cloudinary/loader.ts',
  },
  sassOptions: {
    includePaths: ['./app'],
    prependData: `
			@use "sass:math";
    	@import "./styles/mediaqueries"; 
    	@import "./styles/fonts";
  	`,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  devIndicators: {
    buildActivity: false,
  },
  experimental: {
    //turbo: {
    //resolveAlias: {
    //'next-intl/config': `${dirname}/i18n`,
    //},
    //},
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'POST,OPTIONS' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
      {
        source: '/api/backup',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'POST,OPTIONS' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]
  },
}
const config = withNextIntl(withPayload(nextConfig))

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform()
}

export default config
