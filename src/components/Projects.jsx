import { useState } from 'react'
import { projects } from '../data'

export default function Projects() {
  const [active, setActive] = useState(null)

  // Helper to color the status badge correctly
  const getStatusStyle = (status) => {
    if (status === 'Completed') return { background: 'rgba(16,185,129,0.15)', color: '#10b981', border: '1px solid rgba(16,185,129,0.3)' };
    if (status === 'In Development') return { background: 'rgba(245,158,11,0.15)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)' };
    return { background: 'rgba(6,182,212,0.15)', color: '#06b6d4', border: '1px solid rgba(6,182,212,0.3)' };
  };

  return (
    <section id="projects" className="container py-5 my-5">
      <div className="text-center mb-5">
        <h2 className="section-title text-gradient mb-2">Featured Projects</h2>
        <p className="text-secondary fs-5">Selected works where design meets engineering.</p>
      </div>
      
      <div className="row g-4">
        {projects.map((p) => (
          <div className="col-md-6 col-lg-4" key={p.id}>
            <div className="glass project-card" onClick={() => setActive(p)} role="button">
              
              {/* Image or Fallback Text */}
              <div className="position-relative overflow-hidden" style={{ height: '200px', background: 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(6,182,212,0.1))', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 className="position-absolute top-50 start-50 translate-middle text-center w-100 px-4 text-gradient fw-bold m-0" style={{ fontSize: '1.5rem' }}>
                  {p.title}
                </h3>
                <img 
                  src={p.image} 
                  alt={p.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 1, transition: 'transform 0.5s ease' }} 
                  onError={(e) => { e.target.style.opacity = '0'; }} 
                />
              </div>

              <div className="p-4 d-flex flex-column h-100" style={{ minHeight: '220px' }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-secondary small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>{p.category}</span>
                  <span className="badge rounded-pill" style={getStatusStyle(p.status)}>{p.status}</span>
                </div>
                <h4 className="mb-3 fw-bold text-white">{p.title}</h4>
                <p className="text-secondary small mb-4" style={{ lineHeight: '1.6' }}>{p.description.slice(0, 85)}…</p>
                <div className="d-flex flex-wrap gap-1 mt-auto">
                  {p.tech.slice(0, 3).map((t) => (<span className="tech-tag" key={t}>{t}</span>))}
                  {p.tech.length > 3 && <span className="tech-tag">+{p.tech.length - 3}</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div className="modal fade show d-block" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(5px)' }} onClick={() => setActive(null)}>
          <div className="modal-dialog modal-xl modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content overflow-hidden">
              <div className="row g-0">
                <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(6,182,212,0.1))', minHeight: '400px' }}>
                   <h2 className="text-gradient text-center px-5 fw-bold">{active.title}</h2>
                   <img src={active.image} alt={active.title} className="w-100 h-100 object-fit-cover position-absolute top-0 start-0" style={{ zIndex: 1 }} onError={(e) => { e.target.style.opacity = '0' }} />
                </div>
                <div className="col-lg-6 p-4 p-md-5 position-relative" style={{ zIndex: 2, background: '#18181b' }}>
                  <button className="btn-close btn-close-white position-absolute top-0 end-0 m-4" onClick={() => setActive(null)}></button>
                  <span className="tech-tag mb-3">{active.category}</span>
                  <h3 className="text-gradient fw-bold mb-3">{active.title}</h3>
                  <div className="d-flex gap-4 text-secondary small mb-4 border-bottom border-secondary pb-3 flex-wrap">
                    <div><i className="bi bi-calendar me-2 text-purple"></i>{active.year}</div>
                    <div><i className="bi bi-clock me-2 text-purple"></i>{active.duration}</div>
                    <div><i className="bi bi-person me-2 text-purple"></i>{active.role}</div>
                    <div><i className="bi bi-activity me-2 text-purple"></i>{active.status}</div>
                  </div>
                  <p className="text-light mb-4" style={{ lineHeight: '1.8' }}>{active.description}</p>
                  <h6 className="text-uppercase text-secondary fw-bold mb-3" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>Technologies</h6>
                  <div>{active.tech.map((t) => (<span className="tech-tag" key={t}>{t}</span>))}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
