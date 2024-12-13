
import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'se'];
export const defaultLocale = 'en';
export const localePrefix = 'as-needed';
export const routing = defineRouting({ locales, localePrefix, defaultLocale });

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

