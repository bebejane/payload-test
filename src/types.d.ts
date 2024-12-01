type SiteLocale = 'en' | 'se'
type LocaleParams<K = 'post', T = string> = {
  params: Promise<{ locale: SiteLocale, [key: string]: T }>,
  searchParams?: any

}