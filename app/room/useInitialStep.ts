import { useEffect } from 'react'

export function useInitialStep(setActiveStep: (step: number) => void) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) setActiveStep(2)
  }, [setActiveStep])
}
