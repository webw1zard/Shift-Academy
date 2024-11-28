function Footer() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <img src="../logo1 1.png" alt="Shift Academy Logo" />
        </div>
        <div className="header__contact">
          <a href="tel:+998941240041" className="header__phone">
            +998 94 124 00 41
          </a>
          <div className="header__social">
            <a href="https://www.instagram.com/" className="header__social-link">
              <img src="./icon-instagram 1.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/" className="header__social-link">
              <img src="icon-facebook 1.png" alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/" className="header__social-link">
              <img src="icon-linkedin 1.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Footer;
