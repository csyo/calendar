import React from 'react'
import { useCurrentTimestamp } from '../app/CurrentTimestampContext'
import './WeekControl.css'

function WeekControl({ weekOffset, onIncrement, onDecrement }) {
  const current = useCurrentTimestamp()
  const [startOfWeek, endOfWeek] = [
    current.startOf('week').plus({ weeks: weekOffset, days: -1 }),
    current.endOf('week').plus({ weeks: weekOffset, days: -1 }),
  ]
  const start = startOfWeek.toFormat('yyyy/MM/dd')
  const end =
    startOfWeek.year === endOfWeek.year
      ? startOfWeek.month === endOfWeek.month
        ? endOfWeek.toFormat('dd')
        : endOfWeek.toFormat('MM/dd')
      : endOfWeek.toFormat('yyyy/MM/dd')

  return (
    <div className="flex items-center space-x-3">
      <div className="week-control-btn-group">
        <button className="week-control-btn" disabled={weekOffset === 0} onClick={onDecrement}>
          <svg
            className="w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="week-control-btn" onClick={onIncrement}>
          <svg
            className="w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div>
        <span className="text-base">
          {start} - {end}
        </span>
      </div>
    </div>
  )
}

export default WeekControl
