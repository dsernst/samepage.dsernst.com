const faqToggleSummary =
  '[&>summary::-webkit-details-marker]:hidden [&>summary]:flex [&>summary]:cursor-pointer [&>summary]:list-none [&>summary]:items-center [&>summary]:justify-between [&>summary]:select-none [&>summary::after]:font-light [&>summary::after]:text-muted [&>summary::after]:content-["+"] open:[&>summary::after]:content-["×"]'

function FaqItem({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <details
      className={`border-t border-border py-3 ${faqToggleSummary} [&>summary]:text-[13px] [&>summary]:font-medium [&>summary]:text-ink`}
    >
      <summary>{question}</summary>
      <div className="mt-2.5 space-y-2 text-[13px] leading-[1.7] text-[#3a3830] [&_strong]:font-medium [&_strong]:text-ink">
        {children}
      </div>
    </details>
  )
}

export function HowItWorks() {
  return (
    <details
      className="group mb-10 w-full rounded-[3px] border border-border bg-[#efe9df] open:[&>summary]:border-b open:[&>summary]:border-border open:[&>summary]:bg-[#e8e2d8]"
    >
      <summary className="flex cursor-pointer list-none items-center px-4 py-3.5 font-medium select-none hover:bg-[#e8e2d8] [&::-webkit-details-marker]:hidden">
        <span className="mr-2 inline-block text-xs text-muted transition-transform duration-200 group-open:rotate-90">
          ▶
        </span>
        <span className="text-[13px] tracking-[0.06em] text-body uppercase">How it works</span>
      </summary>
      <div className="px-4 pb-2">
        <FaqItem question="Why rate across multiple dimensions?">
          Real connections are multidimensional. Two people can be great intellectual sparring
          partners but terrible gym buddies. Or deeply emotionally close but professionally
          incompatible. These seven cover common ways people want to spend time and life together —
          keeping them separate lets you see <strong>where</strong> the overlap actually lives, not
          just whether there&apos;s any.
        </FaqItem>
        <FaqItem question="Why does the list always include all seven?">
          The fixed list is the whole point.{' '}
          <strong>Please don&apos;t assume any category is specific to you.</strong> Everyone gets
          the same seven.
        </FaqItem>
        <FaqItem question="What if I'm not interested in a category right now? Does a low score mean I don't think much of them?">
          <p>
            Not necessarily. Each score is your <strong>actual interest</strong> — how excited you
            are about them in that dimension,{' '}
            <i>
              <strong>combined</strong>
            </i>{' '}
            with whether you have room for it in your life right now.
          </p>
          <p>
            Someone might be an ideal professional partner, but if you&apos;re already stretched too
            thin, an honest score is a 0 or 1. Someone might be very attractive, but if you&apos;re
            in a committed relationship, saying &quot;0 - Not interested&quot; isn&apos;t a verdict
            on their qualities — it&apos;s just where the two of you match today.
          </p>
          <p>This also helps set more realistic expectations.</p>
        </FaqItem>
        <FaqItem question="How does the reveal work?">
          For each category, only the <strong>lower</strong> of your two scores is shown — to both
          of you. If you&apos;re a 7 and they&apos;re a 2, you both see 2. Your high scores are
          always private. There&apos;s genuinely no benefit to <em>playing it cool</em> &amp;
          understating your interest — honesty is the dominant strategy.
        </FaqItem>
        <FaqItem question="Is anything stored?">
          Answers travel directly peer-to-peer between devices and are never stored or shared. The
          code&apos;s{' '}
          <a
            href="https://github.com/dsernst/samepage.dsernst.com"
            target="_blank"
            className="text-brand no-underline hover:underline font-medium"
            rel="noopener noreferrer"
          >
            open source
          </a>
          , so you don&apos;t have to take our word for it.
        </FaqItem>
        <FaqItem question="Can I use this with someone else too?">
          Go for it — it&apos;s free. Each link creates its own private room, so different
          conversations stay completely separate.
        </FaqItem>
      </div>
    </details>
  )
}
