import Nav from '../components/Nav'
import Footer from '../components/Footer'

const CV_PATH = '/cv/Musa_Ntuli_CV.pdf'

export default function Cv() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 max-w-5xl mx-auto px-8 pt-32 pb-20 w-full">
        <div className="flex items-baseline justify-between gap-6 flex-wrap mb-10">
          <div>
            <span className="font-mono text-xs tracking-[0.12em] uppercase text-gold">CV</span>
            <h1 className="font-serif font-medium text-[clamp(32px,4.5vw,48px)] text-bone mt-2">
              Musa Ntuli, in full
            </h1>
          </div>
          <a
            href={CV_PATH}
            download="Musa_Ntuli_CV.pdf"
            className="font-mono text-xs tracking-[0.06em] uppercase text-charcoal bg-gold-soft px-5 py-3 hover:bg-gold transition-colors"
          >
            Download PDF
          </a>
        </div>

        <div className="border border-line bg-charcoal-deep p-2 sm:p-4">
          <object
            data={CV_PATH}
            type="application/pdf"
            className="w-full h-[75vh] min-h-[520px]"
            aria-label="Musa Ntuli CV"
          >
            <div className="p-10 text-center font-sans text-bone-dim">
              Your browser cannot preview PDFs inline.{' '}
              <a href={CV_PATH} download className="text-gold-soft border-b border-gold-soft">
                Download the CV
              </a>{' '}
              instead.
            </div>
          </object>
        </div>

        <p className="font-mono text-xs text-muted mt-6">
          This file is served as a static asset. To let the admin panel replace it without a redeploy, wire the
          CV box up to Firebase Storage instead, see the README.
        </p>
      </main>
      <Footer />
    </div>
  )
}
