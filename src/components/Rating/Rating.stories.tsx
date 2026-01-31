import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Rating, RatingProps } from './Rating'

const meta: Meta<RatingProps> = {
  title: 'Utils/Rating',
  component: Rating,
  args: {
    rating: 5,
  },
  argTypes: {
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 1 },
      description: 'Rating value from 0 to 5',
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

type Story = StoryObj<RatingProps>

export const Default: Story = {
  render: (args: RatingProps) => <Rating {...args} />,
}
