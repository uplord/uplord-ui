import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Colors, ColorsProps } from './Colors'
import styles from './colors.module.scss'

const colors: Record<string, ColorsProps[]> = {
  Background: [
    {
      name: 'Background',
      color: ['var(--bg-color)', 'var(--bg-dark-color'],
      border: ['var(--border-color)', 'var(--border-dark-color)'],
    },
    { name: 'Border', color: ['var(--border-color)', 'var(--border-dark-color)'] },
  ],
  'Text / Icon': [
    { name: 'Heading', color: ['var(--heading-color)', 'var(--heading-dark-color)'] },
    { name: 'Body', color: ['var(--body-color)', 'var(--body-dark-color)'] },
  ],
  Colors: [
    { name: 'Primary', color: ['var(--primary-color)'] },
    { name: 'Success', color: ['var(--success-color)'] },
    { name: 'Error', color: ['var(--error-color)'] },
    { name: 'Warning', color: ['var(--warning-color)'] },
    { name: 'Info', color: ['var(--info-color)'] },
    { name: 'Rebecca', color: ['var(--rebecca-color)'] },
  ],
}

const colorOptions = Object.values(colors).flat()

const meta: Meta<ColorsProps> = {
  title: 'Components/Colors',
  component: Colors,
  decorators: [
    (Story) => (
      <div className="padding">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: colorOptions.map((color) => color.name),
    },
    color: {
      control: { type: 'text' },
      table: { disable: true },
    },
    border: {
      control: { type: 'text' },
      table: { disable: true },
    },
  },
}

export default meta

type Story = StoryObj<ColorsProps>

export const Default: Story = {
  args: colorOptions[0],
  render: ({ name }, { globals }) => {
    const background = globals.backgrounds?.value ?? 'light'

    const selectedColor = colorOptions.find((color) => color.name === name) || colorOptions[0]
    const { color, border } = selectedColor

    return (
      <div className={styles.colors}>
        <Colors
          name={name}
          color={
            Array.isArray(color) && color.length > 1
              ? background === 'light'
                ? color[0]
                : color[1]
              : color
          }
          border={
            Array.isArray(border) && border.length > 1
              ? background === 'light'
                ? border[0]
                : border[1]
              : border
          }
        />
      </div>
    )
  },
}

export const AllColors: Story = {
  argTypes: {
    name: {
      table: { disable: true },
    },
  },
  render: (_, { globals }) => {
    const background = globals.backgrounds?.value ?? 'light'

    return (
      <div className={styles.blocks}>
        {Object.entries(colors).map(([category, shades]) => (
          <div
            key={category}
            className={styles.block}>
            <div className={styles.title}>{category}</div>
            <div className={styles.colors}>
              {shades.map(({ name, color, border }: ColorsProps) => (
                <>
                  <Colors
                    key={name}
                    name={name}
                    color={
                      Array.isArray(color) && color.length > 1
                        ? background === 'light'
                          ? color[0]
                          : color[1]
                        : color
                    }
                    border={
                      Array.isArray(border) && border.length > 1
                        ? background === 'light'
                          ? border[0]
                          : border[1]
                        : border
                    }
                  />
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  },
}
