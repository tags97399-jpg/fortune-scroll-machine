interface LuckyItemsProps {
  numbers: string[]
  colors: string[]
  symbols: string[]
}

export function LuckyItems({ numbers, colors, symbols }: LuckyItemsProps) {
  return (
    <section className="lucky-items">
      <div>
        <h3>Lucky Numbers</h3>
        <p>{numbers.join(' · ')}</p>
      </div>
      <div>
        <h3>Lucky Colors</h3>
        <p>{colors.join(' · ')}</p>
      </div>
      <div>
        <h3>Lucky Symbols</h3>
        <p>{symbols.join(' · ')}</p>
      </div>
    </section>
  )
}
