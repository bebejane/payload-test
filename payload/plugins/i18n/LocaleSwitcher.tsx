'use client'

import s from './LocaleSwitcher.module.scss'
import cn from 'classnames'
import React, { useEffect, useState } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import { useConfig, useForm, useDocumentInfo } from '@payloadcms/ui'
import Link from 'next/link'
import { Field } from 'payload'

type Props = {}

export default function LocaleSwitcher(props: Props) {
  const { config } = useConfig()
  const pathname = usePathname()
  const params = useSearchParams()
  const doc = useDocumentInfo()
  const slug = doc.collectionSlug ?? doc.globalSlug
  const collection = config.collections.find((c) => c.slug === slug)
  const global = config.globals.find((c) => c.slug === slug)

  if (
    !config.localization ||
    (collection?.fields.find((f) => f.localized) === undefined && global?.fields.find((f) => f.localized) === undefined)
  )
    return null

  const locales = config.localization.locales
  const currentLocale = params.get('locale') ?? config.localization.defaultLocale

  return (
    <ul className={s.locales}>
      {locales.map((l, i) => (
        <li key={i} className={l.code === currentLocale ? s.selected : ''}>
          <Link href={`${pathname}?locale=${l.code}`}>{l.label as string}</Link>
        </li>
      ))}
    </ul>
  )
}
