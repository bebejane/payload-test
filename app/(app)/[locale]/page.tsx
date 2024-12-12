import s from './page.module.scss'
import cn from 'classnames'
import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link'
import RichText from '@/lib/rich-text'
import { defaultLocale, locales } from '@/i18n/request'
import { draftMode } from 'next/headers'
import Image from 'next/image'
import apiQuery from '@/lib/client'
import { HomeDocument, AllPostsDocument } from '@/graphql'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function Home({ params }: LocaleParams) {
  const { locale = defaultLocale } = await params

  setRequestLocale(locale)

  const draft = (await draftMode()).isEnabled
  /*
  const { Home } = await apiQuery<HomeQuery, HomeQueryVariables>(HomeDocument, {
    variables: { draft, locale: locale as LocaleInputType },
  })
  const { Posts } = await apiQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, {
    variables: { draft, locale: locale as LocaleInputType },
  })

  if (!Home) return notFound()
  */

  return <article className={cn(s.start)}>Home</article>
}
