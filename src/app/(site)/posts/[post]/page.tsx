import s from './page.module.scss'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import { Metadata } from 'next'
import { RefreshRouteOnSave } from '@/lib/RefreshRouteOnSave'
import { JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'


export const metadata: Metadata = {
  title: 'Payload test',
  description: 'Payload',
}


const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    // myTextBlock is the slug of the block
    ...defaultConverters.blocks,
    quoteBlock: ({ node }) => <div style={{ backgroundColor: 'pink' }}>{node.fields.quoteHeader}</div>,
  },
})

export default async function Page(params: { params: { post: string } }) {

  const { post: slug } = await params.params

  const payload = await getPayload({ config: configPromise })
  const data = await payload.find({ collection: 'posts', where: { slug: { equals: slug } } })
  const post = data.docs[0]

  if (!post)
    return notFound()

  return (
    <>
      <article className={s.post}>
        <h1>{post.title}</h1>
        {typeof post.image === 'object' &&
          <img src={post.image?.url as string} alt={post.image?.alt} />
        }
        {/* <section dangerouslySetInnerHTML={{ __html: post.content_html as string }} />*/}
        <RichText converters={jsxConverters} data={post.content} />
        <section>
          <ul>
            {post.blocks?.map((block: any, index: number) =>
              <li key={index}>{block.quoteHeader}</li>
            )}
          </ul>
        </section>
      </article>
      <RefreshRouteOnSave />
    </>
  )
}