import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Link from 'next/link'

import { DataTable, TableProps, Column } from './Table'

type PageRow = {
  id: number
  title: string
  author: string
  template: string
  date: string
}

const columns: Column<PageRow>[] = [
  {
    key: 'title',
    label: 'Title',
    render: (value) => (
      <Link
        href=""
        onClick={(event) => event.stopPropagation()}>
        {value}
      </Link>
    ),
  },
  { key: 'author', label: 'Author' },
  { key: 'template', label: 'Template' },
  { key: 'date', label: 'Date' },
]

const pagesData: PageRow[] = [
  {
    id: 1,
    title: 'Home',
    author: 'Admin',
    template: 'Default',
    date: '23 Aug',
  },
  {
    id: 2,
    title: 'About',
    author: 'Michael',
    template: 'Info',
    date: '22 Aug',
  },
]

const meta: Meta<TableProps<PageRow>> = {
  title: 'Utils/Table',
  component: DataTable,
  args: {
    columns,
    data: pagesData,
    withCheckbox: true,
    responsive: true,
    margin: true,
  },
  argTypes: {
    columns: {
      table: {
        disable: true,
      },
    },
    data: {
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

type Story = StoryObj<TableProps<PageRow>>

export const Default: Story = {
  render: (args: TableProps<PageRow>) => <DataTable {...args} />,
}
