import { ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { seedProjects } from '../lib/seedProjects'
import type { Project } from '../lib/types'

export default function ProjectIndex() {
  const [projects, setProjects] = useState<Project[]>(seedProjects)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const q = query(collection(db, 'projects'), orderBy('order', 'asc'))
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        if (snapshot.empty) {
          // Firestore has no projects yet (fresh setup) — keep showing
          // the seed list so the page is never empty.
          setProjects(seedProjects)
        } else {
          setProjects(snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Project)))
        }
        setLoaded(true)
      },
      () => {
        // Read failed (offline, rules issue, etc). Fall back to seed
        // data rather than showing a broken section.
        setProjects(seedProjects)
        setLoaded(true)
      },
    )
    return unsubscribe
  }, [])

  return (
    <section id="work" className="py-28 border-t border-line">
      <div className="flex items-baseline justify-between gap-6 flex-wrap mb-14">
        <div>
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-gold">02 / Work</span>
          <h2 className="font-serif font-medium text-[clamp(32px,4.5vw,48px)] text-bone mt-2">Project index</h2>
        </div>
        <p className="font-mono text-xs text-muted max-w-[260px] text-right">A working list, not a highlight reel.</p>
      </div>

      <p className="font-mono text-xs text-muted mb-6">
        <span className="text-gold">musa@kyvrex</span>:~/projects$ ls -l
        {!loaded && <span className="ml-2 opacity-60">loading…</span>}
      </p>

      <div className="border-t border-line">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="grid grid-cols-[32px_1fr] sm:grid-cols-[48px_1fr_auto] gap-6 items-start py-6 border-b border-line hover:bg-gold/[0.045] transition-colors group"
          >
            <span className="font-mono text-[13px] text-muted pt-1 group-hover:text-gold transition-colors">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0">
              <div className="font-serif text-[26px] font-medium text-bone flex items-center gap-3 flex-wrap">
                {project.name}
                <span
                  className={`font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-[3px] border ${
                    project.status === 'Live'
                      ? 'text-gold-soft border-gold-soft'
                      : 'text-muted border-line'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="font-sans text-[14.5px] font-light text-bone-dim mt-2.5 max-w-xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10.5px] text-muted border border-line px-2.5 py-[3px]">
                    {tag}
                  </span>
                ))}
              </div>
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3.5 font-mono text-[11px] text-gold-soft border-b border-gold-soft pb-px"
                >
                  View repository
                  <ExternalLink size={11} strokeWidth={1.5} />
                </a>
              )}
            </div>
            <span className="col-span-2 sm:col-span-1 font-mono text-[11px] tracking-[0.05em] uppercase text-muted text-left sm:text-right pt-1 whitespace-nowrap">
              {project.role}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
