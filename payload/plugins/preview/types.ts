import type { Config, Locale, Payload, SanitizedCollectionConfig, SanitizedGlobalConfig } from 'payload'

export interface PluginTypes {
  /**
   * Enable or disable plugin
   * @default false
   */
  enabled?: boolean,
  draft: {
    endpoint: string,
    secret: string,
  },
  translate: (doc: Record<string, any>, slug: string, locale: Locale['code']) => Promise<string[]>
}