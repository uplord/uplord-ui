import type { Meta, StoryObj } from '@storybook/nextjs'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Toggle as ToggleComponent } from './Toggle'
import { useMounted } from '@/lib/useMounted'

const meta: Meta<typeof ToggleComponent> = {
  title: 'Main/Header',
  component: ToggleComponent,
  parameters: {
    backgrounds: { disable: true },
  },
}

export default meta
type Story = StoryObj

export const Toggle: Story = {
  render: () => {
    const { resolvedTheme, setTheme } = useTheme()
    const [darkMode, setDarkMode] = useState(false)
    const mounted = useMounted()

    useEffect(() => {
      if (resolvedTheme) {
        setDarkMode(resolvedTheme === 'dark')
      }
    }, [resolvedTheme])

    return (
      <div className="header">
        <ToggleComponent
          name="toggle"
          value=""
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const isChecked = event.target.checked
            const newTheme = isChecked ? 'dark' : 'light'
            setDarkMode(isChecked)
            setTheme(newTheme)
          }}
          checked={darkMode}
          isSkeleton={!mounted}
        />
      </div>
    )
  },
}
