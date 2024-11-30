import s from './page.module.scss'
import configPromise from '@payload-config'
import { LocaleParams } from '@/app/(site)/[locale]/layout';
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import { Metadata } from 'next'
import { RefreshRouteOnSave } from '@/lib/RefreshRouteOnSave'
import { Link } from '@i18n/navigation';

export default async function Page(params: { params: { post: string, locale: 'en' | 'se' } }) {

  const { post: slug, locale } = await params.params

  const payload = await getPayload({ config: configPromise })
  const data = await payload.find({ collection: 'posts', locale })
  const posts = data.docs

  return (
    <>
      <article className={s.post}>
        <ul>
          {posts.map(post =>
            <li key={post.slug}>
              <Link key={post.id} href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          )}
        </ul>
      </article>

    </>
  )
}