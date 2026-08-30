import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/85 backdrop-blur-sm border-b border-line">
      <div className="max-w-5xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link to="/" className="font-mono text-[13px] tracking-[0.12em] text-gold-soft">
          MUSA · KYVREX
        </Link>
        <nav className="hidden sm:flex gap-8 font-mono text-xs tracking-[0.08em] uppercase">
          <a href="/#about" className="text-muted hover:text-bone transition-colors">About</a>
          <a href="/#work" className="text-muted hover:text-bone transition-colors">Work</a>
          <Link to="/cv" className="text-muted hover:text-bone transition-colors">CV</Link>
          <a href="/#contact" className="text-muted hover:text-bone transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  )
}
