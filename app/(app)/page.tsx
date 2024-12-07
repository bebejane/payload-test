import { Metadata } from 'next'
import page from './[locale]/page'

export const metadata: Metadata = {
  title: 'Payload',
  description: 'Payload',
}
type Props = LocaleParams

export default async function Page(params: Props) {
  return page(params)
}