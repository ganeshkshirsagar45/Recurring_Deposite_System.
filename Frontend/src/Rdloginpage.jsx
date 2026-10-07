import { useNavigate } from "react-router-dom";
import bgImage from "./assets/Glowing-tablet.png"; // your image
import { useContext, useState } from "react";
import axios from "axios";
import {AuthContext} from "./AuthContext";

export default function Rdloginpage() {


  //context API(data travel through one component to another)
  const { setRduser } = useContext(AuthContext)
  const { setRid } = useContext(AuthContext);


  const navigate = useNavigate();

  const[loginid, setLoginID] = useState()
  const[pwt, setPwt] = useState()

  let hndlLoginID = (e) =>{setLoginID(e.target.value)}
  let hndlPwt = (e) =>{setPwt(e.target.value)}

  let login = () =>{
    //alert(loginid+pwt)
    //navigate("/rduserdetails")
    const data = {
      loginid: loginid,
      user_password: pwt
    }

    axios.post("http://localhost:8080/login", data)
    .then((res) => {
      if (res.data != null) {
        alert("Login Success...");
        //console.log(res.data);
        setRduser(res.data);
        setRid(res.data.rid);
        navigate("/rduserdetails");
      } else {
        alert("Invalid Login ID or Password");
      }
    })
    .catch((err) => {
      alert("Login Failed");
      console.error(err);
    });

  }
  return (
     <div
      className="min-vh-100 d-flex align-items-center justify-content-center position-relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

      {/* Login Box */}
      <div
        className="card text-white border-0 position-relative"
        style={{
          width: "380px",
          background: "rgba(0, 0, 0, 0.19)",
          backdropFilter: "blur(3px)",
        }}
      >
        <div className="card-body p-4">

          <h5 className="text-center mb-4">Login Account</h5>

          <div className="mb-3">
            <input
              type="ID"
              className="form-control bg-transparent text-white border-light"
              placeholder="ID"
              onChange={hndlLoginID}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control bg-transparent text-white border-light"
              placeholder="Password"
              onChange={hndlPwt}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check text-white-50">
              <a href="rdform" className="text-warning small text-decoration-none"  >
              New User?
            </a>
            </div>
            <a href="#" className="text-info small text-decoration-none">
              Forgot Password?
            </a>
          </div>

          <button className="btn btn-info w-100 fw-semibold text-dark" onClick={login}>
            LOGIN
          </button>

        </div>
      </div>
    </div>
  );
};


