import type {
  AstrologySnapshot,
  FortuneScroll,
  ScrollRequest,
} from '../types/scrollTypes'
import { formatDate, writeVintageLine } from './vintageLanguageEngine'

const sectionSets = {
  daily: [
    ['Your Day Today', '☀', 'Clear thinking helps solve a puzzling situation. A chance remark may lead to a good opportunity.'],
    ['Love & Friends', '♡', 'A friendly chat could turn into something more useful than either person expected.'],
    ['Work & Money', '♢', 'Good timing brings a small win. Trust your instincts with practical matters.'],
    ['Creativity', '✦', 'Your quick wit wants a place to land. Write the note, make the call, begin the draft.'],
  ],
  weekly: [
    ['Cosmic Weather', '☀', 'The week opens with a message, a memory, and a reason to try again.'],
    ['Relationships', '♡', 'Old affection returns in ordinary clothes. Answer with warmth, not performance.'],
    ['Money & Work', '♢', 'Choose the task with a future. A small organized step beats a dramatic overhaul.'],
    ['Surprise Influence', '✦', 'A forgotten object, song, or place may point toward the next useful idea.'],
  ],
  monthly: [
    ['Major Astrology', '☀', 'This month favors reinvention through honest language and steady craft.'],
    ['Home & Family', '⌂', 'Comfort comes from restoring one small corner and letting it become a signal.'],
    ['Personal Growth', '✦', 'Your next chapter does not need permission from the last one.'],
    ['Watchpoint', '!', 'Do not confuse speed with destiny. The good thing can arrive slowly and still be yours.'],
  ],
  birthday: [
    ['Birthday Week Forecast', '☀', 'This birthday week opens a little door between who you were and who you are building next.'],
    ['Year Ahead Preview', '✦', 'Uranus in Gemini makes your voice feel electric again. Ideas that once looked impractical may finally find a container.'],
    ['Love & Friendship', '♡', 'The starry thread of old friendship glows brighter than expected. Let memory be a bridge, not a museum.'],
    ['Money & Business', '♢', 'Build the thing that can keep working after the first burst of excitement fades.'],
    ['Health & Energy', '+', 'Your nervous system wants simpler mornings, warmer evenings, and fewer false emergencies.'],
    ['Message From The Stars', '★', 'Begin again, but keep the parts of yourself that survived beautifully.'],
  ],
} as const

export function generateHoroscope(
  request: ScrollRequest,
  snapshot: AstrologySnapshot,
): FortuneScroll {
  const date = formatDate(request.targetDate)
  const modeTitle = request.mode === 'birthday' ? 'Birthday Fortune Scroll' : `${capitalize(request.mode)} Fortune Scroll`
  const sections = sectionSets[request.mode].map(([title, icon, seed]) => ({
    title,
    icon,
    body: writeVintageLine(request, snapshot, seed),
  }))

  return {
    heading: `${request.zodiacSign} ${modeTitle}`,
    subheading: date,
    cosmicWeather:
      snapshot.moonSign === 'Verification needed'
        ? 'The machine is running in keepsake preview mode until the final ephemeris is connected.'
        : `${snapshot.moonPhase}. ${snapshot.notableTransits.join(' ')}`,
    sections,
    luckyNumbers: request.mode === 'birthday' ? ['6', '17', '26'] : ['3', '8', '14'],
    luckyColors: request.zodiacSign === 'Gemini' ? ['Royal blue', 'Faded gold', 'Ink navy'] : ['Cream', 'Old gold', 'Deep ink'],
    luckySymbols: ['A paper star', 'A blue tube', 'A message saved for later'],
    finalFortune:
      request.mode === 'birthday'
        ? 'A year is not only a number. It is a match struck in the dark, a tiny scroll unrolling, a proof that wonder was not wasted on the child you used to be.'
        : 'The best sign today is the one that makes you curious enough to keep going.',
    friendScroll: request.friendMode
      ? {
          title: 'Friend Scroll',
          icon: '♊',
          body:
            'For the First Week of June Gemini: two bicycles beneath summer skies remain the lucky symbol. Years pass, roads split, and still the old drugstore light finds both riders. The best journeys are not measured by miles traveled, but by who was riding beside you.',
        }
      : undefined,
  }
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1)
}
