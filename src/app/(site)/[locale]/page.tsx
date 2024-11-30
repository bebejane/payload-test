import s from './page.module.scss'
import cn from 'classnames';
import { LocaleParams } from '@app/(site)/[locale]/layout';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { getPayload } from 'payload';
import configPromise from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react';
import { jsxConverters } from './posts/[post]/page';

export default async function Home({ params }: LocaleParams) {

  const { locale } = await params
  setRequestLocale(locale);

  const payload = await getPayload({ config: configPromise })
  const home = await payload.findGlobal({ slug: 'home', locale })
  const { docs: posts } = await payload.find({
    collection: 'posts',
    locale
  })

  return (
    <>
      <article className={cn(s.start)}>
        <h1>{home.header}</h1>
        <RichText data={home.content} converters={jsxConverters} />
        <Link href={`/${locale}/posts`}>Posts ({locale})</Link>
      </article>
    </>
  )
}
