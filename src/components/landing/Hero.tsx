export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="grid-overlay"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          AI-Powered Software Development
        </div>
        <h1 className="hero-headline">
          Engineering
          <br />
          <span className="headline-accent">Intelligent Systems</span>
          <br />
          for the Future
        </h1>
        <p className="hero-sub">
          VaultX Techolution builds AI-driven software, scalable backend systems,
          and automation platforms designed for performance, security, and
          growth.
        </p>
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
          <a href="#services" className="btn btn-ghost">
            Explore Our Services
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">AI</span>
            <span className="stat-label">First Approach</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">SaaS</span>
            <span className="stat-label">Ready Architecture</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">∞</span>
            <span className="stat-label">Scalable by Design</span>
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
