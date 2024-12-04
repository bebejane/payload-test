import { v2 as cloudinary, ConfigOptions } from 'cloudinary';
import type { GenerateURL } from '@payloadcms/plugin-cloud-storage/types'

import path from 'path'

interface Args {
  bucket: string
  config: ConfigOptions
}

export const getGenerateURL =
  ({ bucket, config: { endpoint } }: Args): GenerateURL =>
    ({ filename, prefix = '' }) => {
      const stringifiedEndpoint = typeof endpoint === 'string' ? endpoint : endpoint?.toString()
      return `${stringifiedEndpoint}/${bucket}/${path.posix.join(prefix, filename)}`
    }
