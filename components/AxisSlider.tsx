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
  const c = val <= 0 ? 'var(--color-border)' : 'var(--color-brand)'
  return `linear-gradient(to right, ${c} ${pct}%, var(--color-border) ${pct}%)`
}

export function AxisSlider({ name, desc, showDivider }: AxisSliderProps) {
  const [value, setValue] = useState(0)
  const display = Math.round(value)

  const snap = useCallback(() => {
    setValue((v) => Math.round(v))
  }, [])

  return (
    <div className="mb-2">
      <div className="mb-1 font-serif text-lg font-normal text-ink">{name}</div>
      <div className="mb-4 text-[13px] leading-normal text-axis-desc">{desc}</div>
      <div className="cursor-pointer py-2.5">
        <input
          type="range"
          min={0}
          max={7}
          step={0.01}
          value={value}
          id={`slider-${name.toLowerCase()}`}
          className="range-slider block h-[3px] w-full cursor-pointer appearance-none rounded-sm outline-none"
          style={{ background: sliderFill(value) }}
          onChange={(e) => setValue(parseFloat(e.target.value))}
          onMouseUp={snap}
          onTouchEnd={snap}
          onKeyUp={snap}
        />
      </div>
      <div className="mt-2 mb-1 flex justify-between">
        <span className="min-h-[18px] text-xs font-medium text-brand">{LABELS[display]}</span>
        <span className="font-serif text-xs text-muted">{display} / 7</span>
      </div>
      {showDivider && <div className="mt-[18px] mb-[22px] h-px bg-border opacity-70" />}
    </div>
  )
}
