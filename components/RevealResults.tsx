import { computeReveal } from '@/lib/reveal'
import type { AxisAnswers } from '@/lib/types'

type RevealResultsProps = {
  hasSubmitted: boolean
  ownSubmission: AxisAnswers | null
  otherSubmission: AxisAnswers | null
}

export function RevealResults({
  hasSubmitted,
  ownSubmission,
  otherSubmission,
}: RevealResultsProps) {
  if (!hasSubmitted || !ownSubmission) return null

  return (
    <div className="mt-6 border-t border-border pt-6">
      {!otherSubmission ? (
        <p className="text-center text-[13px] text-muted">
          Waiting for the other person to submit their answers…
        </p>
      ) : (
        <>
          <h3 className="mb-4 text-center font-serif text-lg text-ink">Where you&apos;re on the same page</h3>
          {(() => {
            const revealed = computeReveal(ownSubmission, otherSubmission)
            if (revealed.length === 0)
              return (
                <p className="text-center text-[13px] text-muted">
                  No mutual interest found across any dimension.
                </p>
              )

            return (
              <ul className="space-y-4">
                {revealed.map(({ name, desc, score, label }) => (
                  <li key={name} className="rounded-[3px] border border-border bg-[#efe9df] px-4 py-3">
                    <div className="font-serif text-base text-ink">{name}</div>
                    <div className="mt-1 text-[13px] leading-normal text-[#7a766e]">{desc}</div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs font-medium text-brand">{label}</span>
                      <span className="font-serif text-xs text-muted">{score} / 7</span>
                    </div>
                  </li>
                ))}
              </ul>
            )
          })()}
        </>
      )}
    </div>
  )
}
