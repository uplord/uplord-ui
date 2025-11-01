import type { Meta, StoryObj } from '@storybook/nextjs'

import { Colors, ColorsProps } from './Colors'
import styles from './colors.module.scss'

const colors: Record<string, ColorsProps[]> = {
  Background: [
    {
      name: 'Background',
      color: ['hsl(0 0% 100%)', 'hsl(0 0% 5%)'],
      border: ['hsl(0 0% 80%)', 'hsl(0 0% 25%)'],
    },
    {
      name: 'Block',
      color: ['hsl(0 0% 95%)', 'hsl(0 0% 10%)'],
      border: ['hsl(0 0% 80%)', 'hsl(0 0% 25%)'],
    },
    { name: 'Border', color: ['hsl(0 0% 80%)', 'hsl(0 0% 25%)'] },
    { name: 'Border 2', color: ['hsl(0 0% 90%)', 'hsl(0 0% 20%)'] },
  ],
  'Text / Icon': [
    { name: 'Heading', color: ['hsl(0 0% 5%)', 'hsl(0 0% 95%)'] },
    { name: 'Body', color: ['hsl(0 0% 30%)', 'hsl(0 0% 70%)'] },
    { name: 'Placeholder', color: ['hsl(0 0% 80%)', 'hsl(0 0% 25%)'] },
    { name: 'Icon', color: ['hsl(0 0% 30%)', 'hsl(0 0% 70%)'] },
  ],
  Input: [
    {
      name: 'Input',
      color: ['hsl(0 0% 100%)', 'hsl(0 0% 5%)'],
      border: ['hsl(0 0% 80%)', 'hsl(0 0% 25%)'],
    },
    {
      name: 'Hover',
      color: ['hsl(0 0% 95%)', 'hsl(0 0% 10%)'],
      border: ['hsl(0 0% 80%)', 'hsl(0 0% 25%)'],
    },
    {
      name: 'Disabled',
      color: ['hsl(0 0% 90%)', 'hsl(0 0% 15%)'],
      border: ['hsl(0 0% 80%)', 'hsl(0 0% 25%)'],
    },
    {
      name: 'Loading',
      color: ['hsl(0 0% 95%)', 'hsl(0 0% 10%)'],
      border: ['hsl(0 0% 80%)', 'hsl(0 0% 25%)'],
    },
    { name: 'Skeleton', color: ['hsl(0 0% 90%)', 'hsl(0 0% 15%)'] },
    {
      name: 'Focus',
      color: ['hsl(0 0% 100%)', 'hsl(0 0% 5%)'],
      border: ['hsl(0 0% 5%)', 'hsl(0 0% 95%)'],
      focus: ['hsl(0 0% 5%)', 'hsl(0 0% 95%)'],
    },
    { name: 'Error', color: ['hsl(0 74% 95%)', 'hsl(0 74% 5%)'], border: ['hsl(355, 75%, 40%)'] },
    {
      name: 'Error focus',
      color: ['hsl(355, 75%, 95%)', 'hsl(355, 75%, 5%)'],
      border: ['hsl(355, 75%, 40%)'],
      focus: ['hsl(355, 75%, 40%)'],
    },
  ],
  Colors: [
    { name: 'Primary', color: ['hsl(0, 80%, 50%)'] },
    { name: 'Success', color: ['hsl(142, 76%, 36%)'] },
    { name: 'Error', color: ['hsl(355, 75%, 40%)'] },
    { name: 'Warning', color: ['hsl(38, 92%, 50%)'] },
    { name: 'Info', color: ['hsl(213, 85%, 43%)'] },
    { name: 'Rebecca', color: ['hsl(270 50% 40%)'] },
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
    focus: {
      control: { type: 'text' },
      table: { disable: true },
    },
  },
}

export default meta

type Story = StoryObj<ColorsProps>

export const Default: Story = {
  args: colorOptions[0],
  render: ({ name }) => {
    const selectedColor = colorOptions.find((color) => color.name === name) || colorOptions[0]
    const { color, border, focus } = selectedColor

    return (
      <div className={styles.colors}>
        <Colors
          name={name}
          color={Array.isArray(color) ? color[0] : color}
          border={Array.isArray(border) ? border[0] : border}
          focus={Array.isArray(focus) ? focus[0] : focus}
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
              {shades.map(({ name, color, border, focus }: ColorsProps) => (
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
                    focus={
                      Array.isArray(focus) && focus.length > 1
                        ? background === 'light'
                          ? focus[0]
                          : focus[1]
                        : focus
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
