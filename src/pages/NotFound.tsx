import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-8">
      <span className="font-mono text-xs tracking-[0.12em] uppercase text-gold mb-4">404</span>
      <h1 className="font-serif font-medium text-4xl text-bone mb-4">That page does not exist.</h1>
      <Link to="/" className="font-mono text-xs tracking-[0.06em] uppercase text-gold-soft border-b border-gold-soft pb-0.5">
        Back to home
      </Link>
    </div>
  )
}
