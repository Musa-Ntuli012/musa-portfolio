import { useState, type FormEvent } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function AdminLogin() {
  const { user, login, loading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  if (!loading && user) {
    return <Navigate to="/admin" replace />
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await login(email, password)
      navigate('/admin')
    } catch {
      // Generic message to the user. Firebase's own error detail stays
      // in the console for debugging, never surfaced to the client.
      setError('Could not sign in. Check the email and password and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <form onSubmit={handleSubmit} className="w-full max-w-sm border border-line p-10 bg-charcoal-deep">
        <span className="font-mono text-xs tracking-[0.12em] uppercase text-gold">Admin</span>
        <h1 className="font-serif font-medium text-3xl text-bone mt-2 mb-8">Sign in</h1>

        <label className="block font-mono text-[11px] tracking-[0.06em] uppercase text-muted mb-2">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-charcoal border border-line px-4 py-3 mb-5 text-bone font-mono text-sm focus:border-gold outline-none"
          autoComplete="username"
        />

        <label className="block font-mono text-[11px] tracking-[0.06em] uppercase text-muted mb-2">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-charcoal border border-line px-4 py-3 mb-6 text-bone font-mono text-sm focus:border-gold outline-none"
          autoComplete="current-password"
        />

        {error && <p className="font-mono text-xs text-red-400 mb-5">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full font-mono text-xs tracking-[0.06em] uppercase text-charcoal bg-gold-soft px-5 py-3 hover:bg-gold transition-colors disabled:opacity-50"
        >
          {submitting ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  )
}
