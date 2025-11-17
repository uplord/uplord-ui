import { useState } from 'react'

import styles from './accordion.module.scss'
import { Icon } from '@/components/utils/Icon'

const items = [
  {
    title: 'Title 1',
    content: (
      <>
        <p>Content 1</p>
        <p>Content 1</p>
      </>
    ),
  },
  { title: 'Title 2', content: <p>Content 1</p> },
  { title: 'Title 3', content: <p>Content 1</p> },
]

export const Accordion = () => {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div
          key={index}
          className={styles.item}>
          <div
            className={styles.title}
            onClick={() => toggleItem(index)}>
            {item.title}
            <Icon
              name={openItems.includes(index) ? 'ChevronDown' : 'ChevronUp'}
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
