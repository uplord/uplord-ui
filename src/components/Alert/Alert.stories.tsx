import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Alert } from './Alert'
import styles from './alert.module.scss'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'

const meta: Meta<typeof Alert> = {
  title: 'Utils/Alert',
  component: Alert,
  args: {
    type: 'default',
    title: 'Alert',
    icon: (
      <Icon
        name="Info"
        size="md"
      />
    ),
    button: (
      <Button
        size="sm"
        variant="text"
        hasIcon
        className={styles.button}>
        <Icon
          name="X"
          size="md"
        />
      </Button>
    ),
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['default', 'primary', 'error', 'warning', 'info', 'success'],
    },
    icon: {
      table: {
        disable: true,
      },
    },
    button: {
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
