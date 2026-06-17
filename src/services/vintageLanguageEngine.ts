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
): string {
  const period = modeLabels[request.mode]
  const moon =
    snapshot.moonSign === 'Verification needed'
      ? 'the changing moon'
      : `the ${snapshot.moonPhase.toLowerCase()}`

  return `${theme} ${period}, dear ${request.zodiacSign}. ${moon} turns a small memory into a signal. Move gently, speak clearly, and trust the idea that keeps tapping at the window.`
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}
