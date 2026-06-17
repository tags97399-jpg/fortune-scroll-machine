import type {
  AstrologySnapshot,
  FortuneSection,
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
  birthday: [],
} as const

export function generateHoroscope(
  request: ScrollRequest,
  snapshot: AstrologySnapshot,
): FortuneScroll {
  const date = formatDate(request.targetDate)
  const modeTitle = request.mode === 'birthday' ? 'Birthday Fortune Scroll' : `${capitalize(request.mode)} Fortune Scroll`
  const sections =
    request.mode === 'birthday'
      ? buildBirthdaySections(request, snapshot)
      : sectionSets[request.mode].map(([title, icon, seed], index) => ({
          title,
          icon,
          body: writeVintageLine(request, snapshot, seed, index),
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
        ? 'The scroll ends where the year begins: with the Twins listening at two doors. One door opens to memory, the other to invention. Walk through both, but carry only what still has a pulse.'
        : 'The best sign today is the one that makes you curious enough to keep going.',
    friendScroll: request.friendMode
      ? {
          title: 'Friend Scroll',
          icon: '♊',
          body:
            'For the First Week of June Gemini: your friend is under the same strange Gemini weather, but with a softer Cancer Moon pulling the story back toward kitchens, porches, old neighborhoods, and the places where people first learn loyalty. Venus in Leo asks that affection be shown plainly, while Pluto in Aquarius proves that even long friendships can change shape without losing their thread. Lucky symbol: two bicycles beneath summer skies. The best journeys are not measured by miles traveled, but by who was riding beside you.',
        }
      : undefined,
  }
}

function buildBirthdaySections(
  request: ScrollRequest,
  snapshot: AstrologySnapshot,
): FortuneSection[] {
  const isGeminiBirthday =
    request.zodiacSign === 'Gemini' && request.targetDate === '2026-06-17'

  if (!isGeminiBirthday) {
    return [
      {
        title: 'Birthday Week Forecast',
        icon: '☀',
        body: writeVintageLine(request, snapshot, 'The birthday gate opens with a message that should not be rushed.', 0),
      },
      {
        title: 'Year Ahead Preview',
        icon: '✦',
        body: writeVintageLine(request, snapshot, 'The year asks for one honest beginning and one practical promise.', 1),
      },
      {
        title: 'Love & Friendship',
        icon: '♡',
        body: writeVintageLine(request, snapshot, 'Old affection returns with a question tucked inside it.', 2),
      },
      {
        title: 'Money & Business',
        icon: '♢',
        body: writeVintageLine(request, snapshot, 'Useful work grows when the plan is simple enough to repeat.', 3),
      },
      {
        title: 'Health & Energy',
        icon: '+',
        body: writeVintageLine(request, snapshot, 'Your body votes for steadiness before spectacle.', 4),
      },
      {
        title: 'Message From The Stars',
        icon: '★',
        body: writeVintageLine(request, snapshot, 'Keep the sign that still makes you curious.', 5),
      },
    ]
  }

  return [
    {
      title: 'Birthday Week Forecast',
      icon: '☀',
      body:
        'The Sun is still in Gemini, and the Waxing Crescent Moon in Cancer makes this birthday less about being louder and more about being truer. The week favors a private reset: clear one corner, answer one old message, name one wish without apologizing for it. The stars do not ask you to become brand new. They ask you to let the living parts of you come forward again.',
    },
    {
      title: 'Year Ahead Preview',
      icon: '✦',
      body:
        'Uranus in Gemini is the headline of the year: a lightning wire running through your sign. Expect sudden ideas, odd coincidences, revived talents, and a restless need to say things in your own language. This is not a quiet transit, but it can be a liberating one. Keep a notebook nearby. The strange thought that arrives sideways may become the doorway.',
    },
    {
      title: 'Love & Friendship',
      icon: '♡',
      body:
        'Venus in Leo stands opposite Pluto retrograde in Aquarius, so affection may feel dramatic, revealing, or impossible to keep casual. Friendship is not background music under this sky; it is a mirror. Notice who celebrates your shine without trying to own it. Notice who makes your younger self feel safe. A loyal bond can deepen now, but only if everyone is allowed to be fully alive.',
    },
    {
      title: 'Money & Business',
      icon: '♢',
      body:
        'Mars in Taurus gives the practical instruction: make the beautiful thing durable. Do not chase every spark Uranus throws across the room. Pick the idea with legs, price it honestly, give it a container, and let repetition become part of the magic. A modest system built this summer can outlast a dramatic burst of inspiration.',
    },
    {
      title: 'Health & Energy',
      icon: '+',
      body:
        'Mercury and Jupiter in Cancer put the nervous system near the family album. Your body may react to memory before your mind has words for it. Food, rest, water, quiet rooms, and familiar voices are not small medicine this week. Protect your softness without mistaking it for weakness. The shell is not a prison; sometimes it is how the pearl survives.',
    },
    {
      title: 'Creativity & Voice',
      icon: '✎',
      body:
        'Saturn and Neptune in Aries ask for courage with edges. Dream, yes, but give the dream a date, a file name, a first draft, a table, a stitch, a button that actually works. Your Gemini gift is motion; your birthday lesson is embodiment. The vision wants hands.',
    },
    {
      title: 'Message From The Stars',
      icon: '★',
      body:
        'Pluto in Aquarius speaks through communities, machines, archives, and long-distance signals. Somewhere between childhood memory and future technology, a new version of belonging is trying to form. Follow the thread that feels both old and impossible. That is where the year begins.',
    },
  ]
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1)
}
