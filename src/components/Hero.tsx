export default function Hero() {
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
      <p className="mt-7 font-mono text-[15px] text-muted max-w-xl">
        Full stack developer across <strong className="text-bone-dim font-normal">C# / ASP.NET Core</strong> and{' '}
        <strong className="text-bone-dim font-normal">JavaScript / TypeScript</strong>, and founder of Kyvrex, a
        one person software studio. I own a feature from database schema to the interface someone actually
        touches, with security and edge cases considered first.
      </p>
      <div className="mt-16 flex items-center gap-3">
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted">Scroll</span>
      </div>
    </section>
  )
}
