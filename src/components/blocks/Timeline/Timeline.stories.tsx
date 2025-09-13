import type { Meta, StoryObj } from '@storybook/nextjs'

import { Timeline, TimelineProps } from '@/components/blocks/Timeline'
import { data } from '@/data'

const meta: Meta<typeof Timeline> = {
  title: 'Blocks/Timeline',
  component: Timeline,
  args: {
    data: data.timelineData,
  },
  decorators: [
    (Story) => {
      return (
        <div className="padding-y">
          <Story />
        </div>
      )
    },
  ],
}

export default meta
type Story = StoryObj<TimelineProps>

export const Default: Story = {}
