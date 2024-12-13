import React from 'react'
import Nav from './Nav'
import { getPayload } from 'payload'
import type { ServerProps } from 'payload'
import { NavItemType } from './NavItem'
import config from '@payload-config'

const Navigation = async (props: { clientProps: ServerProps }) => {
  const { visibleEntities } = props.clientProps

  if (!visibleEntities) return null

  const payload = await getPayload({ config })
  const { docs } = await payload.find({ collection: 'nav' })
  const saved = docs.sort((a, b) =>
    a.position === b.position ? 1 : a.position > b.position ? -1 : 1,
  )

  const collections = payload.config.collections
    .filter(({ slug }) => visibleEntities.collections.includes(slug))
    .map(({ slug, admin }) => ({
      id: slug,
      slug,
      label: admin?.description ?? slug.split('/').pop(),
      href: `/admin/collections/${slug}`,
      type: 'collection',
    }))

  const globals = payload.config.globals
    .filter(({ slug }) => visibleEntities.globals.includes(slug))
    .map(({ slug, admin }) => ({
      id: slug,
      slug: slug as string,
      label: admin?.description ?? slug.split('/').pop(),
      href: `/admin/globals/${slug}`,
      type: 'global',
    }))

  const items = [...collections, ...globals]
    .sort((a, b) => {
      const idxA = saved.findIndex((item) => a.slug === item.slug && a.type === item.type)
      const idxB = saved.findIndex((item) => b.slug === item.slug && b.type === item.type)
      return idxA === idxB ? 0 : idxA > idxB ? -1 : 1
    })
    .map((item, i) => ({ ...item, position: i })) as NavItemType[]

  return <Nav items={items} />
}

export default Navigation
