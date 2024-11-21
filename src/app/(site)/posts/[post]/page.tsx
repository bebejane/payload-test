import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payload test',
  description: 'Payload',
}

export default async function Page(params: { params: { post: string } }) {

  const { post: slug } = await params.params

  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'posts',
    where: {
      slug: { equals: slug },
    },
  })
  const post = data.docs[0]

  if (!post)
    return notFound()

  return (
    <article>
      {post.title}
      <p>{post.slug}</p>
    </article>
  )
}