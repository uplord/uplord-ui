import type { Meta, StoryObj } from '@storybook/nextjs'

import { Projects, ProjectsProps } from '@/components/blocks/Projects'
import { projectsData } from '@/data/data'

const meta: Meta<typeof Projects> = {
  title: 'Blocks/Projects',
  component: Projects,
  args: {
    data: projectsData(),
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
type Story = StoryObj<ProjectsProps>

export const Default: Story = {}
