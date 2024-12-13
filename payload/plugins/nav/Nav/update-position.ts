'use server'

import { getPayload } from "payload"
import { NavItemType } from "./NavItem"
import config from '@payload-config'

export async function updatePositions(items: NavItemType[]) {

  const payload = await getPayload({ config })

  const res = await Promise.all(items.map(async (item) => {
    const { docs } = await payload.find({
      collection: 'nav', where: {
        slug: { equals: item.slug }
      }
    })

    let doc = docs[0]

    if (doc) {
      const res = await payload.update({
        collection: 'nav',
        data: item,
        where: {
          slug: { equals: item.slug }
        }
      })
      return res.docs[0]
    } else {
      const res = await payload.create({ collection: 'nav', data: item })
      return res
    }

  }))

  const _items: NavItemType[] = []
  res.forEach(item => {
    if (item)
      _items.push(item as unknown as NavItemType)
  })

  return _items
}