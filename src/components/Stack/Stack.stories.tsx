import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Stack, StackProps } from './Stack'
import { Button } from '@/components/Button'

const meta: Meta<StackProps> = {
  title: 'Utils/Stack',
  component: Stack,
  argTypes: {
    list: {
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

type Story = StoryObj<StackProps>

export const Default: Story = {
  args: {
    type: 'info',
    title: 'Stack Title',
    list: [
      <>
        <h2>Testing 1</h2>
        <p>Testing 1</p>
        <p>Testing 1</p>
        <Button
          label="Test"
          size="md"
          variant="default"
        />
      </>,
      <>Testing 2</>,
      <>Testing 3</>,
    ],
    height: 420,
    center: false,
    border: false,
    position: 'bottom',
    mode: 'light',
  },
}
