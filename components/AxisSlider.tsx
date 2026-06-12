'use client'

import { useCallback } from 'react'
import { LABELS } from '@/lib/constants'
import type { AxisName } from '@/lib/types'

type AxisSliderProps = {
  name: AxisName
  desc: string
  showDivider: boolean
  value: number
  onChange: (value: number) => void
  disabled?: boolean
}

function sliderFill(val: number) {
  const pct = (val / 7) * 100
  const c = val <= 0 ? 'var(--color-border)' : 'var(--color-brand)'
  return `linear-gradient(to right, ${c} ${pct}%, var(--color-border) ${pct}%)`
}

export function AxisSlider({
  name,
  desc,
  showDivider,
  value,
  onChange,
  disabled = false,
}: AxisSliderProps) {
  const display = Math.round(value)

  const snap = useCallback(() => {
    onChange(Math.round(value))
  }, [onChange, value])

  return (
    <div className="mb-2">
      <div className="mb-1 font-serif text-lg font-normal text-ink">{name}</div>
      <div className="mb-4 text-[13px] leading-normal text-[#7a766e]">{desc}</div>
      <div className={`py-2.5 ${disabled ? 'opacity-50' : 'cursor-pointer'}`}>
        <input
          type="range"
          min={0}
          max={7}
          step={0.01}
          value={value}
          id={`slider-${name.toLowerCase()}`}
          className="range-slider block h-[3px] w-full cursor-pointer appearance-none rounded-sm outline-none disabled:cursor-not-allowed"
          style={{ background: sliderFill(value) }}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          onMouseUp={snap}
          onTouchEnd={snap}
          onKeyUp={snap}
          disabled={disabled}
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
