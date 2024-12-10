import { Field, PayloadRequest } from "payload"
import CloudinaryService from "../services/cloudinaryService";

export declare type PluginConfig = {
    cloudinaryFields?: Array<string | Partial<Field>>
    folder?: string
}

export declare type CloudinaryPluginRequest = PayloadRequest & {
    cloudinaryService: CloudinaryService;
};