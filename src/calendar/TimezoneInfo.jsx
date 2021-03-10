import React, { useContext } from 'react'
import { DateTime, Duration } from 'luxon'
import { CurrentTimestampContext } from '../app/CurrentTimestampContext'

function TimezoneInfo() {
  const current = DateTime.fromISO(useContext(CurrentTimestampContext))
  const zoneName = current.zoneName
  const zoneOffset = [
    current.offset > 0 ? '+' : '-',
    Duration.fromObject({ minutes: current.offset }).toFormat('hh:mm'),
  ].join('')
  return (
    <div className="text-right">
      <span className="text-xs">
        * 時間以 {zoneName} (GMT{zoneOffset}) 顯示
      </span>
    </div>
  )
}

export default TimezoneInfo
