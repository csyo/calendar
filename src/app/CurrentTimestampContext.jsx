import React, {createContext, useContext, useEffect} from "react";
import { DateTime, Settings } from 'luxon'

export const CurrentTimestampContext = createContext(null)

CurrentTimestampContext.displayName = 'CurrentTimestampContext'

export function CurrentTimestampContextProvider({ children, defaultLocale = 'zh-TW' }) {
  const currentTimestamp = DateTime.utc().toString()
  useEffect(() => {
    Settings.defaultLocale = defaultLocale
  }, [])
  return (
    <CurrentTimestampContext.Provider value={currentTimestamp}>
      {children}
    </CurrentTimestampContext.Provider>
  )
}

export function useCurrentTimestamp() {
  return DateTime.fromISO(useContext(CurrentTimestampContext))
}
