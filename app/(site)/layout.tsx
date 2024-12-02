import '@styles/index.scss'
import { RefreshRouteOnSave } from 'lib/RefreshRouteOnSave'
import Navbar from './Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
      <RefreshRouteOnSave />
    </html>
  )
}
