export default function Nav() {
  return (
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
  );
}
