import type { Meta, StoryObj } from '@storybook/nextjs'

import { Icon as IconComponent, IconProps } from '@/components/utils/Icon'
import { IconOptions } from '@/lib/icons'
import { Size } from '@/types/system'

const meta: Meta<IconProps> = {
  title: 'Utils/Icon',
  component: IconComponent,
  args: {
    name: 'Home',
    size: 'lg',
    strokeWidth: 2,
    className: '',
  },
  argTypes: {
    name: {
      control: {
        type: 'select',
      },
      options: IconOptions,
    },
    size: {
      control: {
        type: 'select',
      },
      options: Object.values(Size),
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta

type Story = StoryObj<IconProps>

export const Default: Story = {
  render: (args: IconProps) => (
    <div className="padding">
      <IconComponent {...args} />
    </div>
  ),
}
