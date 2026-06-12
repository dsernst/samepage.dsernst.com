import { AxisSliders } from '@/components/AxisSliders'
import { HowItWorks } from '@/components/HowItWorks'
import { ShareButton } from '@/components/ShareButton'

export default function Home() {
  return (
    <>
      <header className="mx-auto max-w-[600px] px-7 pt-5">
        <div className="relative mb-10 flex justify-center py-2">
          <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-20 w-40 -translate-x-[80%] rounded-full bg-[radial-gradient(ellipse,rgba(45,90,61,0.38)_0%,transparent_70%)] blur-[32px]" />
          <div className="pointer-events-none absolute top-[5px] left-1/2 z-0 h-[70px] w-[120px] -translate-x-[10%] rounded-full bg-[radial-gradient(ellipse,rgba(196,145,74,0.32)_0%,transparent_70%)] blur-[32px]" />
          <div className="relative z-10 font-serif text-[22px] font-medium tracking-[0.01em] text-ink">
            Same<span className="font-medium text-brand">Page</span>
          </div>
        </div>
        <h1 className="mb-4 font-serif text-[clamp(24px,5vw,34px)] leading-[1.28] font-normal text-ink">
          Ever hit it off with someone but not sure what{' '}
          <span className="text-brand">
            <em>kind</em>
          </span>{' '}
          of connection you&apos;re both actually looking for?
        </h1>
        <p className="mb-7 max-w-[460px] text-[15px] leading-[1.68] text-body">
          Rate your interest across seven dimensions.{' '}
          <strong className="font-medium text-ink">Only mutual interest gets revealed</strong> — and
          only at the level of whoever is less interested. So there&apos;s no risk in being honest.
        </p>
      </header>

      <main className="mx-auto max-w-[600px] px-7">
        <ShareButton />
        <HowItWorks />
        <AxisSliders />
      </main>

      <footer className="mx-auto mt-14 max-w-[600px] border-t border-border px-7 py-14 text-center text-[11px] text-muted">
        made by{' '}
        <a
          href="https://dsernst.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand no-underline hover:underline"
        >
          David
        </a>
      </footer>
    </>
  )
}
