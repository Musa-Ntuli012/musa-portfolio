import { useEffect, useState, type FormEvent } from 'react'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { db } from '../lib/firebase'
import { useAuth } from '../context/AuthContext'
import { seedProjects } from '../lib/seedProjects'
import type { Project, ProjectRole } from '../lib/types'

const emptyForm = {
  name: '',
  description: '',
  role: 'Developer' as ProjectRole,
  status: 'Live' as Project['status'],
  tags: '',
  repoUrl: '',
  order: 1,
}

export default function AdminDashboard() {
  const { user, logout } = useAuth()
  const [projects, setProjects] = useState<Project[]>([])
  const [loaded, setLoaded] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState(emptyForm)
  const [saving, setSaving] = useState(false)
  const [notice, setNotice] = useState('')

  useEffect(() => {
    const q = query(collection(db, 'projects'), orderBy('order', 'asc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setProjects(snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Project)))
      setLoaded(true)
    })
    return unsubscribe
  }, [])

  function startEdit(project: Project) {
    setEditingId(project.id)
    setForm({
      name: project.name,
      description: project.description,
      role: project.role,
      status: project.status,
      tags: project.tags.join(', '),
      repoUrl: project.repoUrl ?? '',
      order: project.order,
    })
  }

  function resetForm() {
    setEditingId(null)
    setForm({ ...emptyForm, order: projects.length + 1 })
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSaving(true)
    setNotice('')

    // Basic client side validation. Firestore rules are the real
    // enforcement boundary, this just avoids obviously bad writes.
    const trimmedName = form.name.trim()
    if (!trimmedName || !form.description.trim()) {
      setNotice('Name and description are required.')
      setSaving(false)
      return
    }

    const payload = {
      name: trimmedName,
      description: form.description.trim(),
      role: form.role,
      status: form.status,
      tags: form.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      repoUrl: form.repoUrl.trim() || null,
      order: Number(form.order) || projects.length + 1,
    }

    try {
      if (editingId) {
        await updateDoc(doc(db, 'projects', editingId), payload)
        setNotice('Project updated.')
      } else {
        await addDoc(collection(db, 'projects'), payload)
        setNotice('Project added.')
      }
      resetForm()
    } catch {
      setNotice('Could not save. Check your connection and Firestore rules.')
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this project? This cannot be undone.')) return
    await deleteDoc(doc(db, 'projects', id))
    if (editingId === id) resetForm()
  }

  async function handleSeed() {
    if (!confirm('Load the starter project list into Firestore? Existing projects are not removed.')) return
    for (const project of seedProjects) {
      const { id, ...rest } = project
      await setDoc(doc(db, 'projects', id), rest)
    }
    setNotice('Starter projects loaded.')
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-line px-8 py-5 flex justify-between items-center flex-wrap gap-3">
        <div>
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-gold">Admin</span>
          <h1 className="font-serif font-medium text-2xl text-bone">Projects</h1>
        </div>
        <div className="flex items-center gap-5">
          <span className="font-mono text-xs text-muted">{user?.email}</span>
          <button
            onClick={() => logout()}
            className="font-mono text-xs tracking-[0.06em] uppercase text-muted border border-line px-4 py-2 hover:text-bone hover:border-bone transition-colors"
          >
            Sign out
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-mono text-xs tracking-[0.08em] uppercase text-muted">
              {loaded ? `${projects.length} project${projects.length === 1 ? '' : 's'}` : 'Loading…'}
            </h2>
            {projects.length === 0 && loaded && (
              <button
                onClick={handleSeed}
                className="font-mono text-xs tracking-[0.06em] uppercase text-gold-soft border-b border-gold-soft pb-0.5"
              >
                Load starter projects
              </button>
            )}
          </div>

          <div className="border-t border-line">
            {projects.map((project) => (
              <div key={project.id} className="py-5 border-b border-line flex justify-between items-start gap-4">
                <div className="min-w-0">
                  <div className="font-serif text-lg text-bone">{project.name}</div>
                  <p className="font-sans text-[13px] text-muted mt-1 line-clamp-2">{project.description}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => startEdit(project)}
                    className="font-mono text-[11px] uppercase tracking-[0.05em] text-gold-soft border border-line px-3 py-2 hover:border-gold-soft transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="font-mono text-[11px] uppercase tracking-[0.05em] text-red-400 border border-line px-3 py-2 hover:border-red-400 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="border border-line p-6 h-fit sticky top-6">
          <h3 className="font-serif text-xl text-bone mb-5">{editingId ? 'Edit project' : 'Add project'}</h3>

          <label className="block font-mono text-[11px] uppercase tracking-[0.05em] text-muted mb-1.5">Name</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-charcoal border border-line px-3 py-2.5 mb-4 text-bone font-mono text-sm focus:border-gold outline-none"
          />

          <label className="block font-mono text-[11px] uppercase tracking-[0.05em] text-muted mb-1.5">Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={4}
            className="w-full bg-charcoal border border-line px-3 py-2.5 mb-4 text-bone font-sans text-sm focus:border-gold outline-none"
          />

          <label className="block font-mono text-[11px] uppercase tracking-[0.05em] text-muted mb-1.5">Role</label>
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value as ProjectRole })}
            className="w-full bg-charcoal border border-line px-3 py-2.5 mb-4 text-bone font-mono text-sm focus:border-gold outline-none"
          >
            <option>Lead developer</option>
            <option>Team lead</option>
            <option>Developer</option>
            <option>Contributor</option>
          </select>

          <label className="block font-mono text-[11px] uppercase tracking-[0.05em] text-muted mb-1.5">Status</label>
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value as Project['status'] })}
            className="w-full bg-charcoal border border-line px-3 py-2.5 mb-4 text-bone font-mono text-sm focus:border-gold outline-none"
          >
            <option>Live</option>
            <option>In progress</option>
            <option>Archived</option>
          </select>

          <label className="block font-mono text-[11px] uppercase tracking-[0.05em] text-muted mb-1.5">
            Tags, comma separated
          </label>
          <input
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            className="w-full bg-charcoal border border-line px-3 py-2.5 mb-4 text-bone font-mono text-sm focus:border-gold outline-none"
          />

          <label className="block font-mono text-[11px] uppercase tracking-[0.05em] text-muted mb-1.5">
            Repository URL (optional)
          </label>
          <input
            value={form.repoUrl}
            onChange={(e) => setForm({ ...form, repoUrl: e.target.value })}
            className="w-full bg-charcoal border border-line px-3 py-2.5 mb-4 text-bone font-mono text-sm focus:border-gold outline-none"
          />

          <label className="block font-mono text-[11px] uppercase tracking-[0.05em] text-muted mb-1.5">
            Display order
          </label>
          <input
            type="number"
            value={form.order}
            onChange={(e) => setForm({ ...form, order: Number(e.target.value) })}
            className="w-full bg-charcoal border border-line px-3 py-2.5 mb-6 text-bone font-mono text-sm focus:border-gold outline-none"
          />

          {notice && <p className="font-mono text-xs text-gold-soft mb-4">{notice}</p>}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="flex-1 font-mono text-xs tracking-[0.06em] uppercase text-charcoal bg-gold-soft px-4 py-3 hover:bg-gold transition-colors disabled:opacity-50"
            >
              {saving ? 'Saving…' : editingId ? 'Save changes' : 'Add project'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="font-mono text-xs tracking-[0.06em] uppercase text-muted border border-line px-4 py-3 hover:text-bone transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
