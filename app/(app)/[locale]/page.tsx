import s from './page.module.scss'
import cn from 'classnames';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { getPayload } from 'payload';
import configPromise from '@payload-config'
import { JSXConverters, RichText } from '@payloadcms/richtext-lexical/react';
import { jsxConverters } from './posts/[post]/page';
import { defaultLocale } from '@/i18n';
import { draftMode } from 'next/headers';
import Image from 'next/image'

export default async function Home({ params }: LocaleParams) {

  const { locale = defaultLocale } = await params
  setRequestLocale(locale);

  const payload = await getPayload({ config: configPromise })
  const draft = ((await draftMode()).isEnabled)
  const home = await payload.findGlobal({ slug: 'home', locale, draft })
  const data = await payload.find({ collection: 'posts', locale })
  const posts = data.docs

  return (
    <article className={cn(s.start)}>
      <h1>{home.header}</h1>
      <RichText data={home.content} converters={jsxConverters as unknown as JSXConverters} />
      {posts.map(post =>
        <Link key={post.id} href={`/${locale}/posts/${post.slug}`}>{post.title}</Link>
      )}
      {typeof home.image === 'object' && home.image?.url &&
        <Image
          className={s.image}
          src={home.image.url}
          width={home.image.width ?? 0}
          height={home.image.height ?? 0}
          alt={home.image.alt}
        />
      }
    </article>

  )
}
