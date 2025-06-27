import type { Meta, StoryObj } from '@storybook/nextjs'
import { useTheme } from 'next-themes'

import { Header, HeaderProps } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Main/Header',
  component: Header,
  parameters: {
    backgrounds: { disable: true },
  },
}

export default meta
type Story = StoryObj<HeaderProps>

export const Default: Story = {
  render: () => {
    const { resolvedTheme, setTheme } = useTheme()

    const handleToggleTheme = (theme: 'dark' | 'light') => {
      setTheme(theme)
    }

    const theme = resolvedTheme === 'dark' || resolvedTheme === 'light' ? resolvedTheme : undefined

    return (
      <Header
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />
    )
  },
}
