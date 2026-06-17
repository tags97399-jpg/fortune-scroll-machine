import { motion } from 'framer-motion'
import type { ZodiacMeta } from '../data/zodiacSigns'

interface HoroscopeTubeProps {
  sign: ZodiacMeta
  isOpen: boolean
  onUnroll: () => void
}

export function HoroscopeTube({ sign, isOpen, onUnroll }: HoroscopeTubeProps) {
  return (
    <motion.button
      className="tube-button"
      type="button"
      onClick={onUnroll}
      aria-label={`Unroll ${sign.name} fortune scroll`}
      animate={{ rotate: isOpen ? -2 : 0, y: isOpen ? -4 : 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{ '--tube-color': sign.color } as React.CSSProperties}
    >
      <span className="tube-cap left" aria-hidden="true" />
      <span className="tube-face">
        <span className="tube-border">
          <span className="tube-title">{sign.name.toUpperCase()}</span>
          <span className="tube-dates">{sign.dates}</span>
          <span className="tube-twins" aria-hidden="true">
            {sign.glyph}
          </span>
        </span>
      </span>
      <span className="tube-cap right" aria-hidden="true" />
    </motion.button>
  )
}
