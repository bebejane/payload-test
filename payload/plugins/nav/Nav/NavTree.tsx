'use client'

import { SimpleTreeItemWrapper, SortableTree, TreeItemComponentProps, TreeItems } from 'dnd-kit-sortable-tree'
import React, { useState } from 'react'
import cn from 'classnames'
import s from './NavTree.module.scss'
import Link from 'next/link'

type Props = {
  items: TreeItemData[]
}
export const NavTree = ({ items: _items }: Props) => {
  const [items, setItems] = useState(_items)
  console.log(items)
  return (
    <div className={cn('nav__scroll', s.nav)}>
      <nav className="nav__wrap">
        <SortableTree items={items} onItemsChanged={setItems} TreeItemComponent={MinimalTreeItemComponent} />
      </nav>
    </div>
  )
}

type TreeItemData = any
/*
 * Here's the component that will render a single row of your tree
 */
const MinimalTreeItemComponent = React.forwardRef<HTMLDivElement, TreeItemComponentProps<TreeItemData>>(
  (props, ref) => (
    /* you could also use FolderTreeItemWrapper if you want to show vertical lines.  */
    <SimpleTreeItemWrapper {...props} contentClassName={s.item} ref={ref} showDragHandle={false} indentationWidth={5}>
      <Link href={props.item.href}>{props.item.label}</Link>
    </SimpleTreeItemWrapper>
  ),
)

MinimalTreeItemComponent.displayName = 'MinimalTreeItemComponent'
