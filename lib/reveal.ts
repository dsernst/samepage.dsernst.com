import { AXES, LABELS } from './constants'
import type { AxisAnswers } from './types'

export type RevealedAxis = {
  name: string
  desc: string
  score: number
  label: string
}

export function computeReveal(own: AxisAnswers, other: AxisAnswers): RevealedAxis[] {
  return AXES.map(({ name, desc }) => {
    const score = Math.min(own[name] ?? 0, other[name] ?? 0)
    return { name, desc, score, label: LABELS[score] }
  }).filter(({ score }) => score > 0)
}
