import React from 'react'
import AppLayout from './app/AppLayout'
import Calendar from './calendar'
import { CurrentTimestampContextProvider } from './app/CurrentTimestampContext'
import { SchedulesContextProvider } from './app/SchedulesContext'

function App() {
  return (
    <AppLayout>
      <CurrentTimestampContextProvider defaultLocale="zh-TW">
        <SchedulesContextProvider>
          <Calendar />
        </SchedulesContextProvider>
      </CurrentTimestampContextProvider>
    </AppLayout>
  )
}

export default App
