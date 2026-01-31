import type { Meta, StoryObj } from '@storybook/nextjs-vite'

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

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Title 1',
        content: (
          <>
            <p>Content 1</p>
            <p>Content 1</p>
          </>
        ),
      },
      { title: 'Title 2', content: <p>Content 1</p> },
      { title: 'Title 3', content: <p>Content 1</p> },
    ],
  },
}

export const Alt: Story = {
  args: {
    items: [
      {
        title: 'Title 1',
        content: (
          <>
            <p>Content 1</p>
            <p>Content 1</p>
          </>
        ),
      },
      { title: 'Title 2', content: <p>Content 1</p> },
      { title: 'Title 3', content: <p>Content 1</p> },
    ],
    openIcon: 'Minus',
    closedIcon: 'Plus',
    type: 'alt',
    allClosed: true,
  },
}
