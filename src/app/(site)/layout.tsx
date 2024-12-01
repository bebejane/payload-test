import '@styles/index.scss'
import { RefreshRouteOnSave } from '../../lib/RefreshRouteOnSave'
import Navbar from './Navbar'

export const metadata = {
  title: 'Boiler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
      <RefreshRouteOnSave />
    </html>
  )
}
