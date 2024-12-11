import '@/styles/index.scss'
import { RefreshRouteOnSave } from './components/RefreshRouteOnSave'
import ProgressProvider from '@/lib/progress'
import Navbar from './components/Navbar'
import { defaultLocale, locales } from '@/i18n/request'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'

export type RootLayoutProps = {
  children: React.ReactNode
  params: LocaleParams['params']
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
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
