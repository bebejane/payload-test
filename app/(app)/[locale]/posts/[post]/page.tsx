import s from './page.module.scss'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import executeQuery from '@/lib/graphql-client'
import RichText from '@/lib/rich-text'
import Image from 'next/image'
import { setRequestLocale } from 'next-intl/server'
import { PostDocument } from '@/graphql'
import { LivePreview } from '@/payload/plugins/preview'

export const metadata: Metadata = {
  title: 'Payload test',
  description: 'Payload',
}

type Props = LocaleParams<{ post: string }>

export default async function Post({ params }: Props) {
  const { post: slug, locale } = await params
  setRequestLocale(locale)

  const { Posts } = await executeQuery<PostQuery, PostQueryVariables>(PostDocument, {
    variables: { slug },
  })

  const post = Posts?.docs?.[0]
  if (!post) return notFound()

  return (
    <>
      <article className={s.post}>
        <h1>
          {post.title} ({post._status})
        </h1>
        <RichText data={post.content} />
        {typeof post.image === 'object' && post.image?.url && (
          <Image
            className={s.image}
            src={post.image.url}
            width={post.image.width ?? 0}
            height={post.image.height ?? 0}
            alt={post.image.alt ?? 'alt'}
          />
        )}
        <section>
          <ul>{post.blocks?.map((block, index) => <li key={index}>{block.quoteHeader}</li>)}</ul>
        </section>
      </article>
      <LivePreview />
    </>
  )
}
