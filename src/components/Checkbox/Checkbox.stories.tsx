import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Checkbox, CheckboxProps } from './Checkbox'
import styles from './checkbox.module.scss'

const meta: Meta<CheckboxProps> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  args: {
    label: '',
    helper: '',
    isToggle: false,
    isSkeleton: false,
    isDisabled: false,
    isError: false,
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
    checked: {
      table: {
        disable: true,
      },
    },
    hasHover: {
      table: {
        disable: true,
      },
    },
    hasFocus: {
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

type Story = StoryObj<CheckboxProps>

export const Default: Story = {
  args: {
    label: 'Checkbox',
  },
  render: (args: CheckboxProps) => (
    <Checkbox
      {...args}
      name="input1"
      value="true"
    />
  ),
}

export const Toggle: Story = {
  args: {
    label: 'Toggle',
  },
  argTypes: {
    isToggle: {
      table: {
        disable: true,
      },
    },
  },
  render: (args: CheckboxProps) => (
    <Checkbox
      {...args}
      name="input1"
      value="true"
      isToggle
    />
  ),
}

export const Content: Story = {
  render: (args: CheckboxProps) => (
    <Checkbox
      {...args}
      name="input2"
      value="true">
      <div className={styles.title}>
        <div className={styles.label}>Title</div>
        <div className={styles.total}>X,XXX</div>
      </div>
      <div className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut metus et erat suscipit
        facilisis quis eu odio.
      </div>
    </Checkbox>
  ),
}

export const State: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args: CheckboxProps) => (
    <div className={styles.fields}>
      <Checkbox
        {...args}
        name="input"
        label="Default"
        value="true"
      />
      <Checkbox
        {...args}
        name="hover"
        label="Hover"
        value="true"
        className="hover"
      />
      <Checkbox
        {...args}
        name="focus"
        label="Focus"
        value="true"
        className="focus-visible"
      />
      <Checkbox
        {...args}
        name="disabled"
        label="Disabled"
        value="true"
        isDisabled
      />
      <Checkbox
        {...args}
        name="skeleton"
        label="Skeleton"
        value="true"
        isSkeleton
      />
      <Checkbox
        {...args}
        name="filled"
        label="Filled"
        value="true"
      />
      <Checkbox
        {...args}
        name="error"
        label="Error"
        value="true"
        isError
      />
      <Checkbox
        {...args}
        name="focus-error"
        label="Error Focus"
        className="focus-visible"
        value="true"
        isError
      />
    </div>
  ),
}

export const StateText: Story = {
  args: {
    children: (
      <>
        <div className={styles.title}>
          <div className={styles.label}>Title</div>
          <div className={styles.total}>X,XXX</div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut metus et erat suscipit
          facilisis quis eu odio.
        </div>
      </>
    ),
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args: CheckboxProps) => (
    <div className={styles.fields}>
      <Checkbox
        {...args}
        name="input"
        value="true"
      />
      <Checkbox
        {...args}
        name="hover"
        className="hover"
        value="true"
      />
      <Checkbox
        {...args}
        name="focus"
        className="focus-visible"
        value="true"
      />
      <Checkbox
        {...args}
        name="disabled"
        value="true"
        isDisabled
      />
      <Checkbox
        {...args}
        name="skeleton"
        value="true"
        isSkeleton
      />
      <Checkbox
        {...args}
        name="filled"
        value="true"
      />
      <Checkbox
        {...args}
        name="error"
        value="true"
        isError
      />
      <Checkbox
        {...args}
        name="focus-error"
        className="focus-visible"
        value="true"
        isError
      />
    </div>
  ),
}
