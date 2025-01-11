'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
}
export default function NotFound() {
  const pathname = usePathname()

  return (
    <div style={styles.container}>
      <div>404: Not found</div>
      <div>{pathname}</div>
      <Link href="/" className="btn btn-primary">
        Go back home
      </Link>
    </div>
  )
}
