interface FinalSealProps {
  glyph: string
  text: string
}

export function FinalSeal({ glyph, text }: FinalSealProps) {
  return (
    <footer className="final-seal">
      <div className="seal-mark" aria-hidden="true">
        {glyph}
      </div>
      <p>{text}</p>
    </footer>
  )
}
