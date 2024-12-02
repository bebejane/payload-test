// empty page component

import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import { RefreshRouteOnSave } from '@/lib/RefreshRouteOnSave'
import { defaultLocale } from '@/i18n'

export const metadata: Metadata = {
  title: 'Payload',
  description: 'Payload',
}
type Props = LocaleParams

export default async function Page({ params }: Props) {

  const { locale = defaultLocale } = await params
  const payload = await getPayload({
    config: configPromise,
  })

  const home = await payload.findGlobal({ slug: 'home', locale })
  const { docs: posts } = await payload.find({
    collection: 'posts',
    locale
  })

  return (
    <>
      <article>
        <ul>
          {posts.map(post => (
            <li key={post.slug}>
              <Link href={`/${locale}/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </article>
      <RefreshRouteOnSave />
    </>
  )
}