import { useNavigate } from "react-router-dom";
import "./Services.css";

export default function Services() {

  const navigate = useNavigate()

    return(

        <>
        {/* SERVICES HERO */}
      <section className="services-hero">
        <div className="container text-center">
          <h1>Our Services</h1>
          <p>
            Secure and transparent recurring deposit solutions designed for
            disciplined savings.
          </p>
        </div>
      </section>

      {/* RD SERVICE INTRO */}
      <section className="rd-intro">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Recurring Deposit (RD)</h2>
              <p>
                Our Recurring Deposit scheme allows you to save a fixed amount
                every month and receive assured maturity benefits. It is ideal
                for individuals who want secure, long-term financial growth
                through disciplined savings.
              </p>
              <p>
                The RD scheme is governed by clearly defined rules to ensure
                transparency and trust.
              </p>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
                alt="RD Service"
                className="rd-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RD FEATURES */}
      <section className="rd-features">
        <div className="container text-center">
          <h2 className="section-title">RD Key Features</h2>

          <div className="row g-4 mt-4">
            {[
              "Fixed Monthly Investment",
              "Assured Maturity Benefits",
              "Safe & Secure Scheme",
              "Nomination Facility",
            ].map((feature, index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <div className="feature-card">
                  <h5>{feature}</h5>
                  <p>
                    Designed to help you build wealth steadily and securely.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RD RULES */}
      <section className="rd-rules">
        <div className="container">
          <h2 className="section-title text-center">
            Rules & Conditions
          </h2>

          <ul className="rules-list mt-4">
            <li>Monthly RD installment must be paid on time</li>
            <li>Late payment will attract a penalty</li>
            <li>RD maturity amount is payable after completion of tenure</li>
            <li>Premature withdrawal allowed as per company policy</li>
            <li>Nomination facility is mandatory</li>
            <li>Company reserves the right to amend rules if required</li>
          </ul>
        </div>
      </section>

      {/* RD AMOUNT SLABS */}
      <section className="rd-amounts">
        <div className="container">
          <h2 className="section-title text-center">RD Amount Slabs</h2>

          <div className="table-responsive mt-4">
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th>Monthly RD Amount</th>
                  <th>Scheme Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>₹1000 – ₹2000</td>
                  <td>Basic RD</td>
                </tr>
                <tr>
                  <td>₹3000 – ₹4000</td>
                  <td>Standard RD</td>
                </tr>
                <tr>
                  <td>₹5000 & Above</td>
                  <td>Premium RD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* REQUIRED DOCUMENTS */}
      <section className="rd-documents">
        <div className="container text-center">
          <h2 className="section-title text-white">
            Required Documents
          </h2>

          <div className="row mt-4">
            {[
              "Aadhaar Card",
              "PAN Card",
              "Address Proof",
              "Passport Size Photograph",
              "Nominee Details",
            ].map((doc, index) => (
              <div className="col-md-4 col-sm-6" key={index}>
                <div className="doc-card">
                  <h6>{doc}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container text-center">
          <h2>Open Your RD Account Today</h2>
          <p>
            Start saving systematically and secure your financial future.
          </p>
          <button className="btn btn-primary mt-3" onClick={()=>{navigate("/rdloginpage")}} >
            Open RD Account
          </button>
        </div>
      </section>
        </>
    )
}