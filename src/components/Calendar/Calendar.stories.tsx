import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { addDays, format } from 'date-fns'
import { useState } from 'react'

import { Calendar, CalendarProps } from './Calendar'
import { Input } from '@/components/Input'

const meta: Meta<CalendarProps> = {
  title: 'UI/Calendar',
  component: Calendar,
  argTypes: {
    selectedDate: { table: { disable: true } },
    setSelectedDate: { table: { disable: true } },
    customInput: { table: { disable: true } },
    isInline: { table: { disable: true } },
    startDate: { table: { disable: true } },
    endDate: { table: { disable: true } },
    setRangeDate: { table: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div className="padding">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<CalendarProps>

const useCalendarState = () => {
  const defaultDate = format(addDays(new Date(), 0), 'yyyy-MM-dd')
  const [value, setValue] = useState(defaultDate)
  const [startDate, setStartDate] = useState<string | undefined>(undefined)
  const [endDate, setEndDate] = useState<string | undefined>(undefined)

  const handleSingleChange = (val: string | Date) => {
    const formatted = typeof val === 'string' ? val : format(val, 'yyyy-MM-dd')
    setValue(formatted)
  }

  const handleRangeChange = (start: Date | null, end: Date | null) => {
    setStartDate(start ? format(start, 'yyyy-MM-dd') : undefined)
    setEndDate(end ? format(end, 'yyyy-MM-dd') : undefined)
  }

  return {
    value,
    setValue: handleSingleChange,
    startDate,
    endDate,
    setRangeDate: handleRangeChange,
  }
}

export const Default: Story = {
  render: (args) => {
    const { value, setValue } = useCalendarState()
    return (
      <Calendar
        {...args}
        isInline={false}
        customInput={
          <Input
            type="text"
            placeholder="Select date"
            name="calendar"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        }
        selectedDate={value}
        setSelectedDate={setValue}
      />
    )
  },
}

export const Inline: Story = {
  render: (args) => {
    const { value, setValue } = useCalendarState()
    return (
      <Calendar
        {...args}
        selectedDate={value}
        setSelectedDate={setValue}
      />
    )
  },
}

export const InlineWithInput: Story = {
  render: (args) => {
    const { value, setValue } = useCalendarState()
    return (
      <div className="grid gap-2">
        <Input
          type="text"
          placeholder="Calendar"
          name="calendar"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="off"
        />
        <Calendar
          {...args}
          selectedDate={value}
          setSelectedDate={setValue}
        />
      </div>
    )
  },
}

export const RangeSelection: Story = {
  render: (args) => {
    const { startDate, endDate, setRangeDate } = useCalendarState()
    return (
      <Calendar
        {...args}
        startDate={startDate}
        endDate={endDate}
        setRangeDate={(start, end) => {
          setRangeDate(start ?? null, end ?? null)
        }}
      />
    )
  },
}
