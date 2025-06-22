import { clsx } from 'clsx'

import styles from './social.module.scss'
import EmailIcon from '@/assets/icons/envelope-solid.svg'
import GithubIcon from '@/assets/icons/github-brands-solid.svg'
import InstagramIcon from '@/assets/icons/instagram-brands-solid.svg'
import LinkedinIcon from '@/assets/icons/linkedin-in-brands-solid.svg'
import { useMounted } from '@/lib/useMounted'

export type SocialProps = {
  className?: string
  isMounted?: boolean
}

export const Social = ({ className, isMounted = false }: SocialProps) => {
  const hasMounted = useMounted()
  const mounted = isMounted ? isMounted : hasMounted

  return (
    <div className={clsx(styles.social, className)}>
      <a
        href="https://www.linkedin.com/in/themichael/"
        target="_blank"
        className={clsx(styles.icon, styles.linkedin, !mounted && styles.skeleton)}
        aria-label="Linkedin">
        <LinkedinIcon
          width="20"
          height="20"
        />
      </a>
      <a
        href="https://www.instagram.com/michael.adam.allen/"
        target="_blank"
        className={clsx(styles.icon, styles.instagram, !mounted && styles.skeleton)}
        aria-label="Instagram">
        <InstagramIcon
          width="20"
          height="20"
        />
      </a>
      <a
        href="https://github.com/uplord/"
        target="_blank"
        className={clsx(styles.icon, styles.github, !mounted && styles.skeleton)}
        aria-label="GitHub">
        <GithubIcon
          width="20"
          height="20"
        />
      </a>
      <a
        href="mailto:michael@uplord.co.uk"
        className={clsx(styles.icon, styles.default, !mounted && styles.skeleton)}
        aria-label="Email">
        <EmailIcon
          width="20"
          height="20"
        />
      </a>
    </div>
  )
}
