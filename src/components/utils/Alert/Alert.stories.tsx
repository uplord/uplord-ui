import type { Meta, StoryObj } from '@storybook/nextjs'

import { Alert } from './Alert'
import styles from './alert.module.scss'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/utils/Icon'

const meta: Meta<typeof Alert> = {
  title: 'Utils/Alert',
  component: Alert,
  args: {
    type: 'error',
    title: 'Alert',
    icon: (
      <Icon
        name="Info"
        size="md"
      />
    ),
    button: (
      <Button
        leadingIcon="X"
        size="md"
        variant="anchor"
        className={styles.button}
      />
    ),
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['default', 'error', 'warning', 'info', 'success'],
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
