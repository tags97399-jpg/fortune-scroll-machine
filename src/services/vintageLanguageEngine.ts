import type { AstrologySnapshot, ScrollRequest } from '../types/scrollTypes'

const modeLabels = {
  daily: 'today',
  weekly: 'this week',
  monthly: 'this month',
  birthday: 'this birthday year',
}

export function writeVintageLine(
  request: ScrollRequest,
  snapshot: AstrologySnapshot,
  theme: string,
  index = 0,
): string {
  const period = modeLabels[request.mode]
  const moon =
    snapshot.moonSign === 'Verification needed'
      ? 'the changing moon'
      : `the ${snapshot.moonPhase.toLowerCase()}`
  const endings = [
    `Let ${moon} show you which feeling belongs in the room before you answer too quickly.`,
    `A small practical act will tell fate you are ready for the larger one.`,
    `Say less for performance and more for truth; the right person will hear the difference.`,
    `Keep your coins, tools, and promises where you can see them.`,
    `Rest before the signal turns to static.`,
    `The oldest wish is not necessarily the childish one.`,
  ]

  return `${theme} ${period}, dear ${request.zodiacSign}. ${endings[index % endings.length]}`
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}
