import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Contribution } from './Contribution'

const meta: Meta<typeof Contribution> = {
  title: 'Utils/Contribution',
  component: Contribution,
  argTypes: {
    data: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
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

export const Default: Story = {
  args: {
    data: [
      { date: new Date('2025-01-01'), active: true },
      { date: new Date('2025-02-14'), active: true },
      { date: new Date('2025-05-31'), active: true },
      { date: new Date('2025-12-05'), active: true },
      { date: new Date('2025-12-07'), active: true },
      { date: new Date('2025-12-25'), active: true },
    ],
  },
}
