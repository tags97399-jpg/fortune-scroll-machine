import { zodiacSigns } from '../data/zodiacSigns'
import type { ZodiacSign } from '../types/scrollTypes'

interface ZodiacSelectorProps {
  value: ZodiacSign
  onChange: (value: ZodiacSign) => void
}

export function ZodiacSelector({ value, onChange }: ZodiacSelectorProps) {
  const current = zodiacSigns.find((sign) => sign.name === value) ?? zodiacSigns[2]

  return (
    <section className="control-block">
      <label htmlFor="zodiac-select">Choose your sign</label>
      <div className="select-shell featured-select">
        <span className="featured-glyph">{current.glyph}</span>
        <select
          id="zodiac-select"
          value={value}
          onChange={(event) => onChange(event.target.value as ZodiacSign)}
        >
          {zodiacSigns.map((sign) => (
            <option key={sign.name} value={sign.name}>
              {sign.name} - {sign.dates}
            </option>
          ))}
        </select>
      </div>
      <div className="zodiac-grid" aria-label="Quick zodiac sign choices">
        {zodiacSigns.map((sign) => (
          <button
            className={sign.name === value ? 'glyph-button active' : 'glyph-button'}
            key={sign.name}
            onClick={() => onChange(sign.name)}
            type="button"
            aria-label={sign.name}
          >
            {sign.glyph}
          </button>
        ))}
      </div>
    </section>
  )
}
