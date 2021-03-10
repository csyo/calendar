import React, { useState } from 'react'
import WeekControl from './WeekControl'
import TimezoneInfo from './TimezoneInfo'
import DateView from './DateView'

function Calendar() {
  const [weekOffset, setWeekOffset] = useState(0)
  return (
    <div>
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <WeekControl
          weekOffset={weekOffset}
          onIncrement={() => setWeekOffset((val) => val + 1)}
          onDecrement={() => setWeekOffset((val) => val - 1)}
        />
        <TimezoneInfo />
      </header>
      <main className="flex py-3">
        <DateView weekOffset={weekOffset} dayIndex={-1} />
        <DateView weekOffset={weekOffset} dayIndex={0} />
        <DateView weekOffset={weekOffset} dayIndex={1} />
        <DateView weekOffset={weekOffset} dayIndex={2} />
        <DateView weekOffset={weekOffset} dayIndex={3} />
        <DateView weekOffset={weekOffset} dayIndex={4} />
        <DateView weekOffset={weekOffset} dayIndex={5} />
      </main>
    </div>
  )
}

export default Calendar
