import React from "react";
import "./About.css";

export default function About(){
    return(
        <>
           {/* ABOUT HEADER */}
      <section className="about-header">
        <div className="container text-center">
          <h1>About Umang Fine Investment Solutions</h1>
          <p>
            A trusted name in disciplined savings and secure investment
            solutions.
          </p>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="about-intro">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Who We Are</h2>
              <p>
                Umang Fine Investment Solutions is a professionally managed
                financial service provider offering reliable Recurring Deposit
                (RD) schemes. Our focus is to encourage disciplined monthly
                savings while ensuring transparency, safety, and customer
                satisfaction.
              </p>
              <p>
                We serve individuals, families, and professionals looking to
                secure their future with structured investment planning.
              </p>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
                alt="About Us"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6">
              <div className="mv-card">
                <h3>Our Mission</h3>
                <p>
                  To provide secure, transparent, and disciplined investment
                  solutions that help customers achieve long-term financial
                  stability.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="mv-card">
                <h3>Our Vision</h3>
                <p>
                  To become a trusted financial partner by delivering reliable
                  savings schemes and ethical financial services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE DETAILS */}
      <section className="office-section">
        <div className="container">
          <h2 className="text-center mb-4">Our Offices</h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="office-card">
                <h5>Head Office</h5>
                <p>
                  302, Shree Ganesh Sapphire,<br />
                  P.N. 05, Mumbai Naka,<br />
                  Nashik – 422001
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="office-card">
                <h5>Branch Office</h5>
                <p>
                  S/A3 Shop No-4,<br />
                  Ajmera Housing Society,<br />
                  Near S.S. Ajmera School,<br />
                  Pimpri, Pune – 411018
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="trust-section">
        <div className="container text-center">
          <h2>Why Trust Us</h2>

          <div className="row g-4 mt-4">
            {[
              "Transparent RD Rules & Policies",
              "Customer-Friendly Investment Plans",
              "Secure Monthly Savings",
              "Nomination Facility Available",
            ].map((item, index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <div className="trust-card">
                  <h6>{item}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        </>
    )
}