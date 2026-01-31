import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Button, ButtonGroup, ButtonProps, Variant } from './Button'
import { Icon } from '@/components/Icon'

const meta: Meta<ButtonProps> = {
  title: 'UI/Button',
  component: Button,
  args: {
    label: '',
    size: 'md',
    variant: 'default',
    color: '#663399',
    outline: false,
    rounded: 'sm',
    hasPadding: true,
    hasHover: true,
    hasActive: true,
    isDisabled: false,
    isLoading: false,
    isSkeleton: false,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    href: {
      table: {
        disable: true,
      },
    },
    target: {
      table: {
        disable: true,
      },
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: Object.values(Variant),
    },
    color: {
      control: {
        type: 'color',
      },
      if: { arg: 'variant', eq: 'custom' },
    },
    rounded: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'none'],
    },
    hasIcon: {
      table: {
        disable: true,
      },
    },
    hasPadding: {
      table: {
        disable: true,
      },
    },
    hasHover: {
      table: {
        disable: true,
      },
    },
    hasActive: {
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

type Story = StoryObj<ButtonProps>

export const Main: Story = {
  args: {
    label: 'Button',
    size: 'md',
    variant: 'primary',
  },
  render: (args: ButtonProps) => <Button {...args} />,
}

export const Default: Story = {
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args: ButtonProps) => <TestButtons {...args} />,
}

export const Variants: Story = {
  argTypes: {
    label: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
    outline: {
      table: {
        disable: true,
      },
    },
    hasIcon: {
      table: {
        disable: true,
      },
    },
  },
  render: (args: ButtonProps) => (
    <>
      <ButtonGroup>
        <Button
          {...args}
          label="Default"
          variant="default"
        />
        <Button
          {...args}
          label="Primary"
          variant="primary"
        />
        <Button
          {...args}
          label="Custom"
          variant="custom"
          color="#663399"
        />
        <Button
          {...args}
          label="Text"
          variant="text"
        />
      </ButtonGroup>
      <ButtonGroup>
        <Button
          {...args}
          label="Default"
          variant="default"
          outline
        />
        <Button
          {...args}
          label="Primary"
          variant="primary"
          outline
        />
        <Button
          {...args}
          label="Custom"
          variant="custom"
          color="#663399"
          outline
        />
      </ButtonGroup>
      <ButtonGroup>
        <Button
          {...args}
          variant="default"
          hasIcon>
          <Icon
            name="User"
            size="md"
          />
        </Button>
        <Button
          {...args}
          variant="primary"
          hasIcon>
          <Icon
            name="User"
            size="md"
          />
        </Button>
        <Button
          {...args}
          variant="custom"
          color="#663399"
          hasIcon>
          <Icon
            name="User"
            size="md"
          />
        </Button>
        <Button
          {...args}
          variant="text"
          hasIcon>
          <Icon
            name="User"
            size="md"
          />
        </Button>
      </ButtonGroup>
    </>
  ),
}

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args: ButtonProps) => <TestButtons {...args} />,
}

export const Text: Story = {
  args: {
    variant: 'text',
  },
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args: ButtonProps) => <TestButtons {...args} />,
}

const disableAllControlsExcept = (allowed: string[]) => {
  const argTypes: Record<string, { table: { disable: boolean } }> = {}
  Object.keys(meta.args || {}).forEach((key) => {
    if (!allowed.includes(key)) {
      argTypes[key] = { table: { disable: true } }
    }
  })
  return argTypes
}

export const Custom: Story = {
  args: {
    variant: 'custom',
  },
  argTypes: disableAllControlsExcept(['color']),
  render: (args: ButtonProps) => <TestButtons {...args} />,
}

const TestButtons = (args: ButtonProps) => {
  console.log('args', args)
  return (
    <>
      <ButtonGroup>
        <Button
          {...args}
          label="Label"
        />
        <Button
          {...args}
          label="Label"
          className="hover"
        />
        <Button
          {...args}
          label="Label"
          className="hover active"
        />
        <Button
          {...args}
          label="Label"
          className="hover focus-visible"
        />
        <Button
          {...args}
          label="Label"
          isLoading
        />
        <Button
          {...args}
          label="Label"
          isDisabled
        />
        <Button
          {...args}
          label="Label"
          isSkeleton
        />
      </ButtonGroup>
      {args.variant !== 'text' && (
        <ButtonGroup>
          <Button
            {...args}
            label="Label"
            outline
          />
          <Button
            {...args}
            label="Label"
            outline
            className="hover"
          />
          <Button
            {...args}
            label="Label"
            outline
            className="hover active"
          />
          <Button
            {...args}
            label="Label"
            outline
            className="hover focus-visible"
          />
          <Button
            {...args}
            label="Label"
            outline
            isLoading
          />
          <Button
            {...args}
            label="Label"
            outline
            isDisabled
          />
          <Button
            {...args}
            label="Label"
            outline
            isSkeleton
          />
        </ButtonGroup>
      )}
      <ButtonGroup>
        <Button
          {...args}
          label="Label"
          size="sm"
        />
        <Button
          {...args}
          label="Label"
          size="sm"
          className="hover"
        />
        <Button
          {...args}
          label="Label"
          size="sm"
          className="hover active"
        />
        <Button
          {...args}
          label="Label"
          size="sm"
          className="hover focus-visible"
        />
        <Button
          {...args}
          label="Label"
          size="sm"
          isLoading
        />
        <Button
          {...args}
          label="Label"
          size="sm"
          isDisabled
        />
        <Button
          {...args}
          label="Label"
          size="sm"
          isSkeleton
        />
      </ButtonGroup>
    </>
  )
}
