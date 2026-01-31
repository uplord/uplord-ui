'use client'

import clsx from 'clsx'
import { ReactNode, useState } from 'react'

import styles from './accordion.module.scss'
import { Icon, IconProps } from '@/components/Icon'

type Items = {
  title: string
  content: ReactNode
}

export type AccordionProps = {
  items: Items[]
  openIcon?: IconProps['name']
  closedIcon?: IconProps['name']
  type: 'default' | 'alt'
  allClosed: boolean
}

export const Accordion = ({
  items,
  openIcon = 'ChevronUp',
  closedIcon = 'ChevronDown',
  type = 'default',
  allClosed = false,
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<number[]>(allClosed ? [] : [0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  return (
    <div className={clsx(styles.container, styles[type])}>
      {items.map((item, index) => (
        <div
          key={index}
          className={styles.item}
          onClick={() => toggleItem(index)}>
          <div className={styles.title}>
            {item.title}
            <Icon
              name={openItems.includes(index) ? openIcon : closedIcon}
              size="md"
              className={openItems.includes(index) ? styles.iconOpen : ''}
            />
          </div>
          {openItems.includes(index) && <div className={styles.content}>{item.content}</div>}
        </div>
      ))}
    </div>
  )
}
