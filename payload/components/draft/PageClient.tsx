'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import { Post as PostType } from '@/payload/payload-types'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export type Props = {
  initialData: any
}

export const PageClient = ({ initialData }: Props) => {
  const router = useRouter()
  const { data } = useLivePreview<PostType>({
    initialData: initialData as any,
    serverURL: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    depth: 3,
  })

  useEffect(() => {
    if (data?.slug) {
      router.replace(`/en/posts/${data.slug}`)
      router.refresh()
    } else router.refresh()
  }, [router, data])

  return null
}
