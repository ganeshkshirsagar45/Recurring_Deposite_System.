import axios from "axios"
import { useContext, useEffect, useState } from "react"
import {AuthContext} from "./AuthContext"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Rduserdetails.css";
import user_img from "./assets/user-286.png";

export default function Rduserdetails(){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    //Access data from another component through context API
    const {rduser} = useContext(AuthContext)
    

    //particular user passbook data
    const[udata, setUData] = useState([])
    const{rid} = useContext(AuthContext)
    // console.log(rid)
    
    let userData = () =>{

      axios.get("http://localhost:8080/rddetailsbyrid/"+rid)
      .then((res) =>{
        setUData(res.data)
      })

    }
    
    useEffect( ()=> {
        
        if(rid){
          userData();
        }
    },[rid])

    return(

        

    <>
    <div className="container my-4">
      <div className="card p-4 shadow-sm">
        {/* Top Profile Section */}
        <div className="d-flex align-items-center gap-4">
          <div className="profile-img-box" onClick={handleShow}>
            <img
              src={user_img}
              alt="profile"
              className="profile-img"
            />
          </div>
          <div>
            <h2 className="mb-1">{rduser?.name}</h2>
            <p className="text-muted mb-0">📞 {rduser?.mobno}</p>
          </div>
          <div className="d-flex gap-4">
            <button className="btn btn-light icon-btn" title="View Details" onClick={handleShow}>
              <i className="bi bi-person-lines-fill"></i>
            </button>
            <button className="btn btn-light icon-btn" title="Add Transaction">
              <i className="bi bi-pencil-square"></i>
            </button>
            <button className="btn btn-light icon-btn" title="Settings">
              <i className="bi bi-gear"></i>
            </button>
          </div>
          
        </div>
        

        <hr className="my-4" />

        {/* Payment History */}
        <h5 className="mb-3">RD History</h5>

        <div className="table-responsive">
          <table className="table table-bordered align-middle text-center">
            <thead className="table-info">
              <tr>
                <th>Sr.no</th>
                <th>DATE</th>
                <th>Amount</th>
                <th>Late Day</th>
                <th>Fine Amount</th>
                {/* <th>Total Amount</th> */}
              </tr>
            </thead>
            <tbody>
              {udata.map((items) => {
                    return (
                    <tr>
                    <td>{items.pid}</td>
                    <td>{items.rddate}</td>
                    <td>{items.rdamt}</td>
                    <td>{items.late_day}</td>
                    <td>{items.fine_amt}</td>
 
                    </tr>
                    )
                })} 
            </tbody>
          </table>
        </div>
      </div>
    </div>

      {/* pop up of user details */}
    <Modal show={show} onHide={handleClose} >
        
        <Modal.Body>
          <div className="container my-5">
      <div className="card shadow-lg double-card">
        <div className="card-header text-center fw-bold fs-5">
          Customer Details
        </div>

        <div className="card-body">
          <div className="row g-4">
            {/* Left Table */}
            <div className="col-md-6 col-12">
              <div className="table-responsive">
                <table className="table table-bordered details-table mb-0">
                  <tbody>
                    <tr><th>Name</th><td>{rduser?.name}</td></tr>
                    <tr><th>Address</th><td>{rduser?.addr}</td></tr>
                    <tr><th>Mobile No.</th><td>{rduser?.mobno}</td></tr>
                    <tr><th>Date of Birth</th><td>{rduser?.dob}</td></tr>
                    <tr><th>Gender</th><td>{rduser?.gender}</td></tr>
                    <tr><th>Occupation</th><td>{rduser?.accupation}</td></tr>
                    <tr><th>RD Date</th><td>{rduser?.rddate}</td></tr>
                   <tr><th>RD Amount</th><td>{rduser?.rdamt}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Table */}
            <div className="col-md-6 col-12">
              <div className="table-responsive">
                <table className="table table-bordered details-table mb-0">
                  <tbody>
                    <tr><th>Account No.</th><td>{rduser?.acno}</td></tr>
                    <tr><th>Aadhar No.</th><td>{rduser?.adharno}</td></tr>
                    <tr><th>Pan No.</th><td>{rduser?.panno}</td></tr>
                    <tr className="section-row"><th>Nominee Name</th><td>{rduser?.nname}</td></tr>
                    <tr><th>Nominee Aadhar No.</th><td>{rduser?.nadharno}</td></tr>
                    <tr><th>Nominee Pan No.</th><td>{rduser?.npanno}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
    )
}