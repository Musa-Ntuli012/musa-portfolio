// @ts-ignore
import { Mail } from 'lucide-react'

export default function KyvrexBand() {
  return (
    <div id="kyvrex" className="border-t border-line bg-charcoal-deep py-28">
      <div className="max-w-5xl mx-auto px-8 flex justify-between items-end gap-10 flex-wrap">
        <h2 className="font-serif font-medium text-[clamp(28px,4vw,44px)] max-w-xl leading-tight">
          Client work runs through <em className="italic text-gold-soft">Kyvrex</em>, my studio.
        </h2>
        <div className="max-w-[340px]">
          <p className="text-[15px] text-muted">
            One system, every surface. If you need something built rather than someone hired, Kyvrex is where
            that conversation starts.
          </p>
          <a
            href="mailto:musantuli004@gmail.com"
            className="inline-flex items-center gap-2.5 mt-5 font-mono text-xs tracking-[0.06em] uppercase text-gold-soft border-b border-gold-soft pb-0.5"
          >
            <Mail size={13} strokeWidth={1.5} />
            Start a project
          </a>
        </div>
      </div>
    </div>
  )
}
