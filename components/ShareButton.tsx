'use client'

import { useState } from 'react'

export function ShareButton() {
  const [showNote, setShowNote] = useState(false)

  return (
    <div className="mb-9">
      <button
        className="inline-block cursor-pointer rounded-sm border-none bg-brand px-7 py-[13px] font-sans text-[13px] font-medium tracking-[0.06em] text-cream uppercase transition-colors hover:bg-brand-hover active:bg-brand-active"
        onClick={() => setShowNote(true)}
      >
        Get a shareable link →
      </button>
      {showNote && (
        <p className="mt-2.5 text-[13px] text-muted italic">
          Just a mockup for now — link generation coming soon.
        </p>
      )}
    </div>
  )
}
