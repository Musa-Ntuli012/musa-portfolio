import { Link } from 'react-router-dom'
import { Lock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 flex justify-between items-center flex-wrap gap-3 font-mono text-[11px] text-muted tracking-[0.04em]">
      <span>© 2026 Musa Ntuli. Built and maintained by Kyvrex.</span>
      <div className="flex items-center gap-5">
        <span>Designed with intent, not a template.</span>
        <Link to="/admin/login" className="inline-flex items-center gap-1.5 hover:text-bone transition-colors">
          <Lock size={11} strokeWidth={1.5} />
          Admin
        </Link>
      </div>
    </footer>
  )
}
