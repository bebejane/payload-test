import s from './page.module.scss'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { Block, getPayload } from 'payload'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { JSXConverters, JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { QuoteBlock } from '@payload-types'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Payload test',
  description: 'Payload',
}

export type NodeTypes = DefaultNodeTypes | SerializedBlockNode<QuoteBlock>

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    ...defaultConverters.blocks,
    quoteBlock: ({ node }) => <div style={{ backgroundColor: 'pink' }}>{node.fields.quoteHeader}</div>,
  },
})

export { jsxConverters }

export default async function Page({ params }: { params: { post: string, locale: SiteLocale } }) {
  const { post: slug, locale } = await params

  const draft = ((await draftMode()).isEnabled)
  const payload = await getPayload({ config: configPromise })
  const data = await payload.find({ collection: 'posts', locale, draft, where: { slug: { equals: slug } } })
  const post = data.docs[0]

  if (!post)
    return notFound()

  return (
    <>
      <article className={s.post}>
        <h1>{post.title}</h1>
        <RichText
          data={post.content}
          //@ts-ignore
          converters={jsxConverters}
        />

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
    </>
  )
}