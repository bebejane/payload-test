import { defaultLocale, locales } from '@/i18n'
import { setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { notFound } from 'next/navigation'

export type RootLayoutProps = {
  children: React.ReactNode
  params: LocaleParams['params']
}

export type BodyProps = {
  children: React.ReactNode
  locale: string
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const locale = (await params).locale ?? defaultLocale

  return (
    <>
      <Body locale={locale}>{children}</Body>
    </>
  )
}

function Body({ children, locale }: BodyProps) {
  const messages = useMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
