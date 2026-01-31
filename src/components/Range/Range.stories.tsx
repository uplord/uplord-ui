import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Range, RangeProps } from './Range'

const meta: Meta<RangeProps> = {
  title: 'UI/Range',
  component: Range,
  args: {
    min: 0,
    max: 100,
    step: 10,
    isDisabled: false,
  },
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    value: {
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

type Story = StoryObj<RangeProps>

export const Default: Story = {}
