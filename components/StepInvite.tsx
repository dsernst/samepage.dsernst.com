'use client'

import { useEffect, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { guestLabel } from '@/lib/guests'
import { Step } from './Step'

type StepInviteProps = {
  activeStep: number
  setActiveStep: (step: number) => void
  step: number
  roomId: string
  subscriptionCount: number
  assignNewRoomId: () => void
}

function useOrigin() {
  const [origin, setOrigin] = useState('')

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only origin after mount
    setOrigin(window.location.origin)
  }, [])

  return origin
}

export function StepInvite({
  activeStep,
  setActiveStep,
  step,
  roomId,
  subscriptionCount,
  assignNewRoomId,
}: StepInviteProps) {
  const origin = useOrigin()
  const url = origin && roomId ? `${origin}/#${roomId}` : ''
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    if (!url) return
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Step
      step={step}
      title="Invite"
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      right={guestLabel(subscriptionCount) ?? undefined}
      buttonText="Next"
    >
      <div className="mb-4 flex items-center justify-center text-center">
        <span className="text-xs text-muted">Room ID:</span>
        <span className="ml-2 font-mono text-sm text-ink">{roomId || '…'}</span>
        <button
          className="ml-3 cursor-pointer rounded-sm border border-border px-2 py-1 text-xs text-muted hover:bg-cream"
          onClick={() => assignNewRoomId()}
          title="Generate new room ID"
        >
          ↻
        </button>
      </div>

      <div className="text-center">
        <p className="mb-2 text-[13px] text-body">Share this link with the other person:</p>
        {url ? (
          <a
            href={url}
            className="break-all text-sm text-brand underline underline-offset-2"
          >
            {url}
          </a>
        ) : (
          <span className="text-sm text-muted">Loading…</span>
        )}
        <div className="mt-3">
          <button
            className="cursor-pointer rounded-sm border border-border bg-cream px-4 py-2 text-[13px] text-ink hover:bg-[#faf6f0]"
            onClick={copyLink}
            disabled={!url}
          >
            {copied ? 'Copied!' : 'Copy link'}
          </button>
        </div>
        {url && (
          <div className="mt-4 flex justify-center">
            <div className="rounded-[3px] border border-border bg-cream p-2">
              <QRCodeSVG value={url} size={112} bgColor="#f5f0e8" fgColor="#1a1a18" level="M" />
            </div>
          </div>
        )}
      </div>
    </Step>
  )
}
