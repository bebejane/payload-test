import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from '@/i18n/routing'

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming `locale` parameter is valid
  const locale = (await requestLocale) ?? routing.defaultLocale as SiteLocale
  if (!routing.locales.includes(locale as any)) notFound();
  const allMessages: any = (await import(`./messages.json`)).default;
  const messages: any = {}

  Object.keys(allMessages).forEach((section) => {
    messages[section] = {};
    Object.keys(allMessages[section]).forEach((key) => {
      messages[section][key] = allMessages[section][key][locale];
    });
  });

  return {
    locale,
    messages//: (await import(`./messages/${locale}.json`)).default,
  };

});