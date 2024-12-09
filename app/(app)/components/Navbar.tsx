import s from './Navbar.module.scss'
import Link from 'next/link'
import { headers } from 'next/headers'
import { auth } from '@/auth/auth'

export default async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  return (
    <nav className={s.navbar}>
      <Link href="/admin">
        <button>Admin</button>
      </Link>
      {!session ? (
        <>
          <Link href="/sign-in">
            <button>Sign In</button>
          </Link>
          <Link href="/sign-up">
            <button>Sign Up</button>
          </Link>
        </>
      ) : (
        <Link href={`/sign-out`}>
          <button>Sign out</button>
        </Link>
      )}
    </nav>
  )
}
