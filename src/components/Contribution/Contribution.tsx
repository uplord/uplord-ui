import clsx from 'clsx'
import { useMemo } from 'react'

import styles from './contribution.module.scss'

export const getDatesOfPastYear = (): Date[] => {
  const today = new Date()
  const start = new Date(today)
  start.setFullYear(today.getFullYear() - 1)
  start.setHours(0, 0, 0, 0)

  const dates: Date[] = []
  const d = new Date(start)

  while (d <= today) {
    dates.push(new Date(d))
    d.setDate(d.getDate() + 1)
  }

  return dates
}

const getWeeks = (dates: Date[]): (Date | null)[][] => {
  const weeks: (Date | null)[][] = []
  let week: (Date | null)[] = []

  dates.forEach((date, index) => {
    if (index === 0) {
      const dayOfWeek = date.getDay()
      for (let i = 0; i < dayOfWeek; i++) week.push(null)
    }

    week.push(date)

    if (week.length === 7) {
      weeks.push(week)
      week = []
    }
  })

  if (week.length > 0) weeks.push(week)
  return weeks
}

export interface ContributionData {
  date: Date
  active?: boolean
}

interface ContributionProps {
  data?: ContributionData[]
  className?: string
}

interface MonthLabel {
  month: string
  startWeek: number
  weekCount: number
}

export const Contribution = ({ data = [], className = '' }: ContributionProps) => {
  const dates = PAST_YEAR_DATES
  const weeks = useMemo(() => getWeeks(dates), [dates])

  const monthLabels = useMemo(() => {
    const labels: MonthLabel[] = []
    const seen = new Set<number>()

    weeks.forEach((week, index) => {
      const firstDay = week.find((d) => d !== null)
      if (!firstDay) return

      const month = firstDay.getMonth()
      if (seen.has(month)) return

      let count = 0
      for (let i = index; i < weeks.length; i++) {
        if (weeks[i].some((d) => d && d.getMonth() === month)) count++
        else break
      }

      labels.push({
        month: firstDay.toLocaleString('default', { month: 'short' }),
        startWeek: index,
        weekCount: count,
      })

      seen.add(month)
    })

    return labels
  }, [weeks])

  const activityMap = useMemo(() => {
    const activeDates = new Set((data || []).map((d) => d.date.toDateString()))

    return weeks.map((week) =>
      week.map((day) => (day ? activeDates.has(day.toDateString()) : false)),
    )
  }, [weeks, data])

  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const shownDays = new Set([1, 3, 5])

  return (
    <div className={clsx(styles.main, className)}>
      <div className={styles.top}>
        {monthLabels.map((m) => (
          <div
            key={m.month}
            className={styles.month}
            style={{ gridColumn: `${m.startWeek + 1} / span ${m.weekCount}` }}>
            {m.month}
          </div>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.side}>
          {dayLabels.map((day, index) => (
            <div
              key={day}
              className={styles.day}>
              {shownDays.has(index) ? day : null}
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {weeks.map((week, wi) => (
            <div
              key={wi}
              className={styles.tiles}>
              {week.map((day, di) => {
                const active = day ? activityMap[wi][di] : false
                return (
                  <div
                    key={`${wi}-${di}`}
                    className={clsx(styles.tile, active && styles.active)}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const PAST_YEAR_DATES = getDatesOfPastYear()
