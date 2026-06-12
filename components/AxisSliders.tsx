import { AXES } from '@/lib/constants';
import { AxisSlider } from './AxisSlider';

export function AxisSliders() {
  return (
    <>
      <p className="axes-label">Your interest levels</p>
      {AXES.map((axis, i) => (
        <AxisSlider
          key={axis.name}
          name={axis.name}
          desc={axis.desc}
          showDivider={i < AXES.length - 1}
        />
      ))}
    </>
  );
}
