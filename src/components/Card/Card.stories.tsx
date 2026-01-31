import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Card, CardProps } from './Card'

const meta: Meta<CardProps> = {
  title: 'Utils/Card',
  component: Card,
  argTypes: {
    children: {
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
}

export default meta

type Story = StoryObj<CardProps>

export const Default: Story = {
  args: {
    border: true,
  },
  render: (args: CardProps) => (
    <div className="padding">
      <Card {...args}>
        <h3>Content</h3>
        <p>Content</p>
        <p>Content</p>
      </Card>
    </div>
  ),
}
