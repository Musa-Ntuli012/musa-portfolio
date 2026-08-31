import { useSiteContent } from '../lib/useSiteContent'

export default function Hero() {
  const { heroTagline } = useSiteContent()

  return (
    <section className="min-h-screen flex flex-col justify-center pt-32 pb-20">
      <p className="font-mono text-xs tracking-[0.18em] uppercase text-gold mb-7 flex items-center">
        <span className="inline-block w-6 h-px bg-gold mr-3" />
        Full Stack Software Developer · Pretoria, South Africa
      </p>
      <h1 className="font-serif font-medium text-[clamp(48px,10vw,124px)] leading-[0.96] tracking-tight text-bone">
        Musa Ntuli<br />
        <em className="italic text-gold-soft font-normal">builds systems.</em>
      </h1>
      <p className="mt-7 font-mono text-[15px] text-muted max-w-xl">{heroTagline}</p>
      <div className="mt-16 flex items-center gap-3">
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted">Scroll</span>
      </div>
    </section>
  )
}
