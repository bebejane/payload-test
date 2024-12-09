'use client'

import { useCallback, useEffect } from 'react'
import { authClient } from '@/auth/auth-client'
import { useRouter } from 'next/navigation'

export default function SignOut() {
  const router = useRouter()

  const handleSignOut = useCallback(async () => {
    authClient.signOut().then(() => {
      router.push('/')
      router.refresh()
    })
  }, [router])

  useEffect(() => {
    handleSignOut()
  }, [handleSignOut])

  return <div>Logging out....</div>
}
