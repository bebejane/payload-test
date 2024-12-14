import React from 'react'
import s from './page.module.scss'
import cn from 'classnames'
import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link'
import RichText from '@/lib/rich-text'
import { routing } from '@/i18n/routing'
import executeQuery from '@/lib/graphql-client'
import { HomeDocument, AllPostsDocument } from '@/graphql'
import { notFound } from 'next/navigation'
import { Image } from '@/payload/plugins/cloudinary/components'
import { LivePreview } from '@/payload/plugins/preview'

export default async function Home({ params }: LocaleParams) {
  const { locale = routing.defaultLocale } = await params

  setRequestLocale(locale)

  const { Home } = await executeQuery<HomeQuery, HomeQueryVariables>(HomeDocument)
  const { Posts } = await executeQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument)

  if (!Home) return notFound()

  return (
    <>
      <article className={cn(s.start)}>
        <h1>
          {Home.header} {Home._status}{' '}
        </h1>

        <Image className={s.image} data={Home.image} />

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
      <LivePreview />
    </>
  )
}
