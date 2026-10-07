import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function NavScroll() {
  const location = useLocation();
  if (location.pathname === "/rdloginpage" || location.pathname === "/adminlogin" || location.pathname === "/rduserdetails" || location.pathname === "/rdadmin") return null;

  return (
    <>
      {/* Top Info Bar */}
      <div className="top-bar">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="top-left">
            <span>📞 +91 75885 52904</span>
            <span className="mx-2">|</span>
            <span>✉ info@umanginvestment.com</span>
          </div>
          <div className="top-right">
            OUR SUPPORT YOUR LEAP
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light main-navbar sticky-top">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <span className="brand-text">UMANG</span>
            <span className="brand-sub">FINE INVESTMENT SOLUTIONS</span>
          </Link>

          {/* Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {["/", "/about", "/services", "/rduser", "/contact"].map((path, i) => (
                <li className="nav-item" key={i}>
                  <NavLink
                    to={path}
                    className="nav-link"
                  >
                    {["Home", "About", "Services", "RD Users", "Contact"][i]}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Login Button */}
            <Link className="btn btn-login" to="/Rdloginpage">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
