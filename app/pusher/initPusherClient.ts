import Pusher from 'pusher-js'

export const pusher: Pusher | null =
  typeof window === 'undefined'
    ? null
    : (() => {
        const key = process.env.NEXT_PUBLIC_PUSHER_APP_KEY
        const cluster = process.env.NEXT_PUBLIC_PUSHER_CLUSTER
        if (!key || !cluster) {
          console.error('NEXT_PUBLIC_PUSHER_APP_KEY or NEXT_PUBLIC_PUSHER_CLUSTER is not set')
          return null
        }
        return new Pusher(key, { cluster })
      })()

// eslint-disable-next-line @next/next/no-assign-module-variable
declare const module: { hot?: { dispose: (callback: () => void) => void } }
if (module.hot) module.hot.dispose(() => pusher?.disconnect())
