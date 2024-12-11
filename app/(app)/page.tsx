import { Metadata } from 'next'
import page from './[locale]/page'

export const metadata: Metadata = {
  title: 'Payload',
  description: 'Payload',
}
type Props = LocaleParams

export const dynamic = 'force-static'

export default async function Page(params: Props) {
  return page(params)
}
