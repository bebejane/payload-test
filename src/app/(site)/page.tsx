// empty page component

import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Payload test',
  description: 'Payload',
}

export default async function Page() {
  const payload = await getPayload({
    config: configPromise,
  })

  const { docs: posts } = await payload.find({
    collection: 'posts'
  })

  return (
    <article>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </article>
  )
}