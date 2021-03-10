import { DateTime } from 'luxon'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const fetchSchedules = () =>
  delay(1000).then(() => ({
    available: [
      {
        start: DateTime.utc().startOf('day').plus({ hours: 3 }).toISO(),
        end: DateTime.utc().startOf('day').plus({ hours: 5 }).toISO(),
      },
    ],
    booked: [
      {
        start: DateTime.utc().startOf('day').plus({ hours: 1 }).toISO(),
        end: DateTime.utc()
          .startOf('day')
          .plus({ hours: 2, minutes: 30 })
          .toISO(),
      },
      {
        start: DateTime.utc()
          .startOf('day')
          .plus({ hours: 5, minutes: 30 })
          .toISO(),
        end: DateTime.utc().startOf('day').plus({ hours: 7 }).toISO(),
      },
    ],
  }))
