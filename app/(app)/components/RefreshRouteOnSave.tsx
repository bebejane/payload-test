'use client'

import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export const RefreshRouteOnSave: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <PayloadLivePreview
      key={pathname}
      apiRoute={pathname}
      refresh={() => { router.refresh(); }}
      serverURL={process.env.NEXT_PUBLIC_SITE_URL as string}
    />
  )
}