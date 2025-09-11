'use client'

import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

import styles from './style.module.scss'
import { Social } from '@/components/main/Social'
import { Button, ButtonGroup } from '@/components/ui/Button'
import { useMounted } from '@/lib/useMounted'
import { BannerData } from '@/types/data'

export type BannerProps = {
  id?: string
  data: BannerData
  hasHeader?: boolean
}

export const Banner = ({ id, data, hasHeader = false }: BannerProps) => {
  const mounted = useMounted()
  const skeletonClass = !mounted ? styles.skeleton : ''

  return (
    <div
      id={id}
      className={clsx(styles.banner, hasHeader && styles.header)}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.image}>
            <div className={clsx(styles['image-wrap'])}>
              {mounted ? (
                <>
                  <Image
                    src={data.image}
                    alt={data.title}
                    sizes="(max-width: 743px) 140px, 500px"
                    width={500}
                    height={500}
                    priority
                  />
                  <Social
                    className={styles.social}
                    isMounted={mounted}
                  />
                </>
              ) : (
                <div className={styles.skeleton}></div>
              )}
            </div>
          </div>
          <div className={styles.text}>
            <h1>
              <span className={clsx(styles.primary, skeletonClass)}>{data.title}</span>
              <span className={skeletonClass}>{data.subtitle}</span>
            </h1>
            <h2 className={skeletonClass}>{data.content}</h2>
            <ButtonGroup className={styles['button-group']}>
              <Button
                href={data.buttons[0].href}
                label={data.buttons[0].label}
                variant="primary"
                size="md"
                isSkeleton={!mounted}
                className={clsx(!mounted && styles.skeleton)}
              />
              <Button
                href={data.buttons[1].href}
                label={data.buttons[1].label}
                target="_blank"
                variant="default"
                size="md"
                isSkeleton={!mounted}
                className={clsx(!mounted && styles.skeleton, styles.button)}
              />
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
