import { Volume2, VolumeX, Users } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { DateSelector } from './components/DateSelector'
import { HoroscopeTube } from './components/HoroscopeTube'
import { ModeSelector } from './components/ModeSelector'
import { ScrollAnimation } from './components/ScrollAnimation'
import { ZodiacSelector } from './components/ZodiacSelector'
import { getZodiac } from './data/zodiacSigns'
import { getAstrologySnapshot } from './services/astrologyService'
import { generateHoroscope } from './services/horoscopeGenerator'
import type { ScrollMode, ScrollRequest, ZodiacSign } from './types/scrollTypes'

function App() {
  const today = new Date().toISOString().slice(0, 10)
  const [zodiacSign, setZodiacSign] = useState<ZodiacSign>('Gemini')
  const [targetDate, setTargetDate] = useState('2026-06-17')
  const [mode, setMode] = useState<ScrollMode>('birthday')
  const [friendMode, setFriendMode] = useState(true)
  const [soundOn, setSoundOn] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const request: ScrollRequest = useMemo(
    () => ({
      zodiacSign,
      targetDate,
      mode,
      birthdayDate: mode === 'birthday' ? targetDate : undefined,
      friendMode,
      friendBirthdayRange: friendMode ? 'First Week of June Gemini' : undefined,
    }),
    [friendMode, mode, targetDate, zodiacSign],
  )

  const sign = getZodiac(zodiacSign)
  const snapshot = useMemo(() => getAstrologySnapshot(request), [request])
  const fortune = useMemo(() => generateHoroscope(request, snapshot), [request, snapshot])

  useEffect(() => {
    localStorage.setItem('fortune-scroll:last-request', JSON.stringify(request))
  }, [request])

  function unroll() {
    setIsOpen(true)
  }

  return (
    <main className="app-shell">
      <header className="top-bar">
        <div className="brand-mark" aria-hidden="true">
          ✦
        </div>
        <h1>The Fortune Scroll Machine</h1>
        <div className="top-actions">
          <button
            className="icon-button"
            type="button"
            aria-label={soundOn ? 'Mute sound effects' : 'Enable sound effects'}
            onClick={() => setSoundOn((value) => !value)}
          >
            {soundOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
          <button className="unroll-button" type="button" onClick={unroll}>
            Unroll
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </header>

      <div className="machine-layout">
        <aside className="control-panel" aria-label="Fortune scroll controls">
          <ZodiacSelector value={zodiacSign} onChange={setZodiacSign} />
          <DateSelector value={targetDate || today} onChange={setTargetDate} />
          <ModeSelector value={mode} onChange={setMode} />

          <section className="switch-row">
            <div>
              <div className="switch-title">
                <Users size={18} aria-hidden="true" />
                Friend Scroll
              </div>
              <p>Unroll a fortune for a friend.</p>
            </div>
            <button
              className={friendMode ? 'switch active' : 'switch'}
              type="button"
              role="switch"
              aria-checked={friendMode}
              onClick={() => setFriendMode((value) => !value)}
            >
              <span />
            </button>
          </section>

          <section className="switch-row">
            <div>
              <div className="switch-title">
                {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
                Sound Effects
              </div>
              <p>Vintage unroll sound is muted by default.</p>
            </div>
            <button
              className={soundOn ? 'switch active' : 'switch'}
              type="button"
              role="switch"
              aria-checked={soundOn}
              onClick={() => setSoundOn((value) => !value)}
            >
              <span />
            </button>
          </section>

          <button className="roll-back-panel-button" type="button" onClick={() => setIsOpen(false)}>
            Roll It Back Up
          </button>
        </aside>

        <section className="counter-scene" aria-label="Interactive fortune scroll">
          <div className="drugstore-backdrop" aria-hidden="true">
            <span className="candy-sign">Candy<br />10c</span>
            <span className="gum-sign">Bubble<br />Gum<br />5c</span>
          </div>
          <div className="machine-stage">
            <HoroscopeTube sign={sign} isOpen={isOpen} onUnroll={unroll} />
            <ScrollAnimation
              fortune={fortune}
              sign={sign}
              isOpen={isOpen}
              onRollBack={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
            />
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
