import { othersLabel } from '@/lib/guests'

export function GuestNotice({ guestCount }: { guestCount: number }) {
  const label = othersLabel(guestCount)
  if (!label) return null

  return (
    <p
      className="mb-4 rounded-[3px] border border-brand/25 bg-brand/8 px-4 py-2.5 text-center text-[13px] font-medium text-brand"
      role="status"
    >
      {label}
    </p>
  )
}
