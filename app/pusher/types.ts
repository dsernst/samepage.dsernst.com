import type { AxisAnswers } from '@/lib/types'

export type BroadcastEventType = 'submission'
export type SubmissionEventData = { answers: AxisAnswers; clientId: string }
export type BroadcastEventData = SubmissionEventData

export type BroadcastEvent<T extends BroadcastEventData> = {
  type: BroadcastEventType
  data: T
  roomId: string
}

export type PusherResponse<T extends BroadcastEventData> = { data: T }

export function isSubmissionEvent(data: unknown): data is PusherResponse<SubmissionEventData> {
  return (
    !!data &&
    typeof data === 'object' &&
    'data' in data &&
    typeof data.data === 'object' &&
    !!data.data &&
    'answers' in data.data &&
    typeof data.data.answers === 'object' &&
    'clientId' in data.data &&
    typeof data.data.clientId === 'string'
  )
}
