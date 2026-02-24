"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    const toggleMenu = () => mobileMenu?.classList.toggle("open");
    const closeMenu = () => mobileMenu?.classList.remove("open");

    hamburger?.addEventListener("click", toggleMenu);
    mobileMenu?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    const reveals = document.querySelectorAll(
      ".section-tag, .section-title, .section-sub, .about-text, .about-mission, .service-card, .why-card, .contact-item, .contact-form, .contact-desc"
    );
    reveals.forEach((el) => el.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el) => observer.observe(el));

    document.querySelectorAll(".services-grid, .why-grid").forEach((grid) => {
      grid.querySelectorAll(".service-card, .why-card").forEach((card, index) => {
        (card as HTMLElement).style.transitionDelay = `${index * 0.08}s`;
      });
    });

    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    const successMsg = document.getElementById("form-success");
    const onSubmit = (event: Event) => {
      event.preventDefault();
      if (!form) {
        return;
      }

      const btn = form.querySelector("button[type=submit]") as HTMLButtonElement | null;
      const btnText = btn?.querySelector(".btn-text");

      if (btn) {
        btn.disabled = true;
      }
      if (btnText) {
        btnText.textContent = "Sending...";
      }

      window.setTimeout(() => {
        form.reset();
        if (btn) {
          btn.disabled = false;
        }
        if (btnText) {
          btnText.textContent = "Send Message";
        }
        successMsg?.classList.add("show");
        window.setTimeout(() => successMsg?.classList.remove("show"), 5000);
      }, 1200);
    };

    form?.addEventListener("submit", onSubmit);

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const onAnchorClick = (event: Event) => {
      const link = event.currentTarget as HTMLAnchorElement;
      const targetId = link.getAttribute("href");
      if (!targetId) {
        return;
      }

      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    anchorLinks.forEach((link) => link.addEventListener("click", onAnchorClick));

    return () => {
      window.removeEventListener("scroll", onScroll);
      hamburger?.removeEventListener("click", toggleMenu);
      mobileMenu?.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
      form?.removeEventListener("submit", onSubmit);
      anchorLinks.forEach((link) => link.removeEventListener("click", onAnchorClick));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-inner">
          <a href="/" className="logo">
            <span className="logo-mark">VX</span>
            <span className="logo-text">
              VaultX <span className="logo-sub">Techolution</span>
            </span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#why">Why Us</a>
            <a href="#contact" className="nav-cta">
              Get in Touch
            </a>
          </div>
          <button className="hamburger" id="hamburger" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="mobile-menu" id="mobile-menu">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#why">Why Us</a>
          <a href="#contact">Get in Touch</a>
        </div>
      </nav>

      <main>
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
              VaultX Techolution builds AI-driven software, scalable backend systems, and automation platforms designed for performance, security, and growth.
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
                  VaultX Techolution is a technology-driven company focused on building intelligent software solutions. We specialize in AI integration, backend infrastructure design, and scalable SaaS architecture.
                </p>
                <p className="about-text">
                  Our mission is to empower businesses with automation, performance optimization, and data-driven systems that accelerate innovation and operational efficiency.
                </p>
                <div className="about-mission">
                  <div className="mission-icon">◈</div>
                  <div>
                    <strong>Our Mission</strong>
                    <p>
                      Transform how businesses operate through intelligent, future-ready technology.
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

        <section className="services section" id="services">
          <div className="container">
            <div className="section-tag">What We Do</div>
            <h2 className="section-title center">
              Our Core <span className="accent">Services</span>
            </h2>
            <p className="section-sub center">
              End-to-end technology solutions engineered for scale, speed, and intelligence.
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
                  Custom AI integrations, automation systems, and intelligent workflows tailored to your business logic.
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
                  Scalable FastAPI and cloud-native backend systems built for reliability, speed, and long-term maintainability.
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
                  End-to-end SaaS platform development — from architecture decisions to deployment and beyond.
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
                  Intelligent automation systems to streamline business operations and eliminate repetitive overhead.
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

        <section className="why section" id="why">
          <div className="container">
            <div className="section-tag">Why VaultX</div>
            <h2 className="section-title center">
              Built Different.
              <br />
              <span className="accent">By Design.</span>
            </h2>
            <div className="why-grid">
              <div className="why-card">
                <div className="why-icon">◎</div>
                <h3>AI-First Approach</h3>
                <p>
                  Intelligence is embedded into every system we build — not bolted on as an afterthought.
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">⬡</div>
                <h3>Scalable System Design</h3>
                <p>
                  Architectures that grow with your business — from MVP to millions of users without rework.
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">⊕</div>
                <h3>Performance & Security Focused</h3>
                <p>
                  Every system ships with security hardening, load optimization, and production-grade reliability.
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">◈</div>
                <h3>Future-Ready Technology Stack</h3>
                <p>
                  We build on modern, battle-tested foundations that won't become technical debt in two years.
                </p>
              </div>
            </div>
          </div>
        </section>

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
                  Have a project in mind? Tell us about it. We'd love to explore what we can build together.
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
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <a href="/" className="logo">
                <span className="logo-mark">VX</span>
                <span className="logo-text">
                  VaultX <span className="logo-sub">Techolution</span>
                </span>
              </a>
              <p>Engineering intelligent systems for the future.</p>
            </div>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#why">Why Us</a>
              <a href="#contact">Contact</a>
              <a href="/privacy.html">Privacy Policy</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 VaultX Techolution. All rights reserved.</span>
            <a href="mailto:contact@vaultxtecholution.live">
              contact@vaultxtecholution.live
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
