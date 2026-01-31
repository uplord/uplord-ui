import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'

import { Radio, RadioProps } from './Radio'
import styles from '@/components/Checkbox/checkbox.module.scss'

const meta: Meta<RadioProps> = {
  title: 'UI/Radio',
  component: Radio,
  args: {
    label: '',
    helper: '',
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

type Story = StoryObj<RadioProps>

export const Default: Story = {
  args: {
    label: 'Radio',
  },
  render: (args: RadioProps) => {
    const [value, setValue] = useState(true)

    return (
      <div className={styles.fields}>
        <Radio
          {...args}
          label="Radio 1"
          id="radio1"
          name="input1"
          value={true}
          onChange={() => setValue(true)}
          checked={value === true}
        />
        <Radio
          {...args}
          label="Radio 2"
          id="radio2"
          name="input1"
          value={false}
          onChange={() => setValue(false)}
          checked={value === false}
        />
      </div>
    )
  },
}

export const Content: Story = {
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
  render: (args: RadioProps) => {
    const [value, setValue] = useState(true)
    return (
      <div className={styles.fields}>
        <Radio
          {...args}
          id="radio3"
          name="input2"
          value={true}
          onChange={() => setValue(true)}
          checked={value === true}>
          <div className={styles.title}>
            <div className={styles.label}>Title</div>
            <div className={styles.total}>X,XXX</div>
          </div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut metus et erat
            suscipit facilisis quis eu odio.
          </div>
        </Radio>
        <Radio
          {...args}
          id="radio4"
          name="input2"
          value={false}
          onChange={() => setValue(false)}
          checked={value === false}>
          <div className={styles.title}>
            <div className={styles.label}>Title</div>
            <div className={styles.total}>X,XXX</div>
          </div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut metus et erat
            suscipit facilisis quis eu odio.
          </div>
        </Radio>
      </div>
    )
  },
}

export const State: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args: RadioProps) => (
    <div className={styles.fields}>
      <Radio
        {...args}
        name="input"
        label="Default"
        value="true"
      />
      <Radio
        {...args}
        name="hover"
        label="Hover"
        value="true"
        className="hover"
      />
      <Radio
        {...args}
        name="focus"
        label="Focus"
        value="true"
        className="focus-visible"
      />
      <Radio
        {...args}
        name="disabled"
        label="Disabled"
        value="true"
        isDisabled
      />
      <Radio
        {...args}
        name="skeleton"
        label="Skeleton"
        value="true"
        isSkeleton
      />
      <Radio
        {...args}
        name="filled"
        label="Filled"
        value="true"
      />
      <Radio
        {...args}
        name="error"
        label="Error"
        value="true"
        isError
      />
      <Radio
        {...args}
        name="focus-error"
        label="Focus Error"
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
  render: (args: RadioProps) => (
    <div className={styles.fields}>
      <Radio
        {...args}
        name="input"
        value="true"
      />
      <Radio
        {...args}
        name="hover"
        value="true"
        className="hover"
      />
      <Radio
        {...args}
        name="focus"
        value="true"
        className="focus-visible"
      />
      <Radio
        {...args}
        name="disabled"
        value="true"
        isDisabled
      />
      <Radio
        {...args}
        name="skeleton"
        value="true"
        isSkeleton
      />
      <Radio
        {...args}
        name="filled"
        value="true"
      />
      <Radio
        {...args}
        name="error"
        value="true"
        isError
      />
      <Radio
        {...args}
        name="focus-error"
        className="focus-visible"
        value="true"
        isError
      />
    </div>
  ),
}
