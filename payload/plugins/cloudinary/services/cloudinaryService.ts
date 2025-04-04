import fs from "fs";
import path from "path";
import {
  ConfigOptions,
  DeliveryType,
  ResourceType,
  UploadApiOptions,
  UploadApiResponse,
  v2 as cloudinary,
} from "cloudinary";
import { CollectionConfig, Payload } from "payload";
import { CloudinaryPluginRequest } from "../types";

export default class CloudinaryService {
  private config?: ConfigOptions;
  private options?: UploadApiOptions;
  private uploadResourceTypeHandler?: Function;
  constructor(
    config?: ConfigOptions,
    options?: UploadApiOptions,
    uploadResourceTypeHandler?: Function
  ) {
    this.config = config;
    this.options = options;
    this.uploadResourceTypeHandler = uploadResourceTypeHandler;
  }
  async upload(
    filename: string,
    buffer: Buffer,
    payload: Payload,
    collectionConfig?: CollectionConfig
  ): Promise<UploadApiResponse> {
    const _cfg = {
      ...this.config,
      api_key: this.config?.api_key || process.env.CLOUDINARY_API_KEY,
      api_secret: this.config?.api_secret || process.env.CLOUDINARY_API_SECRET,
      cloud_name: this.config?.cloud_name || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    };

    cloudinary.config(_cfg);
    let staticDir: string | null = null

    if (typeof collectionConfig?.upload === 'object')
      staticDir = collectionConfig?.upload.staticDir as string
    else
      throw new Error('no static dir')

    const folder = this.options?.folder || ''
    const configDir = payload.config.admin?.importMap?.baseDir || ''
    const staticPath = path.resolve(configDir, staticDir);
    await fs.promises.mkdir(staticPath, { recursive: true });
    const tmpFileName = path.join(staticPath, `${new Date().getTime()}_${filename}`);
    await fs.promises.writeFile(tmpFileName, buffer);
    const _opts = {
      ...this.options,
      folder,
    };
    let _resourceType = this.options?.resource_type;
    if (!_resourceType) {
      _resourceType = this.uploadResourceTypeHandler
        ? this.uploadResourceTypeHandler(_cfg, _opts, tmpFileName)
        : "auto";
    }

    const uploadPromise = cloudinary.uploader.upload(tmpFileName, {
      ..._opts,
      resource_type: _resourceType,
    });
    await fs.promises.rm(tmpFileName);
    return uploadPromise;
  }
  async delete(
    public_id: string,
    options?: {
      resource_type?: ResourceType;
      type?: DeliveryType;
      invalidate?: boolean;
    }
  ): Promise<any> {
    console.log('DELETE', public_id, options)
    return await cloudinary.uploader.destroy(public_id, options)
  }
}
export function mediaManagement(
  config?: ConfigOptions,
  uploadApiOptions?: UploadApiOptions,
  uploadResourceTypeHandler?: Function
) {
  const service = new CloudinaryService(
    config,
    uploadApiOptions,
    uploadResourceTypeHandler
  );
  return (req: CloudinaryPluginRequest, _: any, next: Function) => {
    req.cloudinaryService = service;
    next();
  };
}
