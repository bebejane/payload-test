import s from './page.module.scss'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Link } from '@i18n/navigation';
import { setRequestLocale } from 'next-intl/server';

type Props = LocaleParams<{ "post": string }>

export default async function Page({ params }: Props) {

  const { post, locale } = await params
  setRequestLocale(locale);

  const payload = await getPayload({ config: configPromise })
  const data = await payload.find({ collection: 'posts', locale })
  const posts = data.docs

  return (
    <>
      <article className={s.post}>
        <ul>
          {posts.map(post =>
            <li key={post.slug}>
              <Link key={post.id} href={`/posts/${post.slug}`} locale={locale}>{post.title}</Link>
            </li>
          )}
        </ul>
      </article>
    </>
  )
}