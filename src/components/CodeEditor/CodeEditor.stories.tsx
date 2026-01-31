import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { CodeEditor } from './CodeEditor'
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

const meta: Meta<typeof CodeEditor> = {
  title: 'UI/Code Editor',
  component: CodeEditor,
  decorators: [
    (Story) => (
      <div className="padding">
        <Story />
      </div>
    ),
  ],
  args: {
    // height: 420,
    autoResize: true,
  },
  argTypes: {
    language: { table: { disable: true } },
    height: { table: { disable: true } },
    data: { table: { disable: true } },
    theme: { table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof CodeEditor>

const createStory = (language: keyof typeof placeholders): Story => ({
  args: {
    language: language,
    data: placeholders[language],
  },
  render: (args, context) => {
    const theme = context.globals.backgrounds.value ?? 'light'
    return (
      <CodeEditor
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
