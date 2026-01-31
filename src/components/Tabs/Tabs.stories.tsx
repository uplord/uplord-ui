import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Tabs, TabsProps } from './Tabs'
import styles from './tabs.module.scss'
import { Card } from '@/components/Card'

const meta: Meta = {
  title: 'Utils/Tabs',
  component: Tabs,
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

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Title 1',
        content: (
          <>
            <h3>Heading</h3>
            <p>Content 1</p>
            <p>Content 1</p>
          </>
        ),
      },
      { title: 'Title 2', content: <p>Content 2</p> },
      { title: 'Title 3', content: <p>Content 3</p> },
    ],
  },
}

export const TabsCard: Story = {
  args: {
    items: [
      {
        title: 'Title 1',
        content: (
          <>
            <h3>Heading</h3>
            <p>Content 1</p>
            <p>Content 1</p>
          </>
        ),
      },
      { title: 'Title 2', content: <p>Content 2</p> },
      { title: 'Title 3', content: <p>Content 3</p> },
    ],
  },
  render: (args: TabsProps) => {
    return (
      <Card
        padding={false}
        border>
        <Tabs
          {...args}
          card
          className={styles.tabs}
        />
      </Card>
    )
  },
}
