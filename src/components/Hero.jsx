import { stats, socials } from '../data'

export default function Hero() {
  return (
    <section id="home" className="container pt-5 pb-5 mt-4" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
      <div className="row align-items-center g-5 w-100">
        <div className="col-lg-7">
          <div className="d-inline-flex align-items-center glass px-3 py-2 mb-4" style={{ borderRadius: '50px' }}>
            <span className="badge bg-success me-2 rounded-circle p-1" style={{ width: '10px', height: '10px' }}>&nbsp;</span>
            <span className="text-light fw-medium" style={{ fontSize: '0.9rem' }}>Available for work</span>
          </div>
          <h1 className="display-2 fw-bolder text-gradient mb-3" style={{ letterSpacing: '-0.05em' }}>
            {socials.name}
          </h1>
          <h2 className="fs-3 text-white-50 mb-4 fw-light">
            {socials.title}
          </h2>
          <p className="text-secondary mb-5 fs-5" style={{ maxWidth: '520px', lineHeight: '1.7' }}>
            {socials.bio}
          </p>
          <div className="d-flex gap-3 flex-wrap">
            <a href="#projects" className="btn btn-gradient px-4 py-3">
              Explore My Work <i className="bi bi-arrow-right ms-2"></i>
            </a>
            <a href="#contact" className="btn btn-outline-light-custom px-4 py-3">
              <i className="bi bi-chat-dots me-2"></i>Let's Talk
            </a>
          </div>
        </div>
        <div className="col-lg-5 d-flex justify-content-center position-relative">
          <div className="position-absolute top-50 start-50 translate-middle bg-purple" style={{ width: '300px', height: '300px', background: 'var(--purple)', filter: 'blur(100px)', opacity: '0.2', zIndex: '-1' }}></div>
          <div className="photo-frame">
            <img src={socials.photo} alt={socials.name} onError={(e) => { e.target.src = 'https://via.placeholder.com/340x340/18181b/a855f7?text=OM' }} />
          </div>
        </div>
      </div>
      
      <div className="row g-4 mt-5 w-100">
        {stats.map((s) => (
          <div className="col-6 col-md-3" key={s.label}>
            <div className="glass p-4 text-center h-100">
              <div className="stat-number">{s.number}</div>
              <div className="text-secondary small fw-medium text-uppercase tracking-wider">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
