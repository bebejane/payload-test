import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['se', 'en'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
  const allMessages: any = (await import(`./messages.json`)).default;
  const messages: any = {}

  Object.keys(allMessages).forEach((section) => {
    messages[section] = {};
    Object.keys(allMessages[section]).forEach((key) => {
      messages[section][key] = allMessages[section][key][locale];
    });
  });

  return {
    messages//: (await import(`./messages/${locale}.json`)).default,
  };

});