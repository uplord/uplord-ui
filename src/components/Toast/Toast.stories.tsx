import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { toast } from 'react-toastify'

import { Toast, ToastProps } from './Toast'
import { Button } from '@/components/Button'

const meta: Meta<ToastProps> = {
  title: 'Utils/Toast',
  argTypes: {},
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

type Story = StoryObj<ToastProps>

export const Default: Story = {
  render: (args: ToastProps) => {
    const notify = () => toast('The action has been complete successfully')

    return (
      <>
        <Button
          label="Click"
          size="md"
          variant="primary"
          onClick={notify}
        />
        <Toast {...args} />
      </>
    )
  },
}
