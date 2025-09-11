import type { Meta, StoryObj } from '@storybook/nextjs'

import { Logo as LogoComponent } from './Logo'

const meta: Meta<typeof LogoComponent> = {
  title: 'Utils/Logo',
  component: LogoComponent,
  args: {
    type: 'default',
    hasTitle: true,
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['default', 'dark', 'light'],
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="padding">
          <Story />
        </div>
      )
    },
  ],
}

export default meta
type Story = StoryObj

export const Default: Story = {}
