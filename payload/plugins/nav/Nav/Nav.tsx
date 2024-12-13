// nextjs client componet

'use client'

import s from './Nav.module.scss'
import cn from 'classnames'
import React, { useEffect, useState } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { updatePositions } from './update-position'
import NavItem, { NavItemType } from './NavItem'
import { usePathname, useRouter } from 'next/navigation'

type Props = {
  items: NavItemType[]
}

export default function Nav({ items: _items }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const [items, setItems] = useState<NavItemType[]>(_items)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      onActivation: (e) => {},
      activationConstraint: {
        distance: 1,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  function handleDragEnd(event: any) {
    const { active, over } = event

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id)
        const newIndex = items.findIndex((i) => i.id === over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }
  useEffect(() => {
    updatePositions(items)
      .then((_items) => {
        console.log('updated positions')
        router.refresh()
      })
      .catch((e) => {
        console.log('error', e)
      })
  }, [items])

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="nav__scroll">
          <nav className={cn('nav__wrap', s.nav)}>
            <ul>
              {items.map((item, i) => (
                <NavItem key={item?.id} {...item} />
              ))}
            </ul>
          </nav>
        </div>
      </SortableContext>
    </DndContext>
  )
}
