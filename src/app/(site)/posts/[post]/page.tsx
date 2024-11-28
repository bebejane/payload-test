import s from './page.module.scss'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import { Metadata } from 'next'
import { RefreshRouteOnSave } from '@/lib/RefreshRouteOnSave'

export const metadata: Metadata = {
  title: 'Payload test',
  description: 'Payload',
}

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
        {post.image?.url && <img src={post.image.url} alt="hej" />}
        <section dangerouslySetInnerHTML={{ __html: post.content_html as string }} />
      </article>
      <RefreshRouteOnSave />
    </>
  )
}