type StepProps = {
  title: string
  children?: React.ReactNode
  activeStep: number
  setActiveStep: (step: number) => void
  step: number
  right?: string
  buttonText?: string
  buttonOnClick?: () => void
  buttonDisabled?: boolean
}

export function Step({
  title,
  children,
  activeStep,
  setActiveStep,
  step,
  right,
  buttonText = 'Next',
  buttonOnClick,
  buttonDisabled = false,
}: StepProps) {
  const isOpen = step === activeStep

  return (
    <div className="relative mb-3 w-full rounded-[3px] border border-border bg-[#efe9df]">
      <h3
        className={`flex cursor-pointer items-center justify-between gap-3 px-4 py-3.5 font-medium select-none hover:bg-[#e8e2d8] ${
          isOpen ? 'border-b border-border bg-[#e8e2d8]' : ''
        }`}
        onClick={() => setActiveStep(isOpen ? 0 : step)}
      >
        <span className="flex min-w-0 items-center">
          <span
            className={`mr-2 inline-block text-xs text-muted transition-transform duration-200 ${
              isOpen ? 'rotate-90' : ''
            }`}
          >
            ▶
          </span>
          <span className="mr-2 text-[13px] tracking-[0.06em] text-body uppercase">
            Step {step}
          </span>
          <span className="text-[13px] text-ink">{title}</span>
        </span>
        {right && <span className="shrink-0 text-xs font-medium text-brand">{right}</span>}
      </h3>

      {isOpen && (
        <div className="px-4 py-4">
          {children}
          <div className="mt-4 flex justify-end">
            <button
              className="cursor-pointer rounded-sm border-none bg-brand px-5 py-2.5 font-sans text-[13px] font-medium tracking-[0.06em] text-cream uppercase transition-colors hover:bg-[#3d7a53] disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => (buttonOnClick ? buttonOnClick() : setActiveStep(step + 1))}
              disabled={buttonDisabled}
            >
              {buttonText}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
