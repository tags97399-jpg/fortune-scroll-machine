import { motion } from 'framer-motion'
import type { ZodiacMeta } from '../data/zodiacSigns'
import type { FortuneScroll as FortuneScrollData } from '../types/scrollTypes'
import { FinalSeal } from './FinalSeal'
import { LuckyItems } from './LuckyItems'
import { ScrollSection } from './ScrollSection'

interface ScrollAnimationProps {
  fortune: FortuneScrollData
  sign: ZodiacMeta
  isOpen: boolean
  onRollBack: () => void
}

export function ScrollAnimation({ fortune, sign, isOpen, onRollBack }: ScrollAnimationProps) {
  return (
    <motion.div
      className="paper-scroll"
      initial={false}
      animate={{
        maxHeight: isOpen ? 3600 : 186,
        opacity: isOpen ? 1 : 0.94,
      }}
      transition={{ duration: 1.25, ease: [0.2, 0.8, 0.2, 1] }}
      aria-live="polite"
    >
      <div className="paper-top">
        <span aria-hidden="true">✦</span>
        <button type="button" onClick={onRollBack}>
          {isOpen ? 'Roll It Back Up' : 'Click to Unroll Your Fortune'}
        </button>
        <span aria-hidden="true">✦</span>
      </div>

      <div className="scroll-header">
        <div className="scroll-glyph" aria-hidden="true">
          {sign.glyph}
        </div>
        <h1>{fortune.heading}</h1>
        <p>{fortune.subheading}</p>
      </div>

      <section className="cosmic-weather">
        <h2>Cosmic Weather Report</h2>
        <p>{fortune.cosmicWeather}</p>
      </section>

      {fortune.sections.map((section) => (
        <ScrollSection key={section.title} section={section} />
      ))}

      {fortune.friendScroll ? <ScrollSection section={fortune.friendScroll} /> : null}

      <LuckyItems
        numbers={fortune.luckyNumbers}
        colors={fortune.luckyColors}
        symbols={fortune.luckySymbols}
      />

      <FinalSeal glyph={sign.glyph} text={fortune.finalFortune} />
    </motion.div>
  )
}
