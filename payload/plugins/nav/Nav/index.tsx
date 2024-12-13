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
  const nav = await payload.findGlobal({ slug: 'nav' })
  const saved = (nav?.data as NavItemType[]) ?? []

  const collections = payload.config.collections
    .filter(({ slug }) => visibleEntities.collections.includes(slug))
    .map(({ slug, admin }) => ({
      id: slug,
      slug,
      label: admin?.description ?? slug.split('/').pop(),
      href: `/admin/collections/${slug}`,
      active: false,
      type: 'collection',
      position: saved.findIndex((item) => item.slug === slug && item.type === 'collection'),
    }))

  const globals = payload.config.globals
    .filter(({ slug }) => visibleEntities.globals.includes(slug))
    .map(({ slug, admin }) => ({
      id: slug,
      slug: slug as string,
      label: admin?.description ?? slug.split('/').pop(),
      href: `/admin/globals/${slug}`,
      active: false,
      type: 'global',
      position: saved.findIndex((item) => item.slug === slug && item.type === 'global'),
    }))

  const items = [...collections, ...globals].sort((a, b) =>
    a.position === b.position ? 0 : a.position > b.position ? 1 : -1,
  ) as NavItemType[]

  return <Nav items={items} />
}

export default Navigation
