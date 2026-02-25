export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-tag">What We Do</div>
        <h2 className="section-title center">
          Our Core <span className="accent">Services</span>
        </h2>
        <p className="section-sub center">
          End-to-end technology solutions engineered for scale, speed, and
          intelligence.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-num">01</div>
            <div className="service-icon-wrap">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3>AI & Machine Learning Solutions</h3>
            <p>
              Custom AI integrations, automation systems, and intelligent
              workflows tailored to your business logic.
            </p>
            <div className="service-tags">
              <span>LLM Integration</span>
              <span>ML Pipelines</span>
              <span>Automation</span>
            </div>
          </div>
          <div className="service-card">
            <div className="service-num">02</div>
            <div className="service-icon-wrap">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <h3>Backend Architecture & API Development</h3>
            <p>
              Scalable FastAPI and cloud-native backend systems built for
              reliability, speed, and long-term maintainability.
            </p>
            <div className="service-tags">
              <span>FastAPI</span>
              <span>Cloud Native</span>
              <span>REST / GraphQL</span>
            </div>
          </div>
          <div className="service-card">
            <div className="service-num">03</div>
            <div className="service-icon-wrap">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            </div>
            <h3>SaaS Product Development</h3>
            <p>
              End-to-end SaaS platform development — from architecture decisions
              to deployment and beyond.
            </p>
            <div className="service-tags">
              <span>Multi-Tenant</span>
              <span>Subscriptions</span>
              <span>DevOps</span>
            </div>
          </div>
          <div className="service-card">
            <div className="service-num">04</div>
            <div className="service-icon-wrap">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3>Process Automation & Optimization</h3>
            <p>
              Intelligent automation systems to streamline business operations
              and eliminate repetitive overhead.
            </p>
            <div className="service-tags">
              <span>Workflow Automation</span>
              <span>RPA</span>
              <span>Integrations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
