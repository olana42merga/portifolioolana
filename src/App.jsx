import ParticleBackground from './ParticleBackground'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { socials } from './data'
const links = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
export default function App() {
  return (
    <>
      <ParticleBackground />
      <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-gradient fs-4" href="#home">{socials.brand}</a>
          <button className="navbar-toggler border-0 text-light" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
            <i className="bi bi-list fs-2"></i>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              {links.map((l) => (
                <li className="nav-item" key={l.href}><a className="nav-link text-light" href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="container py-4 text-center border-top border-secondary-subtle mt-5">
        <div className="mb-3">
          <a href={`mailto:${socials.email}`} className="text-decoration-none text-light me-3"><i className="bi bi-envelope me-1"></i>Email</a>
          <a href={socials.github} target="_blank" rel="noreferrer" className="text-decoration-none text-light me-3"><i className="bi bi-github me-1"></i>GitHub</a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="text-decoration-none text-light"><i className="bi bi-linkedin me-1"></i>LinkedIn</a>
        </div>
        <p className="text-secondary small mb-1">© 2026 {socials.name}. All rights reserved.</p>
        <p className="text-secondary small"><i className="bi bi-heart-fill text-danger"></i> Made in {socials.location}</p>
      </footer>
    </>
  )
}
