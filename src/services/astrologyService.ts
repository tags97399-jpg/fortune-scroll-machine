import type { AstrologySnapshot, ScrollRequest } from '../types/scrollTypes'

const geminiBirthdaySnapshot: AstrologySnapshot = {
  date: '2026-06-17',
  sunSign: 'Gemini',
  moonSign: 'Cancer',
  moonPhase: 'Waxing crescent after the June 15 Gemini new moon',
  mercurySign: 'Cancer',
  venusSign: 'Leo',
  marsSign: 'Taurus',
  jupiterSign: 'Cancer',
  saturnSign: 'Aries',
  uranusSign: 'Gemini',
  neptuneSign: 'Aries',
  plutoSign: 'Aquarius',
  retrogrades: ['Pluto retrograde in Aquarius'],
  notableTransits: [
    'Sun and Uranus in Gemini electrify ideas, voice, memory, and reinvention.',
    'Mercury and Jupiter in Cancer put protection, family memory, and emotional intelligence at the center of the forecast.',
    'Venus in Leo opposite Pluto retrograde in Aquarius intensifies friendship, loyalty, love, and creative self-worth.',
    'Saturn and Neptune in Aries ask for brave beginnings that are also realistic.',
    'Mars in Taurus rewards slow craft, steady money moves, and tangible progress.',
  ],
  sourceNotes: [
    'MVP fixture for requested June 17, 2026 Gemini birthday test case, using tropical zodiac sign placements.',
    'Astro-Seek lunar calendar lists June 17, 2026 as a Waxing Crescent Moon with Moon in Cancer.',
    'Cafe Astrology This Week in Astrology for June 14-20, 2026 lists Sun in Gemini, Mercury in Cancer, Venus in Leo, Mars in Taurus, Jupiter in Cancer, Saturn and Neptune in Aries, Uranus in Gemini, Pluto in Aquarius.',
    'Daily June 17, 2026 references emphasize Venus opposite Pluto and the Moon moving from Cancer toward Leo; production should replace this fixture with a calculated ephemeris.',
  ],
}

export function getAstrologySnapshot(request: ScrollRequest): AstrologySnapshot {
  if (request.zodiacSign === 'Gemini' && request.targetDate === '2026-06-17') {
    return geminiBirthdaySnapshot
  }

  return {
    date: request.targetDate,
    sunSign: request.zodiacSign,
    moonSign: 'Verification needed',
    moonPhase: 'Verification needed',
    mercurySign: 'Verification needed',
    venusSign: 'Verification needed',
    marsSign: 'Verification needed',
    jupiterSign: 'Verification needed',
    saturnSign: 'Verification needed',
    uranusSign: 'Verification needed',
    neptuneSign: 'Verification needed',
    plutoSign: 'Verification needed',
    retrogrades: ['Verification needed'],
    notableTransits: [
      'A verified ephemeris source should populate this date before release.',
      `${request.zodiacSign} receives a placeholder reading shaped by the vintage language engine.`,
    ],
    sourceNotes: [
      'Placeholder astrologyService branch. Replace with a real calculation library, trusted API, or manually validated ephemeris rows.',
      'User-facing copy hides unverified placements while developer notes keep the verification requirement visible.',
    ],
  }
}
