import type { Meta, StoryObj } from '@storybook/nextjs'

import { Logo as LogoComponent } from './Logo'

const meta: Meta<typeof LogoComponent> = {
  title: 'Main/Header',
  component: LogoComponent,
  decorators: [
    (Story) => {
      return (
        <div className="header">
          <Story />
        </div>
      )
    },
  ],
}

export default meta
type Story = StoryObj

export const Logo: Story = {}
