import React from 'react'
import clsx from 'clsx'

export default function TimeListItem({ time, status }) {
  return (
    <li
      className={clsx(
        {
          'text-primary font-bold': status === 'available',
          'text-gray': status === 'booked',
        },
        'text-xs py-0.5'
      )}
    >
      {time}
    </li>
  )
}
