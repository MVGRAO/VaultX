export default function Footer() {
  return (
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
  );
}
