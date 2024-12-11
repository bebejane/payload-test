import '@/styles/index.scss'
import { RefreshRouteOnSave } from './components/RefreshRouteOnSave'
import ProgressProvider from '@/lib/progress'
import Navbar from './components/Navbar'
import { defaultLocale, locales } from '../../i18n'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'

export const dynamic = 'force-dynamic'

export type RootLayoutProps = {
  children: React.ReactNode
  params: LocaleParams['params']
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const locale = (await params).locale ?? defaultLocale

  if (!locales.includes(locale as any)) {
    return notFound()
  }

  setRequestLocale(locale)

  return (
    <html>
      <body>
        <Navbar />
        <main>
          <ProgressProvider>{children}</ProgressProvider>
        </main>
      </body>
      <RefreshRouteOnSave serverURL={process.env.NEXT_PUBLIC_SITE_URL as string} />
    </html>
  )
}
