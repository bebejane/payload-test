// empty page component

import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import { RefreshRouteOnSave } from '@/lib/RefreshRouteOnSave'

export const metadata: Metadata = {
  title: 'Payload test',
  description: 'Payload',
}

export default async function Page() {
  const payload = await getPayload({
    config: configPromise,
  })

  const home = await payload.findGlobal({ slug: 'home' })
  const { docs: posts } = await payload.find({
    collection: 'posts'
  })

  return (
    <>
      <article>
        <h1>{home.header}</h1>
        <ul>
          {posts.map(post => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </article>
      <RefreshRouteOnSave />
    </>
  )
}