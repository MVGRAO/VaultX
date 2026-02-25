export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-tag">About Us</div>
        <div className="about-grid">
          <div className="about-left">
            <h2 className="section-title">
              We Build Systems
              <br />
              <span className="accent">That Think</span>
            </h2>
            <p className="about-text">
              VaultX Techolution is a technology-driven company focused on
              building intelligent software solutions. We specialize in AI
              integration, backend infrastructure design, and scalable SaaS
              architecture.
            </p>
            <p className="about-text">
              Our mission is to empower businesses with automation, performance
              optimization, and data-driven systems that accelerate innovation
              and operational efficiency.
            </p>
            <div className="about-mission">
              <div className="mission-icon">◈</div>
              <div>
                <strong>Our Mission</strong>
                <p>
                  Transform how businesses operate through intelligent,
                  future-ready technology.
                </p>
              </div>
            </div>
          </div>
          <div className="about-right">
            <div className="about-visual">
              <div className="av-card av-card-1">
                <div className="av-icon">⚡</div>
                <span>Performance Optimized</span>
              </div>
              <div className="av-card av-card-2">
                <div className="av-icon">🔐</div>
                <span>Security First</span>
              </div>
              <div className="av-card av-card-3">
                <div className="av-icon">🤖</div>
                <span>AI Integrated</span>
              </div>
              <div className="av-card av-card-4">
                <div className="av-icon">☁️</div>
                <span>Cloud Native</span>
              </div>
              <div className="av-center">
                <span className="av-logo">VX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
