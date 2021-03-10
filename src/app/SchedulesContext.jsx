import React, { createContext, useContext, useState } from 'react'
import { useAsync } from 'react-use'
import { fetchSchedules } from './mockApi'
import { sortBy } from 'lodash'
import { DateTime, Interval } from 'luxon'

export const SchedulesContext = createContext({})

SchedulesContext.displayName = 'SchedulesContext'

export function SchedulesContextProvider({ initialState = {}, children }) {
  const [schedules, setSchedules] = useState(initialState)

  useAsync(async () => {
    const response = await fetchSchedules()
    setSchedules(normalizeSchedules(response))
  }, [setSchedules])

  return (
    <SchedulesContext.Provider value={schedules}>
      {children}
    </SchedulesContext.Provider>
  )
}

function normalizeSchedules(response) {
  const result = {}
  for (const [status, schedules] of Object.entries(response)) {
    for (const schedule of schedules) {
      const intervals = Interval.fromDateTimes(
        DateTime.fromISO(schedule.start),
        DateTime.fromISO(schedule.end)
      )
      for (const [idx, interval] of intervals
        .splitBy({ minutes: 30 })
        .entries()) {
        const [start, end] = interval
          .toFormat('yyyy-MM-dd HH:mm', { separator: ',' })
          .split(',')
        if (idx === 0) {
          const [date, time] = start.split(' ')
          if (!result[date]) result[date] = []
          result[date].push({ time, status })
        }
        const [date, time] = end.split(' ')
        if (!result[date]) result[date] = []
        result[date].push({ time, status })
      }
    }
  }
  for (const [key, values] of Object.entries(result)) {
    result[key] = sortBy(values, (val) => val.time)
  }
  return result
}

export function useSchedules(date) {
  const schedules = useContext(SchedulesContext)
  return date ? schedules[date] : schedules
}
