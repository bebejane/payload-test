import s from './page.module.scss'
import cn from 'classnames'
import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link'
import RichText from '@/lib/rich-text'
import { defaultLocale, locales } from '@/i18n/request'
import { draftMode } from 'next/headers'
import Image from 'next/image'
import apiQuery from '@/lib/graphql-client'
import { HomeDocument, AllPostsDocument } from '@/graphql'
import { notFound } from 'next/navigation'
import React from 'react'
import { getPayload } from 'payload'

export default async function Home({ params }: LocaleParams) {
  const { locale = defaultLocale } = await params

  setRequestLocale(locale)

  const { Home } = await apiQuery<HomeQuery, HomeQueryVariables>(HomeDocument)
  const { Posts } = await apiQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument)

  if (!Home) return notFound()

  return (
    <article className={cn(s.start)}>
      <h1>
        {Home.header} {Home._status}
      </h1>
      {typeof Home.image === 'object' && Home.image?.url && (
        <Image
          className={s.image}
          src={Home.image.url}
          width={Home.image.width ?? 0}
          height={Home.image.height ?? 0}
          alt={Home.image.alt ?? ''}
        />
      )}
      <RichText data={Home.content} />
      <h2>Latest posts</h2>

      {Posts?.docs?.map((post, i) => (
        <React.Fragment key={i}>
          <Link key={post?.id} href={`/${locale}/posts/${post?.slug}`}>
            {post?.title}
          </Link>
          <br />
        </React.Fragment>
      ))}
    </article>
  )
}
