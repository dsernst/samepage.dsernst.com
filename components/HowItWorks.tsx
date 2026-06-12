const toggleSummary =
  '[&>summary::-webkit-details-marker]:hidden [&>summary]:flex [&>summary]:cursor-pointer [&>summary]:list-none [&>summary]:items-center [&>summary]:justify-between [&>summary]:select-none [&>summary::after]:font-light [&>summary::after]:text-muted [&>summary::after]:content-["+"] open:[&>summary::after]:content-["×"]'

function FaqItem({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <details
      className={`border-t border-border py-3 ${toggleSummary} [&>summary]:text-[13px] [&>summary]:font-medium [&>summary]:text-ink`}
    >
      <summary>{question}</summary>
      <p className="mt-2.5 text-[13px] leading-[1.7] text-[#3a3830] [&_strong]:font-medium [&_strong]:text-ink">
        {children}
      </p>
    </details>
  )
}

export function HowItWorks() {
  return (
    <details
      className={`mb-10 rounded-[3px] border border-border bg-[#efe9df] ${toggleSummary} [&>summary]:px-4 [&>summary]:py-3.5 [&>summary]:text-[13px] [&>summary]:font-medium [&>summary]:tracking-[0.06em] [&>summary]:text-body [&>summary]:uppercase [&>summary::after]:text-lg`}
    >
      <summary>How it works</summary>
      <div className="px-4 pb-2">
        <FaqItem question="Why rate across multiple dimensions?">
          Real connections are multidimensional. Two people can be great intellectual sparring
          partners but terrible gym buddies. Or deeply emotionally close but professionally
          incompatible. These seven cover common ways people want to spend time and life together
          — keeping them separate lets you see <strong>where</strong> the overlap actually lives,
          not just whether there&apos;s any.
        </FaqItem>
        <FaqItem question="Why does the list always include all seven?">
          The fixed list is the whole point.{' '}
          <strong>Please don&apos;t assume any category is specific to you.</strong> Everyone gets
          the same seven.
        </FaqItem>
        <FaqItem question="How does the reveal work?">
          For each category, only the <strong>lower</strong> of your two scores is shown — to both
          of you. If you&apos;re a 7 and they&apos;re a 2, you both see 2. Your high scores are
          always private. There&apos;s genuinely no benefit to <em>playing it cool</em> &amp;
          understating your interest — honesty is the dominant strategy.
        </FaqItem>
        <FaqItem question="Is anything stored?">
          Answers travel directly peer-to-peer between devices, and are never stored or shared.
        </FaqItem>
        <FaqItem question="Can I use this with someone else too?">
          Go for it — it&apos;s free. Each link creates its own private room, so different
          conversations stay completely separate.
        </FaqItem>
      </div>
    </details>
  )
}
