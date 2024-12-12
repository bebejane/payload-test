import '@/styles/index.scss'
import { defaultLocale, locales } from '@/i18n/request'
import { setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { notFound } from 'next/navigation'
import Navbar from '../components/Navbar'
import ProgressProvider from '@/lib/progress'
import { RefreshRouteOnSave } from '@/payload/components/draft/RefreshRouteOnSave'

export type RootLayoutProps = {
  children: React.ReactNode
  params: LocaleParams['params']
}

export type BodyProps = {
  children: React.ReactNode
  locale?: string
}
export const dynamic = 'force-dynamic'
export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale = defaultLocale } = await params

  if (!locales.includes(locale as any)) {
    return notFound()
  }
  setRequestLocale(locale)

  return (
    <html>
      <body lang={locale}>
        <Navbar />
        <main>
          <Body locale={locale}>{children}</Body>
        </main>
      </body>
      <RefreshRouteOnSave serverURL={process.env.NEXT_PUBLIC_SITE_URL as string} />
    </html>
  )
}

function Body({ children, locale }: BodyProps) {
  const messages = useMessages()

  return (
    <ProgressProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </ProgressProvider>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
