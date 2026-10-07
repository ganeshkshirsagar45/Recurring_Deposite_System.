import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Rdform(){
    const navigate = useNavigate();

    //add users
      const[loginid,setLoginID] = useState("")
      const[pwt,setPwt] = useState("")
      const[name,setName] = useState("")
      const[addr,setAddr] = useState("")
      const[mob,setMob] = useState("")
      const[dob,setDOB] = useState("")
      const[gender,setGender] = useState("")
      const[accupation,setAccupation] = useState("")
      const[rddate,setRddate] = useState("")
      const[rdamt,setRdamt] = useState(0)
      const[acno,setAcno] = useState("")
      const[adharno,setAdharno] = useState("")
      const[panno,setPanno] = useState("")
      const[status, setStatus] = useState("")
      const[nname,setNname] = useState("")
      const[naddr,setNaddr] = useState("")
      const[nadhar,setNadhar] = useState("")
      const[npan,setNpan] = useState("")
    
      let handleLoginID = (e) =>{setLoginID(e.target.value)}
      let handlePwt = (e) =>{setPwt(e.target.value)}
      let handleName = (e) =>{setName(e.target.value)}
      let handleAddr = (e) =>{setAddr(e.target.value)}
      let handleMob = (e) =>{setMob(e.target.value)}
      let handleDOB = (e) =>{setDOB(e.target.value)}
      let handleGender = (e) =>{setGender(e.target.value)}
      let handleAccupation = (e) =>{setAccupation(e.target.value)}
      let handleRddate = (e) =>{setRddate(e.target.value)}
      let handleRdamt = (e) =>{setRdamt(Number(e.target.value))}
      let handleAcno = (e) =>{setAcno(e.target.value)}
      let handleAdharno = (e) =>{setAdharno(e.target.value)}
      let handlePanno = (e) =>{setPanno(e.target.value)}
      let handleStatus = (e) =>{setStatus(e.target.value)}
      let handleNname = (e) =>{setNname(e.target.value)}
      let handleNaddr = (e) =>{setNaddr(e.target.value)}
      let handleNadharno = (e) =>{setNadhar(e.target.value)}
      let handleNpanno = (e) =>{setNpan(e.target.value)}


      let returnLoginPage = () =>{
          //  navigate("/rdloginpage")
          window.location.replace("/rdloginpage");
      }

      let adduser = () =>{

        const data = {
            
            loginID: loginid,
            user_password: pwt,
            name :  name,
            addr :  addr,
            mobno :  mob,
            dob :  dob,
            gender :  gender,
            accupation :  accupation,
            rddate :  rddate,
            rdamt :  rdamt,
            acno :  acno,
            adharno :  adharno,
            panno :  panno,
            status: status,
            nname :  nname,
            naddr :  naddr,
            nadharno :  nadhar,
            npanno :  npan,
        
        }
        axios.post("http://localhost:8080/rdusersave", data)
            .then((res) => {
              returnLoginPage()
               
        })
    }




    return(
        <>
        
      {/* HEADER */}
      <div className="text-center text-white py-3 mb-4"
           style={{ background: "linear-gradient(180deg,#1f3c88,#244a99)" }}>
        <h3 className="fw-bold mb-1">RD Management System</h3>
        <small>Enter RD Account Details</small>
      </div>
        <div className="container-fluid py-4 bg-secondary min-vh-100">
      {/* FORM CARD */}
      <div className="container">
        <div className="card shadow-lg border-0 rounded-4 p-4">

          <form>

            {/* ROW 1 */}
            <div className="row mb-4">
              <div className="col-md-4">
                <label className="form-label">Login ID</label>
                <input className="form-control" placeholder="Login ID" onChange={handleLoginID} />
              </div>
              <div className="col-md-4">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Password" onChange={handlePwt} />
              </div>
            </div>

            {/* ROW 2 */}
            <h6 className="fw-bold text-primary mt-4 mb-3">Personal Information</h6>
            <div className="row mb-4">
              <div className="col-md-4">
                <label className="form-label">Name</label>
                <input className="form-control" placeholder="Full Name" onChange={handleName} />
              </div>
              <div className="col-md-4">
                <label className="form-label">Address</label>
                <input className="form-control" placeholder="Address" onChange={handleAddr} />
              </div>
              <div className="col-md-4">
                <label className="form-label">Mobile Number</label>
                <input className="form-control" placeholder="Mobile Number" onChange={handleMob} />
              </div>
            </div>

            {/* ROW 3 */}
            <div className="row mb-4">
              <div className="col-md-4">
                <label className="form-label">Date of Birth</label>
                <input type="date" className="form-control" onChange={handleDOB} />
              </div>
              <div className="col-md-4">
                <label className="form-label">Gender</label>
                <select className="form-select" onChange={handleGender}>
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Occupation</label>
                <input className="form-control" placeholder="Occupation" onChange={handleAccupation} />
              </div>
            </div>

            {/* ROW 4 */}
            <div className="row mb-4">
              <div className="col-md-4">
                <label className="form-label">RD Date</label>
                <input type="date" className="form-control" onChange={handleRddate} />
              </div>
              <div className="col-md-4">
                <label className="form-label">RD Amount</label>
                <input className="form-control" placeholder="RD Amount" onChange={handleRdamt} />
              </div>
              <div className="col-md-4">
                <label className="form-label">Account Number</label>
                <input className="form-control" placeholder="Account Number" onChange={handleAcno} />
              </div>
            </div>

            {/* ROW 5 */}
            <div className="row mb-4">
              <div className="col-md-4">
                <label className="form-label">Aadhar Number</label>
                <input className="form-control" placeholder="Aadhar Number" onChange={handleAdharno} />
              </div>
              <div className="col-md-4">
                <label className="form-label">PAN Number</label>
                <input className="form-control" placeholder="PAN Number" onChange={handlePanno} />
              </div>
              <div className="col-md-4">
                <label className="form-label">Status</label>
                <select className="form-select" onChange={handleStatus}>
                  <option>Select</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>
            

            {/* NOMINEE INFO */}
            <h6 className="fw-bold text-primary mt-4 mb-3">Nominee Information</h6>

            <div className="row mb-4">
              <div className="col-md-4">
                <label className="form-label">Nominee Name</label>
                <input className="form-control" placeholder="Nominee Name" onChange={handleNname} />
              </div>
              <div className="col-md-4">
                <label className="form-label">Nominee Address</label>
                <input className="form-control" placeholder="Nominee Address" onChange={handleNaddr} />
              </div>
              <div className="col-md-4">
                <label className="form-label">Nominee Aadhar No</label>
                <input className="form-control" placeholder="Nominee Aadhar" onChange={handleNadharno} />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-4">
                <label className="form-label">Nominee PAN No</label>
                <input className="form-control" placeholder="Nominee PAN" onChange={handleNpanno} />
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="d-flex justify-content-end gap-3">
              <button type="reset" className="btn btn-secondary px-4">
                Clear
              </button>
              <button type="button" className="btn btn-primary px-4" onClick={adduser} >
                Save RD Account
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
        
        </>
    )
}