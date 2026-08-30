export default function Education() {
  const rows = [
    {
      year: 'Graduated',
      title: 'BCAD, Computer Science and Information Technology',
      sub: 'Varsity College Pretoria · Application development specialisation · Graduated with distinction · 78.5% cumulative average · Final year project NexusPay, team lead',
    },
    {
      year: 'Certified',
      title: 'Foundational C#',
      sub: 'Microsoft Certification, plus coursework through freeCodeCamp',
    },
    {
      year: 'Matric',
      title: 'National Senior Certificate',
      sub: 'Curro Academy, Pretoria',
    },
    {
      year: '2026',
      title: 'Founder, Kyvrex (Pty) Ltd',
      sub: 'Solo software studio, Pretoria, South Africa',
    },
  ]

  return (
    <section id="education" className="py-28 border-t border-line">
      <div className="mb-14">
        <span className="font-mono text-xs tracking-[0.12em] uppercase text-gold">03 / Education</span>
        <h2 className="font-serif font-medium text-[clamp(32px,4.5vw,48px)] text-bone mt-2">Grounding</h2>
      </div>
      <div className="flex flex-col">
        {rows.map((row, i) => (
          <div
            key={row.title}
            className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-6 py-6 border-b border-line ${
              i === 0 ? 'border-t' : ''
            }`}
          >
            <span className="font-mono text-xs text-gold">{row.year}</span>
            <div>
              <div className="font-serif text-xl text-bone font-medium">{row.title}</div>
              <p className="font-sans text-[13.5px] text-muted mt-1.5">{row.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
