import type { Meta, StoryObj } from '@storybook/nextjs'
import { useTheme } from 'next-themes'

import styles from '@/app/page.module.scss'
import { Header, Footer, Banner, Projects, Section, Stack, Timeline } from '@/components'
import { useActiveSection } from '@/lib/useActiveSection'

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
    const activeId = useActiveSection(['banner', 'about-me', 'projects', 'timeline'])

    const handleToggleTheme = (theme: 'dark' | 'light') => {
      setTheme(theme)
    }

    const theme = resolvedTheme === 'dark' || resolvedTheme === 'light' ? resolvedTheme : undefined

    return (
      <div className={styles.page}>
        <Header
          isHome
          theme={theme}
          onToggleTheme={handleToggleTheme}
          activeSection={activeId}
        />
        <main className={styles.main}>
          <Banner id="banner" />
          <Section id="about-me" />
          <Projects id="projects" />
          <Timeline id="timeline" />
          <Stack id="stack" />
        </main>
        <Footer />
      </div>
    )
  },
}
