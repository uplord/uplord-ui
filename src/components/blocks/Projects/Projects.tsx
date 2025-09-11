'use client'

import clsx from 'clsx'
import React from 'react'

import styles from './style.module.scss'
import BrewdogIcon from '@/assets/icons/brewdog.svg'
import GdkIcon from '@/assets/icons/gdk.svg'
import HungrrrIcon from '@/assets/icons/hungrrrr.svg'
import LeaselocoIcon from '@/assets/icons/leaseloco.svg'
import MacdonaldIcon from '@/assets/icons/macdonald.svg'
import SnappyIcon from '@/assets/icons/snappy.svg'
import { projectsData } from '@/data/data'
import { useMounted } from '@/lib/useMounted'

export type ProjectsProps = {
  id?: string
}

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  brewdog: BrewdogIcon,
  gdk: GdkIcon,
  leaseloco: LeaselocoIcon,
  macdonald: MacdonaldIcon,
  snappy: SnappyIcon,
  hungrrr: HungrrrIcon,
}

export const Projects = ({ id }: ProjectsProps) => {
  const mounted = useMounted()
  const data = projectsData()

  const skeletonClass = !mounted ? styles.skeleton : ''

  return (
    <div
      id={id}
      className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h3 className={skeletonClass}>My work</h3>
          <h2 className={skeletonClass}>Projects I&rsquo;ve worked on</h2>
        </div>
        <div className={styles.grid}>
          {data.map((project, index) => {
            const IconComponent = iconMap[project.icon]

            return (
              <div
                key={index}
                className={clsx(styles.item)}>
                {mounted ? (
                  <div
                    className={clsx(styles.image)}
                    style={{ backgroundColor: project.bgColor, color: project.textColor }}>
                    {IconComponent && (
                      <IconComponent
                        width={project.width}
                        height={project.height}
                        className={skeletonClass}
                      />
                    )}
                  </div>
                ) : (
                  <div className={styles.image}>
                    <div className={styles.skeleton}></div>
                  </div>
                )}
                <div className={styles.text}>
                  <h3 className={skeletonClass}>{project.title}</h3>
                  <p className={skeletonClass}>{project.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
