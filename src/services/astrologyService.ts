import type { AstrologySnapshot, ScrollRequest } from '../types/scrollTypes'

const geminiBirthdaySnapshot: AstrologySnapshot = {
  date: '2026-06-17',
  sunSign: 'Gemini',
  moonSign: 'Cancer',
  moonPhase: 'Waxing crescent after the June 15 Gemini new moon',
  mercurySign: 'Cancer',
  venusSign: 'Cancer',
  marsSign: 'Taurus',
  jupiterSign: 'Cancer',
  saturnSign: 'Aries',
  uranusSign: 'Gemini',
  neptuneSign: 'Aries',
  plutoSign: 'Aquarius',
  retrogrades: ['Pluto retrograde in Aquarius'],
  notableTransits: [
    'Uranus freshly in Gemini electrifies ideas, voice, memory, and reinvention.',
    'Saturn in Aries asks for courage with cleaner boundaries and simpler first steps.',
    'Cancer emphasis softens the forecast around home, old friends, and emotional repair.',
  ],
  sourceNotes: [
    'MVP fixture for requested June 17, 2026 Gemini birthday test case.',
    'New moon date adjusted to June 15, 2026 in this fixture; verify against final ephemeris before production launch.',
    'Planetary placements are structured for developer review and should be replaced by a calculation library or trusted ephemeris API.',
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
