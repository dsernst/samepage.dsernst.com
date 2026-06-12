import { AxisSliders } from '@/components/AxisSliders';
import { HowItWorks } from '@/components/HowItWorks';
import { ShareButton } from '@/components/ShareButton';

export default function Home() {
  return (
    <>
      <header>
        <div className="wordmark-wrap">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="wordmark">Same<span>Page</span></div>
        </div>
        <div className="intro">
          <h1>
            Ever hit it off with someone but not sure what{' '}
            <span className="highlight"><em>kind</em></span> of connection you&apos;re both actually looking for?
          </h1>
          <p>
            Rate your interest across seven dimensions. <strong>Only mutual interest gets revealed</strong> — and only at the level of whoever is less interested. So there&apos;s no risk in being honest.
          </p>
        </div>
      </header>

      <main>
        <ShareButton />
        <HowItWorks />
        <AxisSliders />
      </main>

      <footer>
        made by <a href="https://dsernst.com" target="_blank" rel="noopener noreferrer">David</a>
      </footer>
    </>
  );
}
