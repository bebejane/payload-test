import '@styles/index.scss'
import { RefreshRouteOnSave } from './components/RefreshRouteOnSave'
import ProgressProvider from '@/lib/progress'
import Navbar from './components/Navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
