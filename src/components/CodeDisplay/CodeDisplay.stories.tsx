import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { CodeDisplay } from './CodeDisplay'
import {
  cssPlaceholder,
  jsonPlaceholder,
  jsPlaceholder,
  phpPlaceholder,
  scssPlaceholder,
  tsPlaceholder,
} from '@/data/editor'

const placeholders = {
  javascript: jsPlaceholder,
  typescript: tsPlaceholder,
  json: jsonPlaceholder,
  php: phpPlaceholder,
  css: cssPlaceholder,
  scss: scssPlaceholder,
} as const

const meta: Meta<typeof CodeDisplay> = {
  title: 'UI/Code Display',
  component: CodeDisplay,
  decorators: [
    (Story) => (
      <div className="padding">
        <Story />
      </div>
    ),
  ],
  args: {
    hideLineNumbers: true,
  },
  argTypes: {
    language: { table: { disable: true } },
    data: { table: { disable: true } },
    theme: { table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof CodeDisplay>

const createStory = (language: keyof typeof placeholders): Story => ({
  args: {
    language: language,
    data: placeholders[language],
  },
  render: (args, context) => {
    const theme = context.globals.backgrounds.value ?? 'light'
    return (
      <CodeDisplay
        {...args}
        theme={theme}
      />
    )
  },
})

export const Javascript = createStory('javascript')
export const Typescript = createStory('typescript')
export const JSON = createStory('json')
export const PHP = createStory('php')
export const CSS = createStory('css')
export const SCSS = createStory('scss')
