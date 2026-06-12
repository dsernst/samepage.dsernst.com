'use client'

import { useCallback, useState } from 'react'
import { LABELS } from '@/lib/constants'

type AxisSliderProps = {
  name: string
  desc: string
  showDivider: boolean
}

function sliderFill(val: number) {
  const pct = (val / 7) * 100
  const c = val <= 0 ? '#d4cec4' : '#2d5a3d'
  return `linear-gradient(to right, ${c} ${pct}%, #d4cec4 ${pct}%)`
}

export function AxisSlider({ name, desc, showDivider }: AxisSliderProps) {
  const id = name.toLowerCase()
  const [value, setValue] = useState(0)
  const display = Math.round(value)

  const snap = useCallback(() => {
    setValue((v) => Math.round(v))
  }, [])

  return (
    <div className="axis">
      <div className="axis-name">{name}</div>
      <div className="axis-desc">{desc}</div>
      <div className="slider-track-wrap">
        <input
          type="range"
          min={0}
          max={7}
          step={0.01}
          value={value}
          id={`slider-${id}`}
          style={{ background: sliderFill(value) }}
          onChange={(e) => setValue(parseFloat(e.target.value))}
          onMouseUp={snap}
          onTouchEnd={snap}
          onKeyUp={snap}
        />
      </div>
      <div className="slider-label">
        <span className="label-current">{LABELS[display]}</span>
        <span className="label-score">{display} / 7</span>
      </div>
      {showDivider && <div className="divider" />}
    </div>
  )
}
