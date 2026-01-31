import { useState } from 'react'

import styles from './range.module.scss'

export interface RangeMultiProps {
  name: string
  id?: string
  value1: number
  value2: number
  min: number
  max: number
  step: number
  minGap?: number
  isDisabled?: boolean
  onChange?: (value1: number, value2: number) => void
}

export const RangeMulti = ({
  name,
  id,
  value1: initialValue1,
  value2: initialValue2,
  min = 0,
  max = 1000,
  step = 1,
  minGap = 0,
  isDisabled = false,
  onChange,
}: RangeMultiProps) => {
  const [value1, setValue1] = useState(initialValue1)
  const [value2, setValue2] = useState(initialValue2)

  const handleValue1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue1 = Math.min(Math.max(Number(e.target.value), min), value2 - minGap)
    setValue1(newValue1)
    onChange?.(newValue1, value2)
  }

  const handleValue2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue2 = Math.max(Math.min(Number(e.target.value), max), value1 + minGap)
    setValue2(newValue2)
    onChange?.(value1, newValue2)
  }

  const cssVars: React.CSSProperties = {
    '--v0': value1,
    '--v1': value2,
    '--min': min,
    '--rng': max,
  } as React.CSSProperties

  return (
    <div
      className={styles.fields}
      style={cssVars}>
      <div className={styles.field}>
        <input
          type="range"
          id={id || name}
          name={name}
          value={value1}
          min={min}
          max={max}
          step={step}
          disabled={isDisabled}
          className={styles.input}
          onChange={handleValue1Change}
        />
      </div>
      <div className={styles.field}>
        <input
          type="range"
          id={`${id || name}-2`}
          name={name}
          value={value2}
          min={min}
          max={max}
          step={step}
          disabled={isDisabled}
          className={styles.input}
          onChange={handleValue2Change}
        />
      </div>
    </div>
  )
}
