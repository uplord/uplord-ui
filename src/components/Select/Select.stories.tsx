import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Formik, Form, Field } from 'formik'

import { Select, SelectProps } from './Select'
import { FormikInput } from '@/components/FormikInput'
import styles from '@/components/Input/input.module.scss'

const meta: Meta<SelectProps> = {
  title: 'UI/Select',
  component: Select,
  args: {
    label: '',
    placeholder: 'Select an option',
    size: 'md',
    helper: 'Optional helper text',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    isLoading: false,
    isSkeleton: false,
    isDisabled: false,
    isError: false,
  },
  argTypes: {
    options: {
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

type Story = StoryObj<SelectProps>

export const Default: Story = {
  render: (args: SelectProps) => (
    <Select
      {...args}
      name="input"
    />
  ),
}

export const FormikField: Story = {
  args: {
    placeholder: 'Select an option',
    helper: 'Formik field',
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args: SelectProps) => (
    <Formik
      initialValues={{
        select: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        console.log(JSON.stringify(values, null, 2))
      }}>
      {() => (
        <Form
          autoComplete="off"
          noValidate>
          <Field
            {...args}
            component={FormikInput}
            input={Select}
            name="select"
          />
        </Form>
      )}
    </Formik>
  ),
}

export const State: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args: SelectProps) => (
    <div className={styles.fields}>
      <Select
        {...args}
        name="input"
        helper="Default"
      />
      <Select
        {...args}
        name="input"
        size="sm"
        helper="Default"
      />
      <Select
        {...args}
        name="hover"
        helper="Hover"
        className="hover"
      />
      <Select
        {...args}
        name="focus"
        helper="Focus"
        className="focus-within"
      />
      <Select
        {...args}
        name="disabled"
        helper="Disabled"
        isDisabled
      />
      <Select
        {...args}
        name="skeleton"
        helper="Skeleton"
        isSkeleton
      />
      <Select
        {...args}
        name="loading"
        helper="Loading"
        isLoading
      />
      <Select
        {...args}
        name="filled"
        helper="Filled"
      />
      <Select
        {...args}
        name="error"
        helper="Error"
        isError
      />
      <Select
        {...args}
        name="error-focus"
        helper="Error Focus"
        className="focus-within"
        isError
      />
    </div>
  ),
}
