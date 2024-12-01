import s from './page.module.scss'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Link } from '@i18n/navigation';

type Props = LocaleParams<"post", string>

export default async function Page(params: Props) {

  const { post, locale } = await params.params

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