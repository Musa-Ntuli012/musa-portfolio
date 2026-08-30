export default function About() {
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
          <p>
            I am a <strong className="text-bone font-medium">full stack software developer</strong> who builds
            systems that hold up under real use, not just in a demo. I work comfortably across{' '}
            <strong className="text-bone font-medium">C# / ASP.NET Core</strong> and{' '}
            <strong className="text-bone font-medium">JavaScript / TypeScript</strong>, from relational schemas
            and secure APIs through to the interface on top.
          </p>
          <p>
            I graduated with distinction from Varsity College Pretoria with a{' '}
            <strong className="text-bone font-medium">BCAD in Computer Science and Information Technology</strong>,
            application development specialisation, and hold a{' '}
            <strong className="text-bone font-medium">Foundational C# Microsoft Certification</strong>.
          </p>
          <p>
            In 2026 I registered <strong className="text-bone font-medium">Kyvrex</strong>, a solo software
            studio based in Pretoria, and I am currently looking for a team where I can keep building real,
            reliable software.
          </p>
        </div>
      </div>
    </section>
  )
}
