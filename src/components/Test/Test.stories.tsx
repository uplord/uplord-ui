import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Test } from './Test'

const meta: Meta = {
  title: 'Utils/Test',
  component: Test,
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
