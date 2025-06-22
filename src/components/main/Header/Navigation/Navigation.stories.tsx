import type { Meta, StoryObj } from '@storybook/nextjs'

import { Navigation as NavigationComponent } from './Navigation'

const meta: Meta<typeof NavigationComponent> = {
  title: 'Main/Header',
  component: NavigationComponent,
  decorators: [
    (Story) => {
      return (
        <div className="header flex center">
          <Story />
        </div>
      )
    },
  ],
}

export default meta
type Story = StoryObj

export const Navigation: Story = {}
