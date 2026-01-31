'use client'

import clsx from 'clsx'
import { getYear, getMonth } from 'date-fns'
import React from 'react'
import DatePicker, { ReactDatePickerCustomHeaderProps } from 'react-datepicker'

import styles from './calendar.module.scss'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Select } from '@/components/Select'

export type CalendarProps = {
  minDate?: Date
  selectedDate?: string
  setSelectedDate?: (date: Date) => void
  startDate?: string
  endDate?: string
  setRangeDate?: (start: Date | null, end?: Date | null) => void
  customInput?: React.ReactElement | null
  isInline?: boolean
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const

const range = (start: number, end: number) => {
  const arr: number[] = []
  for (let i = start; i <= end; i++) arr.push(i)
  return arr
}

export const Calendar = ({
  minDate,
  selectedDate,
  setSelectedDate,
  startDate,
  endDate,
  setRangeDate,
  customInput,
  isInline = true,
}: CalendarProps) => {
  const today = new Date()
  const parsedSelectedDate = selectedDate ? new Date(selectedDate) : null
  const parsedStartDate = startDate ? new Date(startDate) : null
  const parsedEndDate = endDate ? new Date(endDate) : null

  const handleSingleChange = (date: Date | null) => {
    if (date && setSelectedDate) setSelectedDate(date)
  }

  const handleRangeChange = (dates: [Date | null, Date | null]) => {
    if (setRangeDate) setRangeDate(dates[0], dates[1])
  }

  const defaultHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
    changeYear,
    changeMonth,
  }: ReactDatePickerCustomHeaderProps) => {
    const years = range(getYear(new Date()), getYear(new Date()) + 10)
    const today = new Date()

    const goToToday = () => {
      changeYear(getYear(today))
      changeMonth(getMonth(today))
    }

    return (
      <div className={styles.title}>
        <div className={styles.buttons}>
          <Button
            size="md"
            variant="default"
            outline
            hasIcon
            onClick={() => {
              decreaseMonth()
            }}
            isDisabled={prevMonthButtonDisabled}
            aria-label="Previous Month">
            <Icon
              name="ChevronLeft"
              size="md"
            />
          </Button>
          <Button
            size="md"
            variant="default"
            hasIcon
            onClick={() => {
              goToToday()
            }}>
            <Icon
              name="Calendar"
              size="sm"
            />
          </Button>
          <Button
            size="md"
            variant="default"
            outline
            hasIcon
            onClick={() => {
              increaseMonth()
            }}
            isDisabled={nextMonthButtonDisabled}
            aria-label="Next Month">
            <Icon
              name="ChevronRight"
              size="md"
            />
          </Button>
        </div>
        <div className={clsx(styles.date, 'datepicker-date')}>
          <div className={clsx(styles.month, 'month')}>
            <Select
              size="sm"
              value={MONTHS[getMonth(date)]}
              onChange={(e) =>
                changeMonth(MONTHS.indexOf(e.target.value as (typeof MONTHS)[number]))
              }
              options={MONTHS.map((m) => ({ value: m, label: m.toString() }))}
              name="month"
            />
          </div>
          <div className={clsx(styles.year, 'year')}>
            <Select
              size="sm"
              value={getYear(date)}
              onChange={(e) => changeYear(+e.target.value)}
              options={years.map((y) => ({ value: y, label: y.toString() }))}
              name="year"
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.datepicker}>
      {startDate || endDate || setRangeDate ? (
        // Range picker
        <DatePicker
          startDate={parsedStartDate}
          endDate={parsedEndDate}
          selectsRange={true} // literal true
          onChange={(dates) => handleRangeChange(dates as [Date | null, Date | null])}
          inline={isInline}
          dateFormat="yyyy-MM-dd"
          minDate={minDate ?? today}
          renderCustomHeader={defaultHeader}
        />
      ) : (
        // Single-date picker
        <DatePicker
          selected={parsedSelectedDate}
          onChange={(date: Date | null) => handleSingleChange(date as Date)}
          inline={isInline}
          dateFormat="yyyy-MM-dd"
          minDate={minDate ?? today}
          renderCustomHeader={defaultHeader}
          customInput={customInput ?? undefined}
        />
      )}
    </div>
  )
}
