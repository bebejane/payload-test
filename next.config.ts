import { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./components', './app'],
    prependData: `
			@use "sass:math";			
    	@use "/Users/bebejane/Projects/payload-test/styles/mediaqueries" as *;
  	`,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: false,
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
}
const config = withNextIntl(withPayload(nextConfig))
export default config
