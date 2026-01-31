import clsx from 'clsx'
import { ReactNode, useState } from 'react'

import styles from './tabs.module.scss'
import { Button } from '@/components/Button'

type Items = {
  title: string
  content: ReactNode
}

export type TabsProps = {
  items: Items[]
  card?: boolean
  className?: string
}

export const Tabs = ({ items, card, className = '' }: TabsProps) => {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(index)
  }

  return (
    <div className={clsx(styles.container, card && styles.card, className)}>
      <div className={styles.options}>
        {items.map((item, index) => (
          <Button
            key={index}
            label={item.title}
            size="md"
            variant="text"
            hasHover={false}
            className={clsx(styles.button, openIndex === index && styles.active)}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>

      {items.map(
        (item, index) =>
          openIndex === index && (
            <div
              key={index}
              className={styles.content}>
              {item.content}
            </div>
          ),
      )}
    </div>
  )
}
