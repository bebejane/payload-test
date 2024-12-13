'use client'

import s from './NavItem.module.scss'
import cn from 'classnames'
import React from 'react'
import Link from 'next/link'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Popup } from '@payloadcms/ui'

import { usePathname } from 'next/navigation'

export type NavItemType = {
  id: string
  slug: string
  label: string
  href: string
  icon?: string
  active?: boolean
  position?: number
  type: 'collection' | 'global'
}

type Props = {
  items: NavItemType[]
}

export default function NavItem({ id, href, label, icon }: NavItemType) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  })

  const currentPath = usePathname()
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    pointerEvents: isDragging ? 'none' : 'all',
  } as React.CSSProperties

  return (
    <>
      <li
        key={href}
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className={cn(s.item, currentPath === href && s.active)}
        suppressHydrationWarning={true}
      >
        <div className={s.label}>
          <Link href={href}>{label}</Link>
        </div>
      </li>
    </>
  )
}
