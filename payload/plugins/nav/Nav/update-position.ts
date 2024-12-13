'use server'

import { getPayload } from "payload"
import { NavItemType } from "./NavItem"
import config from '@payload-config'

export async function updatePositions(items: NavItemType[]) {

  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'nav',
    data: {
      data: items
    }
  })

  const data = await payload.findGlobal({ slug: 'nav', depth: 2 })
  console.log('update positions', 'server')

  return data
}