import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'

import { Pagination, PaginationProps } from './Pagination'

const meta: Meta<PaginationProps> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  argTypes: {
    totalPages: {
      control: { type: 'number' },
      defaultValue: 7,
      min: 2,
    },
    currentPage: {
      control: { type: 'number' },
      defaultValue: 2,
    },
    setCurrentPage: {
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

type Story = StoryObj<PaginationProps>

export const Default: Story = {
  args: {
    totalPages: 4,
    maxDisplay: 10,
    currentPage: 2,
  },
  render: (args) => {
    const Wrapper = ({
      totalPages: initialTotal,
      maxDisplay,
      currentPage: initialPage,
    }: PaginationProps) => {
      const [totalPages] = useState(initialTotal)
      const [currentPage, setCurrentPage] = useState(initialPage)

      return (
        <Pagination
          totalPages={totalPages}
          maxDisplay={maxDisplay}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )
    }

    return <Wrapper {...args} />
  },
}
