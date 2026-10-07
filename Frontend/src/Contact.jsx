
import "./contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  // const navigate = useNavigate();

  return (
    <>
    {/* CONTACT HERO */}
      <section className="contact-hero">
        <div className="container text-center">
          <h1>Contact Us</h1>
          <p>
            We are here to help you with your recurring deposit investments.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="contact-info">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="info-card">
                <h5>📍 Head Office</h5>
                <p>
                  302, Shree Ganesh Sapphire,<br />
                  P.N. 05, Mumbai Naka,<br />
                  Nashik – 422001
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="info-card">
                <h5>🏢 Branch Office</h5>
                <p>
                  S/A3 Shop No-4, Ajmera Housing Society,<br />
                  Near S.S. Ajmera School,<br />
                  Pimpri, Pune – 411018
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="info-card">
                <h5>📞 Contact</h5>
                <p>
                  Phone: <strong>+91 75885 52904</strong><br />
                  Email: <strong>info@umanginvestment.com</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="form-card">
                <h2 className="text-center mb-4">Send Us a Message</h2>

                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-primary px-5"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="contact-map">
        <div className="container-fluid p-0">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps?q=Nashik,Maharashtra&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  )
}