'use server'
import s from './Nav.module.scss'
import cn from 'classnames';
import type { AdminViewProps, VisibleEntities } from 'payload'
import { DefaultTemplate } from '@payloadcms/next/templates'
import { Gutter } from '@payloadcms/ui'
import React from 'react'
import Link from 'next/link'

type Props = any & {
  visibleEntities: VisibleEntities
  params: {
    segments: string[]
  }
}

const Nav: React.FC = (props: Props) => {

  const { params, searchParams, user, payload, locale, i18n, visibleEntities, permissions } = props
  const currentPath = `/admin/${params.segments.join('/')}`
  const links = visibleEntities.collections.map((slug: string) => `/admin/collections/${slug}`).concat(visibleEntities.globals.map((slug: string) => `/admin/globals/${slug}`))
  return (
    <div className="nav__scroll">
      <nav className={cn('nav__wrap', s.nav)}>
        <ul>
          {links.map((slug: string) =>
            <li key={slug} className={cn(currentPath === slug && s.active)}>
              <Link href={slug}>{slug.split('/').pop()}</Link>
            </li>
          )}

        </ul>
      </nav>
    </div>
  )
}

export default Nav