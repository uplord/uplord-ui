import React, { forwardRef } from 'react'

import styles from './style.module.scss'
import AwsIcon from '@/assets/icons/aws.svg'
import CssIcon from '@/assets/icons/css.svg'
import GitIcon from '@/assets/icons/git.svg'
import GithubIcon from '@/assets/icons/github.svg'
import Html5Icon from '@/assets/icons/html5.svg'
import JsIcon from '@/assets/icons/js.svg'
import NetlifyIcon from '@/assets/icons/netlify.svg'
import NextjsIcon from '@/assets/icons/nextjs.svg'
import ReactIcon from '@/assets/icons/react.svg'
import SassIcon from '@/assets/icons/sass.svg'
import TypescriptIcon from '@/assets/icons/typescript.svg'
import VscodeIcon from '@/assets/icons/vscode.svg'
import { useMounted } from '@/lib/useMounted'

export type StackProps = {
  id?: string
}

const stackIcons = [
  { name: 'HTML5', Icon: Html5Icon },
  { name: 'CSS3', Icon: CssIcon },
  { name: 'JavaScript', Icon: JsIcon },
  { name: 'Sass', Icon: SassIcon },
  { name: 'React', Icon: ReactIcon },
  { name: 'Next.js', Icon: NextjsIcon },
  { name: 'TypeScript', Icon: TypescriptIcon },
  { name: 'Git', Icon: GitIcon },
  { name: 'GitHub', Icon: GithubIcon },
  { name: 'AWS', Icon: AwsIcon },
  { name: 'Netlify', Icon: NetlifyIcon },
  { name: 'VS Code', Icon: VscodeIcon },
]

export const Stack = forwardRef<HTMLDivElement, StackProps>(({ id }, ref) => {
  const mounted = useMounted()

  const skeletonClass = !mounted ? styles.skeleton : ''

  return (
    <div
      ref={ref}
      id={id}
      className={styles.stack}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={skeletonClass}>My current stack</h2>
        </div>
        <div className={styles.list}>
          {stackIcons.map(({ name, Icon }) => (
            <div
              key={name}
              className={styles.item}>
              {mounted ? (
                <div
                  className={styles.image}
                  data-tooltip={name}>
                  <Icon
                    width="60"
                    height="60"
                  />
                </div>
              ) : (
                <div className={styles.image}>
                  <div className={styles.skeleton}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

Stack.displayName = 'Stack'
