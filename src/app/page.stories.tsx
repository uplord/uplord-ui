import type { Meta, StoryObj } from '@storybook/nextjs'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'

import styles from '@/app/page.module.scss'
import { Header, Footer, Banner, Projects, Section, Stack, Timeline } from '@/components'

const meta: Meta<typeof Banner> = {
  title: 'Pages/Home',
  component: Banner,
  args: {
    hasHeader: true,
  },
  parameters: {
    backgrounds: { disable: true },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => {
    const { resolvedTheme, setTheme } = useTheme()
    const [activeSection, setActiveSection] = useState<string | null>(null)

    const sectionsRef = useRef<Record<string, HTMLElement | null>>({})

    const handleToggleTheme = (theme: 'dark' | 'light') => {
      setTheme(theme)
    }

    const theme = resolvedTheme === 'dark' || resolvedTheme === 'light' ? resolvedTheme : undefined

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        },
        {
          root: null,
          rootMargin: '0px 0px -80% 0px',
          threshold: 0,
        },
      )

      Object.values(sectionsRef.current).forEach((section) => {
        if (section) observer.observe(section)
      })

      return () => {
        observer.disconnect()
      }
    }, [])

    return (
      <div className={styles.page}>
        <Header
          isHome
          theme={theme}
          onToggleTheme={handleToggleTheme}
          activeSection={activeSection}
        />
        <main className={styles.main}>
          <Banner
            id="banner"
            ref={(el) => {
              sectionsRef.current['banner'] = el
            }}
          />
          <Section
            id="about-me"
            ref={(el) => {
              sectionsRef.current['about-me'] = el
            }}
          />
          <Projects
            id="projects"
            ref={(el) => {
              sectionsRef.current['projects'] = el
            }}
          />
          <Timeline
            id="timeline"
            ref={(el) => {
              sectionsRef.current['timeline'] = el
            }}
          />
          <Stack
            id="stack"
            ref={(el) => {
              sectionsRef.current['stack'] = el
            }}
          />
        </main>
        <Footer />
      </div>
    )
  },
}
