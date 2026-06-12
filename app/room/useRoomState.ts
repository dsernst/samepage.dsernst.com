import { useCallback, useState } from 'react'
import { BroadcastEvent, isSubmissionEvent, SubmissionEventData } from '../pusher/types'
import { clientId } from './clientId'
import type { AxisAnswers } from '@/lib/types'

export function useRoomState() {
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [otherSubmission, setOtherSubmission] = useState<AxisAnswers | null>(null)
  const [ownSubmission, setOwnSubmission] = useState<AxisAnswers | null>(null)

  const onSubmissionReceived = useCallback((data: unknown) => {
    if (!isSubmissionEvent(data)) return
    const isFromCurrentUser = data.data.clientId === clientId
    if (!isFromCurrentUser) setOtherSubmission(data.data.answers)
  }, [])

  const broadcastSubmission = useCallback((answers: AxisAnswers, roomId: string) => {
    const event: BroadcastEvent<SubmissionEventData> = {
      type: 'submission',
      data: { answers, clientId },
      roomId,
    }

    fetch('/api/broadcast', {
      method: 'POST',
      body: JSON.stringify(event),
    }).catch(console.error)
  }, [])

  const onSubmit = useCallback(
    (answers: AxisAnswers, roomId: string, setActiveStep: (step: number) => void) => {
      if (!confirm('Ready to submit your final answers?')) return

      setHasSubmitted(true)
      setOwnSubmission(answers)
      broadcastSubmission(answers, roomId)
      setActiveStep(0)
    },
    [broadcastSubmission]
  )

  const onSubscriptionCountChange = useCallback(
    (newCount: number, prevCount: number, roomId: string) => {
      if (newCount > prevCount && ownSubmission) broadcastSubmission(ownSubmission, roomId)
    },
    [ownSubmission, broadcastSubmission]
  )

  return {
    hasSubmitted,
    otherSubmission,
    ownSubmission,
    onSubmissionReceived,
    onSubmit,
    onSubscriptionCountChange,
  }
}
