import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useEffect, useState } from 'react'

import { InputOtp, InputOtpProps } from './InputOtp'
import { Button } from '@/components/Button'

const meta: Meta<InputOtpProps> = {
  title: 'UI/InputOtp',
  component: InputOtp,
  args: {
    isDisabled: false,
    isLoading: false,
    isSkeleton: false,
    isError: false,
  },
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="padding">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<InputOtpProps>

export const Default: Story = {
  render: (args: InputOtpProps) => {
    const [value, setValue] = useState('')
    return (
      <InputOtp
        {...args}
        name="input-otp"
        value={value}
        onChange={(value) => setValue(value)}
      />
    )
  },
}

export const Submit: Story = {
  render: (args: InputOtpProps) => {
    const [value, setValue] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
      if (value.length === 6) {
        setIsDisabled(false)
      } else {
        setIsDisabled(true)
      }
    }, [value])
    return (
      <>
        <InputOtp
          {...args}
          name="input-otp"
          value={value}
          onChange={(value) => setValue(value)}
        />
        <Button
          label="Submit"
          size="md"
          variant="primary"
          isDisabled={isDisabled}
          onClick={() => alert(`Code - ${value}`)}
        />
      </>
    )
  },
}
