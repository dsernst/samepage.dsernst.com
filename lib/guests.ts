export function guestCount(subscriptionCount: number) {
  return Math.max(0, subscriptionCount - 1)
}

export function othersLabel(others: number) {
  if (others <= 0) return null
  if (others === 1) return '1 other person here'
  return `${others} other people here`
}

export function guestLabel(subscriptionCount: number) {
  return othersLabel(guestCount(subscriptionCount))
}
