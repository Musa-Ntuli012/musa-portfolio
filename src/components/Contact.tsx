export default function Contact() {
  const cells = [
    { label: 'Email', value: 'musantuli004@gmail.com', href: 'mailto:musantuli004@gmail.com' },
    { label: 'Phone', value: '067 877 1359', href: 'tel:+27678771359' },
    { label: 'GitHub', value: 'github.com/Musa-Ntuli012', href: 'https://github.com/Musa-Ntuli012' },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/musa-ntuli',
      href: 'https://linkedin.com/in/musa-ntuli-7847a9269',
    },
  ]

  return (
    <section id="contact" className="py-28 border-t border-line">
      <div className="mb-6">
        <span className="font-mono text-xs tracking-[0.12em] uppercase text-gold">04 / Contact</span>
        <h2 className="font-serif font-medium text-[clamp(32px,4.5vw,48px)] text-bone mt-2">Get in touch</h2>
      </div>
      <p className="text-lg text-bone-dim max-w-xl mb-12 font-light">
        <strong className="text-bone font-medium">Open to graduate and junior developer roles.</strong> Based in
        Pretoria, happy to talk about any of the work above in more detail.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line">
        {cells.map((cell) => (
          <div key={cell.label} className="bg-charcoal p-8">
            <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted mb-2.5">{cell.label}</div>
            <a
              href={cell.href}
              target={cell.href.startsWith('http') ? '_blank' : undefined}
              rel={cell.href.startsWith('http') ? 'noreferrer' : undefined}
              className="font-mono text-base text-gold-soft break-words"
            >
              {cell.value}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
