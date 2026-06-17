export type ZodiacSign =
  | 'Aries'
  | 'Taurus'
  | 'Gemini'
  | 'Cancer'
  | 'Leo'
  | 'Virgo'
  | 'Libra'
  | 'Scorpio'
  | 'Sagittarius'
  | 'Capricorn'
  | 'Aquarius'
  | 'Pisces'

export type ScrollMode = 'daily' | 'weekly' | 'monthly' | 'birthday'

export interface ScrollRequest {
  zodiacSign: ZodiacSign
  targetDate: string
  mode: ScrollMode
  birthdayDate?: string
  friendMode?: boolean
  friendName?: string
  friendBirthdayRange?: string
}

export interface AstrologySnapshot {
  date: string
  sunSign: ZodiacSign
  moonSign: ZodiacSign | 'Verification needed'
  moonPhase: string
  mercurySign: ZodiacSign | 'Verification needed'
  venusSign: ZodiacSign | 'Verification needed'
  marsSign: ZodiacSign | 'Verification needed'
  jupiterSign: ZodiacSign | 'Verification needed'
  saturnSign: ZodiacSign | 'Verification needed'
  uranusSign: ZodiacSign | 'Verification needed'
  neptuneSign: ZodiacSign | 'Verification needed'
  plutoSign: ZodiacSign | 'Verification needed'
  retrogrades: string[]
  notableTransits: string[]
  sourceNotes: string[]
}

export interface FortuneSection {
  title: string
  icon: string
  body: string
}

export interface FortuneScroll {
  heading: string
  subheading: string
  cosmicWeather: string
  sections: FortuneSection[]
  luckyNumbers: string[]
  luckyColors: string[]
  luckySymbols: string[]
  finalFortune: string
  friendScroll?: FortuneSection
}
