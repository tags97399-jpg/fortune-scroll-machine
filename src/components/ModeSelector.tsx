import { CalendarDays, Cake, SunMedium, TableProperties } from 'lucide-react'
import type { ScrollMode } from '../types/scrollTypes'

interface ModeSelectorProps {
  value: ScrollMode
  onChange: (value: ScrollMode) => void
}

const modes: Array<{ value: ScrollMode; label: string; icon: typeof SunMedium }> = [
  { value: 'daily', label: 'Daily', icon: SunMedium },
  { value: 'weekly', label: 'Weekly', icon: TableProperties },
  { value: 'monthly', label: 'Monthly', icon: CalendarDays },
  { value: 'birthday', label: 'Birthday', icon: Cake },
]

export function ModeSelector({ value, onChange }: ModeSelectorProps) {
  return (
    <section className="control-block">
      <span className="control-label">Choose a mode</span>
      <div className="mode-grid" role="radiogroup" aria-label="Scroll mode">
        {modes.map((mode) => {
          const Icon = mode.icon
          return (
            <button
              className={mode.value === value ? 'mode-button active' : 'mode-button'}
              key={mode.value}
              onClick={() => onChange(mode.value)}
              role="radio"
              aria-checked={mode.value === value}
              type="button"
            >
              <Icon aria-hidden="true" size={24} />
              <span>{mode.label}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
