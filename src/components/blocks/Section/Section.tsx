'use client'

import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

import styles from './style.module.scss'
import { Button, ButtonGroup } from '@/components/ui/Button'
import { useMounted } from '@/lib/useMounted'
import { SectionData } from '@/types/data'

export type SectionProps = {
  id?: string
  data: SectionData
}

export const Section = ({ id, data }: SectionProps) => {
  const mounted = useMounted()
  const skeletonClass = !mounted ? styles.skeleton : ''

  return (
    <div
      id={id}
      className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.image}>
            <div className={clsx(styles['image-wrap'])}>
              {mounted ? (
                <Image
                  src={data.image}
                  alt={data.title}
                  sizes="(max-width: 743px) 250px, 500px"
                  width={520}
                  height={520}
                />
              ) : (
                <div className={styles.skeleton}></div>
              )}
            </div>
          </div>
          <div className={styles.text}>
            <h3 className={skeletonClass}>{data.title}</h3>
            <h2 className={skeletonClass}>{data.subtitle}</h2>
            <p className={skeletonClass}>{data.content}</p>
            <ButtonGroup className={styles['button-group']}>
              <Button
                href={data.buttons[0].href}
                label={data.buttons[0].label}
                variant="primary"
                size="md"
                isSkeleton={!mounted}
              />
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
