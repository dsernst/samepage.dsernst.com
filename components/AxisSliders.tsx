import { AXES } from '@/lib/constants'
import type { AxisAnswers, AxisName } from '@/lib/types'
import { AxisSlider } from './AxisSlider'

type AxisSlidersProps = {
  values: AxisAnswers
  onChange: (values: AxisAnswers) => void
  disabled?: boolean
}

export function AxisSliders({ values, onChange, disabled = false }: AxisSlidersProps) {
  const setAxisValue = (name: AxisName, value: number) => {
    onChange({ ...values, [name]: value })
  }

  return (
    <>
      <p className="mb-7 text-[11px] font-normal tracking-[0.14em] text-muted uppercase">
        Your interest levels
      </p>
      {AXES.map((axis, i) => (
        <AxisSlider
          key={axis.name}
          name={axis.name}
          desc={axis.desc}
          showDivider={i < AXES.length - 1}
          value={values[axis.name]}
          onChange={(v) => setAxisValue(axis.name, v)}
          disabled={disabled}
        />
      ))}
    </>
  )
}
