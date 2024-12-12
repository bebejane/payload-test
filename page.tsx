import { Metadata } from 'next'
import page from './[locale]/page'
import { defaultLocale, locales } from '@/i18n/request'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Payload',
  description: 'Payload',
}

type Props = LocaleParams

export default async function Page(params: Props) {
  return page(params)
}
