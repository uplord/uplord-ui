import type { Meta, StoryObj } from '@storybook/nextjs'

import { Section, SectionProps } from '@/components/blocks/Section'
import { data } from '@/data'

const meta: Meta<typeof Section> = {
  title: 'Blocks/Section',
  component: Section,
  args: {
    data: data.sectionData,
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
type Story = StoryObj<SectionProps>

export const Default: Story = {}
