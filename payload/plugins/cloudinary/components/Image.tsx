'use client'

import React from 'react'
import cn from 'classnames'
import { CldImage } from 'next-cloudinary'

type Props = {
  data: any | null | undefined
  className: string
}

export default function Image({ data, className }: Props) {
  const { url, width, height, alt } = data ?? {}
  if (!url) return null
  return <CldImage className={className} src={url} width={width ?? 0} height={height ?? 0} alt={alt ?? ''} />
}
