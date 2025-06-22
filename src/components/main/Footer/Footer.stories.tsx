import type { Meta, StoryObj } from '@storybook/nextjs'

import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Main/Footer',
  component: Footer,
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

type Story = StoryObj<typeof meta>

export const Default: Story = {}
