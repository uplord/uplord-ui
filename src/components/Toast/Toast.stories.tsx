import type { Meta, StoryObj, StoryContext } from '@storybook/nextjs-vite'
import { toast } from 'react-toastify'

import { Toast, ToastProps } from './Toast'
import { Button, Theme } from '@/components/Button'

const getStoryTheme = (context: StoryContext<ToastProps>): Theme => {
  const background = context.globals.backgrounds?.value || 'light'
  return background === 'dark' ? Theme.Dark : Theme.Light
}

const meta: Meta<ToastProps> = {
  title: 'Utils/Toast',
  decorators: [
    (Story, context) => {
      const theme = getStoryTheme(context)

      return (
        <div className="padding">
          <Story args={{ ...context.args, theme }} />
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
