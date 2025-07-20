import type { Meta, StoryObj } from '@storybook/nextjs'

import { Accordion } from './Accordion'

const meta: Meta = {
  title: 'Utils/Accordion',
  component: Accordion,
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
