import type { ZodiacSign } from '../types/scrollTypes'

export interface ZodiacMeta {
  name: ZodiacSign
  glyph: string
  dates: string
  color: string
}

export const zodiacSigns: ZodiacMeta[] = [
  { name: 'Aries', glyph: '♈︎', dates: 'Mar 21 - Apr 19', color: '#b94b33' },
  { name: 'Taurus', glyph: '♉︎', dates: 'Apr 20 - May 20', color: '#5b7d4b' },
  { name: 'Gemini', glyph: '♊︎', dates: 'May 21 - June 20', color: '#123f9b' },
  { name: 'Cancer', glyph: '♋︎', dates: 'June 21 - July 22', color: '#2f6f87' },
  { name: 'Leo', glyph: '♌︎', dates: 'July 23 - Aug 22', color: '#c47724' },
  { name: 'Virgo', glyph: '♍︎', dates: 'Aug 23 - Sept 22', color: '#7c6a3a' },
  { name: 'Libra', glyph: '♎︎', dates: 'Sept 23 - Oct 22', color: '#8660a8' },
  { name: 'Scorpio', glyph: '♏︎', dates: 'Oct 23 - Nov 21', color: '#5d2038' },
  { name: 'Sagittarius', glyph: '♐︎', dates: 'Nov 22 - Dec 21', color: '#8a4c1d' },
  { name: 'Capricorn', glyph: '♑︎', dates: 'Dec 22 - Jan 19', color: '#46505d' },
  { name: 'Aquarius', glyph: '♒︎', dates: 'Jan 20 - Feb 18', color: '#1f6f9b' },
  { name: 'Pisces', glyph: '♓︎', dates: 'Feb 19 - Mar 20', color: '#4a5f93' },
]

export function getZodiac(name: ZodiacSign): ZodiacMeta {
  return zodiacSigns.find((sign) => sign.name === name) ?? zodiacSigns[2]
}
