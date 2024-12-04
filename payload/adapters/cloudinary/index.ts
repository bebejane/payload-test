import type {
  Adapter,
  PluginOptions as CloudStoragePluginOptions,
  CollectionOptions,
  GeneratedAdapter,
} from '@payloadcms/plugin-cloud-storage/types'
import type { Config, Plugin, UploadCollectionSlug } from 'payload'

import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'
import { v2 as cloudinary, ConfigOptions } from 'cloudinary';
import { getGenerateURL } from './generateURL'
import { getHandleDelete } from './handleDelete'
import { getHandleUpload } from './handleUpload'
import { getHandler } from './staticHandler'

export type CloudinaryStorageOptions = {
  /**
   * Bucket name to upload files to.
   *
   * Must follow [AWS S3 bucket naming conventions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
   */

  bucket: string

  /**
   * Collection options to apply the S3 adapter to.
   */
  collections: Partial<Record<UploadCollectionSlug, Omit<CollectionOptions, 'adapter'> | true>>
  /**
   * AWS S3 client configuration. Highly dependent on your AWS setup.
   *
   * [AWS.S3ClientConfig Docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/s3clientconfig.html)
   */
  config: ConfigOptions

  /**
   * Whether or not to disable local storage
   *
   * @default true
   */
  disableLocalStorage?: boolean

  /**
   * Whether or not to enable the plugin
   *
   * Default: true
   */
  enabled?: boolean
}

type CloudinaryStoragePlugin = (storageArgs: CloudinaryStorageOptions) => Plugin

export const cloudinaryStorage: CloudinaryStoragePlugin = (cloudinaryStorageOptions: CloudinaryStorageOptions) => (incomingConfig: Config): Config => {
  if (cloudinaryStorageOptions.enabled === false) {
    return incomingConfig
  }

  const adapter = cloudinaryStorageInternal(cloudinaryStorageOptions)

  // Add adapter to each collection option object
  const collectionsWithAdapter: CloudStoragePluginOptions['collections'] = Object.entries(
    cloudinaryStorageOptions.collections,
  ).reduce(
    (acc, [slug, collOptions]) => ({
      ...acc,
      [slug]: {
        ...(collOptions === true ? {} : collOptions),
        adapter,
      },
    }),
    {} as Record<string, CollectionOptions>,
  )

  // Set disableLocalStorage: true for collections specified in the plugin options
  const config = {
    ...incomingConfig,
    collections: (incomingConfig.collections || []).map((collection) => {
      if (!collectionsWithAdapter[collection.slug]) {
        return collection
      }

      return {
        ...collection,
        upload: {
          ...(typeof collection.upload === 'object' ? collection.upload : {}),
          disableLocalStorage: true,
        },
      }
    }),
  }

  return cloudStoragePlugin({
    collections: collectionsWithAdapter,
  })(config)
}

function cloudinaryStorageInternal({ bucket, config = {} }: CloudinaryStorageOptions): Adapter {
  return ({ collection, prefix }): GeneratedAdapter => {
    let storageClient: CloudinaryStorage | null = null
    const getStorageClient: () => AWS.S3 = () => {
      if (storageClient) {
        return storageClient
      }
      storageClient = cloudinary
      return storageClient
    }

    return {
      name: 'cloudinary',
      generateURL: getGenerateURL({ bucket, config }),
      handleDelete: getHandleDelete({ bucket, getStorageClient }),
      handleUpload: getHandleUpload({
        bucket,
        collection,
        getStorageClient,
        prefix,
      }),
      staticHandler: getHandler({ bucket, collection, getStorageClient }),
    }
  }
}
