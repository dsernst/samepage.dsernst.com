'use client'

import type { AxisAnswers } from '@/lib/types'
import { AxisSliders } from './AxisSliders'
import { Step } from './Step'

type StepRateProps = {
  activeStep: number
  setActiveStep: (step: number) => void
  step: number
  values: AxisAnswers
  onChange: (values: AxisAnswers) => void
  hasSubmitted: boolean
  onSubmit: () => void
}

export function StepRate({
  activeStep,
  setActiveStep,
  step,
  values,
  onChange,
  hasSubmitted,
  onSubmit,
}: StepRateProps) {
  return (
    <Step
      step={step}
      title="Your Interest Levels"
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      buttonText={hasSubmitted ? 'Submitted.' : 'Submit'}
      buttonOnClick={onSubmit}
      buttonDisabled={hasSubmitted}
    >
      <AxisSliders values={values} onChange={onChange} disabled={hasSubmitted} />
    </Step>
  )
}
