import s from './page.module.scss'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import RichText from '@/lib/rich-text'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { Post, QuoteBlock } from '@payload-types'
import Image from 'next/image'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Payload test',
  description: 'Payload',
}


const generateSrcSet = (image: Post['image']) => {
  if (typeof image === 'string')
    return undefined

  const sizes = image?.sizes
  const srcset = [
    `(max-width: ${sizes?.thumbnail?.width}px) 25vw`,
    `(max-width: ${sizes?.card?.width}px) 50vw`,
    `(max-width: ${sizes?.tablet?.width}px) 100vw`,
  ]
  return srcset.join(', ')
}

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: { post: string, locale: SiteLocale } }) {

  const { post: slug, locale } = await params

  const draft = (await draftMode()).isEnabled
  const payload = await getPayload({ config: configPromise })
  const data = await payload.find({ collection: 'posts', locale, draft, where: { slug: { equals: slug } } })
  const post = data.docs[0]

  if (!post)
    return notFound()

  return (
    <Suspense>
      <article className={s.post}>
        <h1>{post.title} ({post._status})</h1>

        <RichText data={post.content} />

        {typeof post.image === 'object' && post.image?.url &&
          <Image
            className={s.image}
            src={post.image.url}
            width={post.image.width ?? 0}
            height={post.image.height ?? 0}
            alt={post.image.alt}
          />
        }

        <section>
          <ul>
            {post.blocks?.map((block, index) =>
              <li key={index}>{block.quoteHeader}</li>
            )}
          </ul>
        </section>
      </article>
    </Suspense>
  )
}