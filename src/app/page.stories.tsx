import type { Meta, StoryObj } from '@storybook/nextjs'
import { useTheme } from 'next-themes'

import { Header, Footer, Banner, Projects, Section, Stack, Timeline } from '@/components'
import styles from '@/app/page.module.scss'

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

type PageProps = {
  hasHeader?: boolean
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: (args: PageProps) => {
    const { resolvedTheme, setTheme } = useTheme()

    const handleToggleTheme = (theme: 'dark' | 'light') => {
      setTheme(theme)
    }

    const theme = resolvedTheme === 'dark' || resolvedTheme === 'light' ? resolvedTheme : undefined

    return (
      <div className={styles.page}>
        {args.hasHeader && (
          <Header
            theme={theme}
            onToggleTheme={handleToggleTheme}
          />
        )}
        <main className={styles.main}>
          <Banner hasHeader={args.hasHeader} />
          <Section />
          <Projects />
          <Timeline />
          <Stack />
        </main>
        <Footer />
      </div>
    )
  },
}
