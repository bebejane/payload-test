// empty page component

import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import { RefreshRouteOnSave } from 'lib/RefreshRouteOnSave'

export default async function Page() {

  return (
    <>
      <article>
        Member
      </article>
    </>
  )
}