import { useEffect, useState } from 'react'

/** On page load, check for hash in the url.
    If not, assign a random one */
export function useRandomRoomId() {
  const [roomId, setRoomId] = useState('')
  const { hash, hashLoaded } = useHash()

  useEffect(() => {
    if (!hashLoaded) return
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read hash on mount
    if (hash) return setRoomId(hash.slice(1))
    assignNewRoomId()
  }, [hash, hashLoaded])

  function assignNewRoomId() {
    const newId = generateBase62String()
    window.location.hash = newId
    setRoomId(newId)
  }

  return { roomId, assignNewRoomId }
}

/** Generate a random 5-char base62 string.
    62^5 = 916,132,832 possibilities */
function generateBase62String() {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let result = ''
  for (let i = 0; i < 5; i++) result += chars[Math.floor(Math.random() * chars.length)]
  return result
}

function useHash() {
  const [hash, setHash] = useState('')
  const [hashLoaded, setHashLoaded] = useState(false)

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)
    updateHash()
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mark hash read on mount
    setHashLoaded(true)
    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  return { hash, hashLoaded }
}
