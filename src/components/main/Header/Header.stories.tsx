import type { Meta, StoryObj } from '@storybook/nextjs'

import { Header, HeaderProps } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Main/Header',
  component: Header,
  parameters: {
    backgrounds: { disable: true },
  },
}

export default meta
type Story = StoryObj<HeaderProps>

export const Default: Story = {}
