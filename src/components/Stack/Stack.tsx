import clsx from 'clsx'
import { ReactNode, useState } from 'react'

import styles from './stack.module.scss'
import { Button, ButtonGroup } from '@/components/Button'
import { Icon } from '@/components/Icon'

export interface StackProps {
  type: 'default' | 'primary' | 'error' | 'warning' | 'info' | 'success'
  title?: string
  list: ReactNode[]
  height?: number
  center?: boolean
  border?: boolean
  position?: 'top' | 'bottom'
  mode?: 'default' | 'light' | 'dark'
  className?: string
}

interface TopContentsProps {
  title?: string
  list: ReactNode[]
  goPrev: () => void
  goNext: () => void
}

const TopContents = ({ title, list, goPrev, goNext }: TopContentsProps) => (
  <div className={styles.top}>
    <span>{title}</span>
    {list.length > 1 && (
      <ButtonGroup className={clsx(styles.buttons)}>
        <Button
          variant="custom"
          size="sm"
          hasIcon
          className={styles.button}
          onClick={goPrev}>
          <Icon
            name="ChevronLeft"
            size="md"
          />
        </Button>
        <Button
          variant="custom"
          size="sm"
          hasIcon
          className={styles.button}
          onClick={goNext}>
          <Icon
            name="ChevronRight"
            size="md"
          />
        </Button>
      </ButtonGroup>
    )}
  </div>
)

export const Stack = ({
  type = 'default',
  title,
  list,
  height,
  center = false,
  border = false,
  position = 'top',
  mode = 'default',
  className = '',
}: StackProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1))
  }

  const goNext = () => {
    setCurrentIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1))
  }

  return (
    <div
      className={clsx(
        styles.main,
        styles[type],
        center && styles.center,
        border && styles.border,
        className,
      )}>
      {position === 'top' && (
        <TopContents
          title={title}
          list={list}
          goPrev={goPrev}
          goNext={goNext}
        />
      )}
      <div
        className={clsx(styles.content, styles[mode], mode)}
        style={{ height }}>
        {list[currentIndex]}
      </div>
      {position === 'bottom' && (
        <TopContents
          title={title}
          list={list}
          goPrev={goPrev}
          goNext={goNext}
        />
      )}
    </div>
  )
}
