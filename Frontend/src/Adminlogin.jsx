import { useState } from "react";
import "./Adminlogin.css";
import { useNavigate } from "react-router-dom";

export default function Adminlogin(){

  const navigate = useNavigate()

  const[username, setUsername] = useState("")
  const[pwt, setPwt] = useState("")

  let hndleUsername = (e) =>{setUsername(e.target.value)}
  let hndlePwt = (e) =>{setPwt(e.target.value)}


  let adLogin = () =>{

    if(username == "Admin1234" && pwt == "54321"){

      alert("Login Successful...")
      navigate('/rdadmin')

    }else{

      alert("Invalid UserName Password")
      
    }

  }
    return(
        <>

        <div className="admin-login-page d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            
            <div className="card admin-login-card shadow-lg border-0 rounded-4">
              <div className="card-body p-4">

                <div className="text-center mb-4">
                  <h3 className="fw-bold text-primary">Admin Login</h3>
                  <p className="text-muted mb-0">
                    UMANG Fine Investment Solutions
                  </p>
                </div>

                <form>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-md"
                      placeholder="Enter email"
                      onChange={hndleUsername}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-md"
                      placeholder="Enter password"
                      onChange={hndlePwt}
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                      />
                    </div>
                    <a href="#" className="text-decoration-none small">
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 btn-lg rounded-pill"
                    onClick={adLogin}>
                    Login
                  </button>
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>


        </>
    )
}