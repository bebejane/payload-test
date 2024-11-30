import '@styles/index.scss'
import { defaultLocale, locales } from '@i18n';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from "next/types";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { RefreshRouteOnSave } from '../../../lib/RefreshRouteOnSave';
export type LocaleParams = {
  params: Promise<{ locale: SiteLocale }>,
  searchParams?: any
}

export type RootLayoutProps = {
  children: React.ReactNode,
  params: LocaleParams['params'],
}

export type BodyProps = {
  children: React.ReactNode,
  locale: string
}
export const dynamic = 'force-static'

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const locale = (await params).locale ?? defaultLocale
  setRequestLocale(locale);

  return (
    <>
      <Body locale={locale}>
        {children}
      </Body>

    </>
  );
}

function Body({ children, locale, }: BodyProps) {
  const messages = useMessages();

  return (

    <NextIntlClientProvider locale={locale} messages={messages}>
      <main>
        {children}
      </main>
    </NextIntlClientProvider>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
