import '@styles/index.scss'
import { RefreshRouteOnSave } from '../../lib/RefreshRouteOnSave'

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
        {children}
      </body>
      <RefreshRouteOnSave />
    </html>
  )
}
