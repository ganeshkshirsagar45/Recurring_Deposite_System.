import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
    {/* Hero Section with Stats Cards */}
<div
  className="position-relative text-white py-5"
  style={{
    backgroundImage:
      "linear-gradient(rgba(25, 100, 213, 0.6), #cfd6f5), url('https://as2.ftcdn.net/jpg/02/43/86/19/1000_F_243861956_kdntVrj5jwUxQzQCTlvU7tElNjgI8llj.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "90vh",
  }}
>
  <div className="container text-center mt-5">

    {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>
                Secure Your Future with <span>Smart Recurring Deposits</span>
              </h1>
              <p>
                Trusted investment solutions with disciplined monthly savings
                and assured returns.
              </p>
              <div className="hero-btns">
                <button className="btn btn-light" onClick={() => navigate("/rdloginpage")} >Open RD Account</button>
                <button className="btn btn-outline-light ms-3" onClick={() => navigate("/contact")} >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
                alt="Investment"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <div className="container text-center">
          <h2 className="section-title">
            Why Choose Umang Fine Investment Solutions?
          </h2>

          <div className="row g-4 mt-4">
            {[
              "Secure & Trusted Schemes",
              "Flexible Monthly Deposits",
              "Transparent Rules",
              "Nomination Facility",
            ].map((item, index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <div className="why-card">
                  <h5>{item}</h5>
                  <p>
                    Designed to protect your savings and ensure steady growth.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RD HIGHLIGHTS */}
      <section className="highlight-section">
        <div className="container">
          <h2 className="section-title text-center">RD Scheme Highlights</h2>

          <div className="row mt-4">
            <div className="col-md-6 mx-auto">
              <ul className="highlight-list">
                <li>✔ Fixed monthly deposit</li>
                <li>✔ Penalty for delayed payment</li>
                <li>✔ Maturity after completion of tenure</li>
                <li>✔ Nomination facility available</li>
                <li>✔ Premature closure as per rules</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Start Your RD Journey Today</h2>
          <p>Small monthly savings lead to a secure future.</p>
          <button className="btn btn-primary mt-3" onClick={() => navigate("/rdloginpage")} >
            Open RD Account
          </button>
        </div>
      </section>




  </div>

  {/* Bottom Wave */}
  <div className="position-absolute bottom-0 w-100 overflow-hidden">
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: "100%", height: "100px" }}>
      <path
        fill="#fff"
        // d="M0,40 C120,80 240,0 360,20 480,40 600,100 720,80 840,60 960,20 1080,30 1200,40 1320,70 1440,50 L1440,100 L0,100 Z"
      />
    </svg>
  </div>
</div>

      
    </>
  )
}
