import { Mail, Phone, Github, Linkedin } from 'lucide-react'
import { useSiteContent } from '../lib/useSiteContent'

export default function Contact() {
  const { contactLead } = useSiteContent()
  const cells = [
    { label: 'Email', value: 'musantuli004@gmail.com', href: 'mailto:musantuli004@gmail.com', Icon: Mail },
    { label: 'Phone', value: '067 877 1359', href: 'tel:+27678771359', Icon: Phone },
    { label: 'GitHub', value: 'github.com/Musa-Ntuli012', href: 'https://github.com/Musa-Ntuli012', Icon: Github },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/musa-ntuli',
      href: 'https://linkedin.com/in/musa-ntuli-7847a9269',
      Icon: Linkedin,
    },
  ]

  return (
    <section id="contact" className="py-28 border-t border-line">
      <div className="mb-6">
        <span className="font-mono text-xs tracking-[0.12em] uppercase text-gold">04 / Contact</span>
        <h2 className="font-serif font-medium text-[clamp(32px,4.5vw,48px)] text-bone mt-2">Get in touch</h2>
      </div>
      <p className="text-lg text-bone-dim max-w-xl mb-12 font-light">{contactLead}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line">
        {cells.map((cell) => (
          <div key={cell.label} className="bg-charcoal p-8">
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] uppercase text-muted mb-2.5">
              <cell.Icon size={13} strokeWidth={1.5} />
              {cell.label}
            </div>
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
