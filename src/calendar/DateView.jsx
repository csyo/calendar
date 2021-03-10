import React from 'react'
import TimeListItem from './TimeListItem'
import { Info } from 'luxon'
import { useCurrentTimestamp } from '../app/CurrentTimestampContext'
import { useSchedules } from '../app/SchedulesContext'
import clsx from 'clsx'

export default function DateView({ weekOffset, dayIndex }) {
  const currentTimestamp = useCurrentTimestamp()
  const dayOfWeek = Info.weekdays('narrow')[(7 + dayIndex) % 7]
  const dateOfWeek = currentTimestamp
    .startOf('week')
    .plus({ week: weekOffset, days: dayIndex })

  const schedulesOfDate = useSchedules(dateOfWeek.toISODate())

  return (
    <div className="flex-1 flex flex-col items-center px-1">
      <div
        className={clsx('indicator w-full border-t-4 border-gray', {
          'border-primary': schedulesOfDate && schedulesOfDate.length,
        })}
      />
      <div
        className={clsx('date-box w-full text-center py-2', {
          'text-gray': !schedulesOfDate || schedulesOfDate.length === 0,
        })}
        data-date-of-week={dateOfWeek.toISODate()}
      >
        <p>{dayOfWeek}</p>
        <p>{dateOfWeek.toFormat('dd')}</p>
      </div>
      <ul className="times-box w-full text-center">
        {Array.isArray(schedulesOfDate)
          ? schedulesOfDate.map((schedule) => (
              <TimeListItem key={schedule.time} {...schedule} />
            ))
          : null}
      </ul>
    </div>
  )
}
