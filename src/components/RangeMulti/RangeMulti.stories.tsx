import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'

import { RangeMulti, RangeMultiProps } from './RangeMulti'
import { Input } from '@/components/Input'

const meta: Meta<RangeMultiProps> = {
  title: 'UI/Range Multi',
  component: RangeMulti,
  args: {
    value1: 200,
    value2: 800,
    min: 100,
    max: 1000,
    step: 50,
    minGap: 100,
    isDisabled: false,
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
    onChange: {
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

type Story = StoryObj<RangeMultiProps>

export const Default: Story = {
  render: (args) => {
    const [value1, setValue1] = useState<number>(args.value1 || 0)
    const [value2, setValue2] = useState<number>(args.value2 || 0)

    const onChange = (value1: number, value2: number) => {
      setValue1(value1)
      setValue2(value2)
    }
    return (
      <>
        <RangeMulti
          {...args}
          onChange={onChange}
        />
        <Input
          label="Value 1"
          name="value-1"
          value={value1}
          readOnly
        />
        <Input
          label="Value 2"
          name="value-2"
          value={value2}
          readOnly
        />
      </>
    )
  },
}
