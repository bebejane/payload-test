'use client'

import type React from 'react'

import { isDocumentEvent, isLivePreviewEvent, ready } from '@payloadcms/live-preview'
import { useCallback, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

export const LivePreview: React.FC<{
  apiRoute?: string
  depth?: number
  refresh?: () => void
  slug?: string
  serverURL?: string
}> = (props) => {
  const router = useRouter()
  const { apiRoute, depth } = props
  const serverURL = (props.serverURL ?? process.env.NEXT_PUBLIC_SITE_URL) as string
  const hasSentReadyMessage = useRef<boolean>(false)

  const onMessage = useCallback(
    async (event: MessageEvent) => {
      const {
        data,
        data: { type },
      } = event

      if (isLivePreviewEvent(event, serverURL)) {
        console.log('live preview event')
        //router.refresh()
      } else if (isDocumentEvent(event, serverURL)) {
        console.log('document event')
        const pathname = event.data?.data?._pathname
        console.log(pathname)
        if (pathname) router.replace(pathname)
        else router.refresh()
      }
    },
    [router],
  )

  useEffect(() => {
    if (typeof window !== 'undefined') window.addEventListener('message', onMessage)

    if (!hasSentReadyMessage.current) {
      hasSentReadyMessage.current = true

      ready({
        serverURL,
      })
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('message', onMessage)
      }
    }
  }, [serverURL, onMessage, depth, apiRoute])

  return null
}
