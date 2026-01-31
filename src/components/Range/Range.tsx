import styles from './range.module.scss'

export interface RangeProps {
  name: string
  id?: string
  value: string
  min?: number
  max?: number
  step?: number

  isDisabled?: boolean
}

export const Range = ({ name, id, value, min, max, step, isDisabled = false }: RangeProps) => {
  return (
    <div className={styles.field}>
      <input
        type="range"
        id={id || name}
        name={name}
        value={value}
        min={min}
        max={max}
        disabled={isDisabled}
        className={styles.input}
        step={step}
      />
    </div>
  )
}
