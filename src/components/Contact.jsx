import { useState } from 'react'
import { socials } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', title: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${socials.email}?subject=${encodeURIComponent(form.title || 'New Project Inquiry')}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="container py-5 mt-5">
      <div className="glass p-4 p-md-5">
        <h2 className="section-title text-gradient"><i className="bi bi-hand-thumbs-up me-2"></i>Let's Work Together</h2>
        <div className="row g-4">
          <div className="col-lg-5">
            <p className="text-secondary mb-4">Have a project in mind? Send a message and let's talk about it.</p>
            <div className="mb-3"><i className="bi bi-envelope text-gradient me-2"></i><a href={`mailto:${socials.email}`} className="text-decoration-none text-light">{socials.email}</a></div>
            <div className="mb-3"><i className="bi bi-telephone text-gradient me-2"></i><span>{socials.phone}</span></div>
            <div className="mb-3"><i className="bi bi-geo-alt text-gradient me-2"></i><span>{socials.location}</span></div>
          </div>
          <div className="col-lg-7">
            {sent ? (
              <div className="alert alert-success">✅ Your email client should open shortly. If not, email me directly at <a href={`mailto:${socials.email}`}>{socials.email}</a>.</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6"><input className="form-control bg-dark text-light border-secondary" placeholder="Full name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
                  <div className="col-md-6"><input type="email" className="form-control bg-dark text-light border-secondary" placeholder="your@email.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
                  <div className="col-12"><input className="form-control bg-dark text-light border-secondary" placeholder="Project title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
                  <div className="col-12"><textarea className="form-control bg-dark text-light border-secondary" rows="4" placeholder="Tell me about your project goals and requirements…" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea></div>
                  <div className="col-12"><button type="submit" className="btn btn-gradient w-100"><i className="bi bi-send me-2"></i>Send Message</button></div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
