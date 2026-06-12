import { AXES } from '@/lib/constants'
import { AxisSlider } from './AxisSlider'

export function AxisSliders() {
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
        />
      ))}
    </>
  )
}
