import type { Meta, StoryObj } from '@storybook/nextjs'

import { Example } from './Example'

const meta: Meta<typeof Example> = {
  title: 'Utils/Example',
  component: Example,
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
