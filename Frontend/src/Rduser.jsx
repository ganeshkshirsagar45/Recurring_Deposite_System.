import { useNavigate } from "react-router-dom"

export default function Rduser() {
    const navigate = useNavigate();
  return (
    <>
      <div className="position-relative overflow-hidden">

      {/* SVG BACKGROUND */}
      <svg
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
        className="position-absolute top-0 start-0 w-100 h-100"
      >
        {/* Base background */}
        <rect width="1440" height="700" fill="#cfd6f5" />

        {/* White curved shape */}
        <path
          d="M820,0 C1080,120 1240,260 1440,360 L1440,700 L820,700 Z"
          fill="#ffffff80"
        />

        {/* Pink blob */}
        <path
          d="M1080,120 C1200,40 1380,80 1440,160 L1440,0 L1080,0 Z"
          fill="#f6b1d8"
        />
      </svg>

      {/* CONTENT */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row min-vh-100 align-items-center">

          {/* LEFT */}
          <div className="col-lg-5 d-flex align-items-center">
      <div className="w-100">

        {/* Card 1 */}
        
          <div className="card border-0 rounded-4 shadow p-4 shadow-lg cursor-pointer mb-4" onClick={() => window.open("/adminlogin", "_blank")} >
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-bold mb-0">Admin Login</h4>
                <div className="bg-primary text-white rounded-circle p-3">
                  🔐
                </div>
              </div>
              <p className="text-secondary mt-3 mb-0 fw-semibold">
                Manage users, transaction, and platform settings
              </p>
            </div>
          </div>

        {/* Card 2 */}
        
          <div className="card border-0 rounded-4 shadow p-4 shadow-lg cursor-pointer mb-4" onClick={() => navigate("/rdloginpage")}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-bold mb-0">RD User Login</h4>
                <div className="bg-warning text-white rounded-circle p-3">
                  👤
                </div>
              </div>
              <p className="text-secondary mt-3 mb-0 fw-semibold">
                Access your details and dashboard
              </p>
            </div>
          </div>
        

        {/* Card 3 */}
        
          <div className="card border-0 rounded-4 shadow p-4 shadow-lg cursor-pointer mb-4" onClick={() => navigate("/rdform")}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-bold mb-0">New Registration</h4>
                <div className="bg-success text-white rounded-circle p-3">
                  📝
                </div>
              </div>
              <p className="text-secondary mt-3 mb-0 fw-semibold">
                Create a new account
              </p>
            </div>
          </div>
        

      </div>
    </div>

          {/* RIGHT */}
          <div className="col-lg-7 text-center">
            <img
              src="https://thumbs.dreamstime.com/b/happy-family-laughing-tablet-computer-bed-home-watching-movies-internet-happy-family-laughing-tablet-computer-161742551.jpg"
              alt="Family"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>

        </div>
      </div>
    </div>
    <style>{`
        

        /* CARD STYLE */
        .card {
          
          border-radius: 18px;
          padding: 24px;
          
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          background: rgba(255, 255, 255, 0.62);
        }

        .card h4 {
          margin: 0;
          font-weight: 600;
        }

        .card p {
          margin-top: 10px;
          opacity: 0.85;
        }
          
        @media (max-width: 768px) {
          .finance-text {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
