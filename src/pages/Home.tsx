import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import ProjectIndex from '../components/ProjectIndex'
import Education from '../components/Education'
import KyvrexBand from '../components/KyvrexBand'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Nav />
      <main className="max-w-5xl mx-auto px-8">
        <Hero />
        <About />
        <ProjectIndex />
        <Education />
      </main>
      <KyvrexBand />
      <main className="max-w-5xl mx-auto px-8">
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
