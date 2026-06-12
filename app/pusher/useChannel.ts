import type { Channel } from 'pusher-js'
import { useEffect, useState } from 'react'
import { pusher } from './initPusherClient'

export function useChannel(channelName: string) {
  const [channel, setChannel] = useState<Channel | null>(null)
  const [subscriptionCount, setSubscriptionCount] = useState(0)

  useEffect(() => {
    if (!channelName || !pusher) return

    const ch = pusher.subscribe(channelName)
    // eslint-disable-next-line react-hooks/set-state-in-effect -- subscribe on mount
    setChannel(ch)

    ch.bind('pusher:subscription_count', (data: unknown) => {
      if (data && typeof data === 'object' && 'subscription_count' in data) {
        if (typeof data.subscription_count === 'number') setSubscriptionCount(data.subscription_count)
      }
    })

    return () => {
      ch.unbind_all()
      pusher?.unsubscribe(channelName)
    }
  }, [channelName])

  return { channel, subscriptionCount }
}
