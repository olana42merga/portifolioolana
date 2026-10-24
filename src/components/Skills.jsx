import { skills, journey } from '../data'

export default function Skills() {
  // Function to dynamically pick the right Bootstrap Icon based on the category name
  const getIcon = (category) => {
    switch(category) {
      case 'Frontend': return 'layout-text-window-reverse';
      case 'Backend': return 'server';
      case 'Mobile': return 'phone';
      case 'Database': return 'database';
      case 'Design': return 'palette';
      case 'Tools': return 'tools';
      case 'Languages': return 'code-slash';
      default: return 'star';
    }
  };

  return (
    <section id="skills" className="container py-5 my-5">
      <div className="text-center mb-5">
        <h2 className="section-title text-gradient mb-2">My Arsenal</h2>
        <p className="text-secondary fs-5">The tools and technologies I use to build and create.</p>
      </div>

      <div className="row g-4 mb-5 pb-5">
        {Object.entries(skills).map(([group, items], index) => (
          <div className="col-md-6 col-lg-4" key={group}>
            <div className="glass p-4 h-100">
              <h5 className="text-white fw-bold mb-4 border-bottom border-secondary pb-3">
                <i className={`bi bi-${getIcon(group)} text-purple me-2`}></i>
                {group}
              </h5>
              <div>
                {items.map((s) => (
                  <span className="tech-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-lg-8">
          <h3 className="text-gradient fw-bold mb-5 text-center">Career Journey</h3>
          <div className="ps-3">
            {journey.map((j) => (
              <div className="timeline-item" key={j.year}>
                <div className="d-flex align-items-center mb-1">
                  <span className="badge bg-purple me-3 px-3 py-2 rounded-pill" style={{ background: 'rgba(168,85,247,0.2)', color: 'var(--purple)' }}>{j.year}</span>
                </div>
                <h5 className="text-light fw-medium">{j.text}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
