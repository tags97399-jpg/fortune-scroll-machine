interface DateSelectorProps {
  value: string
  onChange: (value: string) => void
}

export function DateSelector({ value, onChange }: DateSelectorProps) {
  return (
    <section className="control-block">
      <label htmlFor="target-date">Choose a date</label>
      <input
        id="target-date"
        className="date-input"
        type="date"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </section>
  )
}
