'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'

import styles from './toggle.module.scss'
import { Checkbox, CheckboxProps } from '@/components/ui/Checkbox'
import { Icon } from '@/components/utils/Icon'

export type ToggleProps = {} & CheckboxProps

export const Toggle = ({ ...props }: ToggleProps) => {
  return (
    <div
      className={clsx(
        styles.toggle,
        props.isSkeleton && styles.skeleton,
        props.checked && styles.checked,
        props.className,
      )}>
      <motion.span
        animate={{ x: props.checked ? 40 : 0 }}
        transition={props.isSkeleton ? { duration: 0 } : { duration: 0.2 }}>
        <Icon
          name="Sun"
          size="md"
          className={styles.sun}
        />
        <Icon
          name="Moon"
          size="md"
          className={styles.moon}
        />
      </motion.span>
      <Checkbox
        {...props}
        className={clsx(styles.checkbox, props.className)}
      />
    </div>
  )
}
