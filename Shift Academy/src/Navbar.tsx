import "./App.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./logo1 1.png" alt="logo" />
      </div>
      <div className="links">
        <ul>
          <div id="header__nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">About CEO</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a
                href="#"
                onClick={() =>
                  alert("Contact us at info@mywebsite.com or +998 94 124 00 41")
                }
              >
                Contact
              </a>
            </li>
          </div>
          <li>
            <button className="header__phone-btn" onClick={() => alert("+998 94 124 00 41")}>
              <a href="tel:+998941240041" className="header__phone">
                +998 94 124 00 41
              </a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
