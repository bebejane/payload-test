'use client'

import s from './LocaleSwitcher.module.scss'
import cn from 'classnames'
import React, { useEffect, useState } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { ModalContainer, ModalContext, ModalProvider } from '@faceless-ui/modal'
import { useConfig } from '@payloadcms/ui'
import { TabComponent } from '@payloadcms/ui'
import Link from 'next/link'

type Props = {}

export default function LocaleSwitcher(props: Props) {
  //console.log(props.loclization)
  const { config } = useConfig()
  const router = useRouter()
  const pathname = usePathname()
  //const params = use()
  const params = useSearchParams()

  if (!config.localization) return null

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
