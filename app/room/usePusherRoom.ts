import { useEffect, useRef } from 'react'
import { useChannel } from '../pusher/useChannel'
import { useSubmissions } from '../pusher/useSubmissions'

export function usePusherRoom(
  channelName: string,
  onSubmissionReceived: (data: unknown) => void,
  onSubscriptionCountChange: (newCount: number, prevCount: number, roomId: string) => void
) {
  const { channel, subscriptionCount } = useChannel(channelName)
  const previousSubscriptionCount = useRef(subscriptionCount)

  useSubmissions(channel, onSubmissionReceived)

  useEffect(() => {
    const prevCount = previousSubscriptionCount.current
    if (prevCount !== subscriptionCount) {
      onSubscriptionCountChange(subscriptionCount, prevCount, channelName)
      previousSubscriptionCount.current = subscriptionCount
    }
  }, [subscriptionCount, channelName, onSubscriptionCountChange])

  return { subscriptionCount }
}
