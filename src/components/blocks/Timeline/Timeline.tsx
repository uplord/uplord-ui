import clsx from 'clsx'
import React, { forwardRef } from 'react'

import styles from './style.module.scss'
import HungrrrIcon from '@/assets/icons/hungrrr-logo.svg'
import LeaselocoIcon from '@/assets/icons/leaseloco-logo.svg'
import MtcIcon from '@/assets/icons/mtc-logo.svg'
import SnappyIcon from '@/assets/icons/snappy-logo.svg'
import { timelineData } from '@/data/data'
import { useMounted } from '@/lib/useMounted'

export type TimelineProps = {
  id?: string
}

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  'leaseloco-logo': LeaselocoIcon,
  'snappy-logo': SnappyIcon,
  'hungrrr-logo': HungrrrIcon,
  'mtc-logo': MtcIcon,
}

export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(({ id }, ref) => {
  const mounted = useMounted()
  const data = timelineData()
  const skeletonClass = !mounted ? styles.skeleton : ''

  return (
    <div
      ref={ref}
      id={id}
      className={styles.timeline}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={skeletonClass}>My timeline</h2>
          <h3 className={skeletonClass}>Explore key roles and milestones over the years</h3>
        </div>

        <div className={styles.list}>
          {data.map((item, index) => {
            const IconComponent = iconMap[item.icon]

            return (
              <div
                key={index}
                className={styles.item}>
                <div className={styles.left}>
                  <span className={clsx(styles.dot, skeletonClass)}></span>
                  <div className={styles.text}>
                    <h4 className={skeletonClass}>{item.date}</h4>
                    {IconComponent && (
                      <IconComponent
                        height="32"
                        className={skeletonClass}
                      />
                    )}
                  </div>
                </div>
                <div className={styles.right}>
                  <h4 className={skeletonClass}>{item.location}</h4>
                  <h5 className={skeletonClass}>{item.role}</h5>
                  {item.description.map((paragraph, i) => (
                    <p
                      key={i}
                      className={skeletonClass}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
})

Timeline.displayName = 'Timeline'
