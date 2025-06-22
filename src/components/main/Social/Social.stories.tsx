import type { Meta, StoryObj } from '@storybook/nextjs'

import { Social } from './Social'

const meta: Meta<typeof Social> = {
  title: 'Main/Social',
  component: Social,
  decorators: [
    (Story) => {
      return (
        <div className="padding-y flex center">
          <Story />
        </div>
      )
    },
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
