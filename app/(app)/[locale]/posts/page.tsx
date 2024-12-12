import s from './page.module.scss'
import { Link } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'
import executeQuery from '@/lib/graphql-client'
import { AllPostsDocument } from '@/graphql'

type Props = LocaleParams<{ post: string }>

export default async function Posts({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const { Posts } = await executeQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument)
  const posts = Posts?.docs?.filter((p) => p !== null)

  return (
    <>
      <article className={s.post}>
        <ul>
          {posts ? (
            posts.map((post) => (
              <li key={post.slug}>
                <Link key={post.id} href={`/posts/${post.slug}`} locale={locale}>
                  {post.title}
                </Link>
              </li>
            ))
          ) : (
            <li>No posts...</li>
          )}
        </ul>
      </article>
    </>
  )
}
