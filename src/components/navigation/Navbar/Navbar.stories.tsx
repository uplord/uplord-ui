import type { Meta, StoryObj } from '@storybook/nextjs'

import { Navbar, NavbarProps } from './Navbar'
import styles from './navbar.module.scss'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/utils/Icon'

const meta: Meta<NavbarProps> = {
  title: 'Navigation/Navbar',
  component: Navbar,
  args: {
    position: 'bottom',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
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
        <div className="padding-y">
          <Story />
        </div>
      )
    },
  ],
}

export default meta

type Story = StoryObj<NavbarProps>

export const Default: Story = {
  args: {
    children: (
      <>
        <Button
          size="md"
          variant="anchor"
          className={styles.button}
          hasPadding={false}>
          <Icon
            name="Home"
            size="lg"
          />
          <span>Home</span>
        </Button>
        <Button
          size="md"
          variant="anchor"
          className={styles.button}
          hasPadding={false}>
          <Icon
            name="Search"
            size="lg"
          />
          <span>Search</span>
        </Button>
        <Button
          size="md"
          variant="anchor"
          className={styles.button}
          hasPadding={false}>
          <Icon
            name="User"
            size="lg"
          />
          <span>Profile</span>
        </Button>
        <Button
          size="md"
          variant="anchor"
          className={styles.button}
          hasPadding={false}>
          <Icon
            name="Settings"
            size="lg"
          />
          <span>Search</span>
        </Button>
      </>
    ),
  },
}
