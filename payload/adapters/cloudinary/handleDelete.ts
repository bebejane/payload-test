import { v2 as cloudinary, ConfigOptions } from 'cloudinary';
import type { HandleDelete } from '@payloadcms/plugin-cloud-storage/types'

import path from 'path'

interface Args {
  bucket: string
  getStorageClient: () => typeof cloudinary
}

export const getHandleDelete = ({ bucket, getStorageClient }: Args): HandleDelete => {
  return async ({ doc: { prefix = '' }, filename }) => {
    //await getStorageClient().deleteObject({ Bucket: bucket, Key: path.posix.join(prefix, filename),})
  }
}
