import { AXES } from './constants'

export type AxisName = (typeof AXES)[number]['name']
export type AxisAnswers = Record<AxisName, number>

export function emptyAnswers(): AxisAnswers {
  return Object.fromEntries(AXES.map(({ name }) => [name, 0])) as AxisAnswers
}
