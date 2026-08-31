import { useSiteContent } from '../lib/useSiteContent'

export default function About() {
  const { aboutBody } = useSiteContent()
  const paragraphs = aboutBody.split('\n\n').filter(Boolean)

  return (
    <section id="about" className="py-28 border-t border-line">
      <div className="flex items-baseline justify-between gap-6 flex-wrap mb-14">
        <div>
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-gold">01 / About</span>
          <h2 className="font-serif font-medium text-[clamp(32px,4.5vw,48px)] text-bone mt-2">The short version</h2>
        </div>
        <p className="font-mono text-xs text-muted max-w-[260px] text-right">
          Every project below was built by hand, feature by feature.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16">
        <div className="flex flex-col gap-7">
          <div className="border-l border-line pl-5">
            <div className="font-serif text-[34px] text-gold-soft font-medium">78.5%</div>
            <div className="font-mono text-[11px] tracking-[0.06em] uppercase text-muted mt-1">BCAD cumulative average</div>
          </div>
          <div className="border-l border-line pl-5">
            <div className="font-serif text-[34px] text-gold-soft font-medium">7</div>
            <div className="font-mono text-[11px] tracking-[0.06em] uppercase text-muted mt-1">Shipped projects</div>
          </div>
          <div className="border-l border-line pl-5">
            <div className="font-serif text-[34px] text-gold-soft font-medium">1</div>
            <div className="font-mono text-[11px] tracking-[0.06em] uppercase text-muted mt-1">Studio founded</div>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-[17px] text-bone-dim font-light max-w-xl">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
