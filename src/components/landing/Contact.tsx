export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-left">
            <div className="section-tag">Let's Talk</div>
            <h2 className="section-title">
              Let's Build Something
              <br />
              <span className="accent">Intelligent</span>
            </h2>
            <p className="contact-desc">
              Have a project in mind? Tell us about it. We'd love to explore
              what we can build together.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">✉</div>
                <div>
                  <span className="contact-label">Email</span>
                  <a href="mailto:contact@vaultxtecholution.live">
                    contact@vaultxtecholution.live
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">◎</div>
                <div>
                  <span className="contact-label">Location</span>
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <form className="contact-form" id="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                <span className="btn-text">Send Message</span>
                <span className="btn-icon">→</span>
              </button>
              <div className="form-success" id="form-success">
                ✓ Message sent! We'll get back to you soon.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
