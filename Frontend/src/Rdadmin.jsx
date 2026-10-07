import axios from "axios"
import Button from 'react-bootstrap/Button';
import "./Rdadmin.css";

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import DeleteIcon from '@mui/icons-material/Delete';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PrintIcon from '@mui/icons-material/Print';

import {
  FaMoneyBillWave,
  FaUniversity,
  FaCreditCard,
  FaUsers,
  FaChartLine,
  FaClock,
  FaChartBar,
  FaUserCircle,
} from "react-icons/fa";

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Rduser(){

  const navigate = useNavigate();

  //Display
    const[users, setUsers] = useState([])

  //display user passbook details
    const[pdetails, setPdetails] = useState([])

  //dispay Active RDusers
    const[activerdusers, setActiverdusers] = useState([])

    //model pop up(for add user)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //model pop up(for update user)
    const [ushow, setUShow] = useState(false);
    const handleUClose = () => setUShow(false);
    const handleUShow = () => setUShow(true);

    //model pop up(passbook details)
    const [dshow, setDShow] = useState(false);
    const handleDClose = () => setDShow(false);
    const handleDShow = () => setDShow(true);

    //large model pop up (add passbookdetails)
    const [lgShow, setLgShow] = useState(false);
    const handleADClose = () => setLgShow(false);
    const handleADShow = () => setLgShow(true);

    //transactions counts
    const[transactions, setTransactions] = useState([])

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
  let handleNname = (e) =>{setNname(e.target.value)}
  let handleNaddr = (e) =>{setNaddr(e.target.value)}
  let handleNadharno = (e) =>{setNadhar(e.target.value)}
  let handleNpanno = (e) =>{setNpan(e.target.value)}

  //update User
  const[uloginid,setULoginID] = useState("")
  const[upwt,setUPwt] = useState("")
  const[rid,setRID] = useState("")
  const[uname,setUName] = useState("")
  const[uaddr,setUAddr] = useState("")
  const[umob,setUMob] = useState("")
  const[udob,setUDOB] = useState("")
  const[ugender,setUGender] = useState("")
  const[uaccupation,setUAccupation] = useState("")
  const[urddate,setURddate] = useState("")
  const[urdamt,setURdamt] = useState(0)
  const[uacno,setUAcno] = useState("")
  const[uadharno,setUAdharno] = useState("")
  const[upanno,setUPanno] = useState("")
  const[unname,setUNname] = useState("")
  const[unaddr,setUNaddr] = useState("")
  const[unadhar,setUNadhar] = useState("")
  const[unpan,setUNpan] = useState("")

  let handleULoginID = (e) =>{setULoginID(e.target.value)}
  let handleUPwt = (e) =>{setUPwt(e.target.value)}
  let handleRID = (e) =>{setRID(e.target.value)}
  let handleUName = (e) =>{setUName(e.target.value)}
  let handleUAddr = (e) =>{setUAddr(e.target.value)}
  let handleUMob = (e) =>{setUMob(e.target.value)}
  let handleUDOB = (e) =>{setUDOB(e.target.value)}
  let handleUGender = (e) =>{setUGender(e.target.value)}
  let handleUAccupation = (e) =>{setUAccupation(e.target.value)}
  let handleURddate = (e) =>{setURddate(e.target.value)}
  let handleURdamt = (e) =>{setURdamt(Number(e.target.value))}
  let handleUAcno = (e) =>{setUAcno(e.target.value)}
  let handleUAdharno = (e) =>{setUAdharno(e.target.value)}
  let handleUPanno = (e) =>{setUPanno(e.target.value)}
  let handleUNname = (e) =>{setUNname(e.target.value)}
  let handleUNaddr = (e) =>{setUNaddr(e.target.value)}
  let handleUNadharno = (e) =>{setUNadhar(e.target.value)}
  let handleUNpanno = (e) =>{setUNpan(e.target.value)}


  //add passbook details
  const[passbookrid, setPassbookRid] = useState("")
  const[passbookrddate, setPassbookRddate] = useState("")
  const[passbookrdamt, setPassbookRdamt] = useState(0)
  const[passbooklday, setPassbookLday] = useState(0)
  const[passbookfamt, setPassbookFamt] = useState(0)

  let handlePassbookRid = (e) =>{setPassbookRid(e.target.value)}
  let handlePassbookRddate = (e) =>{setPassbookRddate(e.target.value)}
  let handlePassbookRdamt = (e) =>{setPassbookRdamt(e.target.value)}
  let handlePassbookLday = (e) =>{setPassbookLday(e.target.value)}
  let handlePassbookFamt = (e) =>{setPassbookFamt(e.target.value)}

  //display total amount 

  const[ttlam, setTtlam] = useState([])



//dispay all rd users
    let api = () => {
        axios.get("http://localhost:8080/allrduser")
        .then((res)=>{
             setUsers(res.data.Users)
            // console.log(res.data.Users)
        })
    }


  //dispay Active users
  let activeRdusers = () => {
    axios.get("http://localhost:8080/totalrdusers")
    .then((res) =>{
        setActiverdusers(res.data.Active_Rdusers)
    })
  }

//add rd users
    let adduser = () =>{

      const data = {
        
        loginid: loginid,
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
        nname :  nname,
        naddr :  naddr,
        nadharno :  nadhar,
        npanno :  npan,
      
      }
      axios.post("http://localhost:8080/rdusersave", data)
        .then((res) => {
            api()
            setShow(false)

        })
    }

    //update rd user Data
    let updtData = (rid,name,addr,mobno,dob,gender,accupation,rddate,rdamt,acno,adharno,panno,nname,naddr,nadharno,npanno,loginid,user_password) =>{
        setRID(rid)
        setUName(name)
        setUAddr(addr)
        setUMob(mobno)
        setUDOB(dob)
        setUGender(gender)
        setUAccupation(accupation)
        setURddate(rddate)
        setURdamt(rdamt)
        setUAcno(acno)
        setUAdharno(adharno)
        setUPanno(panno)
        setUNname(nname)
        setUNaddr(naddr)
        setUNadhar(nadharno)
        setUNpan(npanno)
        setULoginID(loginid)
        setUPwt(user_password)

        handleUShow()
    }

    let updtuser = () => {

      const updateddata = {
        
        name :  uname,
        addr :  uaddr,
        mobno :  umob,
        dob :  udob,
        gender :  ugender,
        accupation :  uaccupation,
        rddate :  urddate,
        rdamt :  urdamt,
        acno :  uacno,
        adharno :  uadharno,
        panno :  upanno,
        nname :  unname,
        naddr :  unaddr,
        nadharno :  unadhar,
        npanno :  unpan,
        rid: rid,
        loginid: uloginid,
        user_password: upwt
      
      }
      axios.put("http://localhost:8080/rduserupdt", updateddata)
      .then((res) => {
        api()
        setUShow(false)
      })

    }


    //delete rd user Data
    let del = (rid) =>{
        alert("delete"+rid)
        try{
          axios.delete("http://localhost:8080/rduserdlt/"+rid)
          .then((res)=>{
              alert("Delete Record Successfully...")
              api()
          })

        }catch(err){
          console.log(err)

        }
    }

    //dispay particular rd user passbook data
    let userPassbook = (rid) =>{
        handleDShow()
      
      axios.get("http://localhost:8080/rddetailsbyrid/"+rid)
        .then((res)=>{
             setPdetails(res.data)
            // console.log(res.data)
        })
    }

     //add rduser passbook data
    let addpassbookdata= () =>{

      const data = {
        fine_amt: passbookfamt,
        // flag: 0,
        late_day: passbooklday,
        rdamt: passbookrdamt,
        rddate: passbookrddate,
        rid: passbookrid
      }

      axios.post("http://localhost:8080/rduserbooksave",data)
      .then((res)=>{

        userPassbook();
        setLgShow(false)


      })
    }

    let ttlamt = () =>{

      axios.get("http://localhost:8080/totalamt")
      .then((res) =>{

        setTtlam(res.data.Total_Amount)

      })
    }

    let manageLone = (rid) =>{
      
      axios.get("http://localhost:8080/transactioncount/"+rid)
      .then((res)=>{

        const data = res.data;
        const item = data[0];  

      if (item.total_count >= 6 && item.status === "Active") {
        alert("Success");
      } else {
        alert("Not Eligible");
      }
      })
    }


    useEffect( ()=> {
        api();
        activeRdusers();
        ttlamt();
    },[])


    return(
        <>
        <h3 className="text-center fw-bold mb-4">
          RD Users Details
        </h3>

      {/* dashbord */}

      <div className="container my-4">
      <div className="row g-4">

        {/* Total Bank Balance */}
        <div className="col-md-3 col-sm-6">
          <div className="card dashboard-card blue">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="title">Total Bank Balance</p>
                <h4>{ttlam}</h4>
                <small>From total endpoint ({activerdusers} accounts)</small>
              </div>
              <FaMoneyBillWave className="icon" />
            </div>
          </div>
        </div>

        {/* Matured Accounts */}
        <div className="col-md-3 col-sm-6">
          <div className="card dashboard-card green">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="title">Matured Accounts</p>
                <h4>0</h4>
                <small>Eligible for withdrawal (12+ months)</small>
              </div>
              <FaUniversity className="icon" />
            </div>
          </div>
        </div>

        {/* Eligible Withdrawal */}
        <div className="col-md-3 col-sm-6">
          <div className="card dashboard-card cyan">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="title">Eligible Withdrawal</p>
                <h4>₹0</h4>
                <small>Matured amount ready</small>
              </div>
              <FaCreditCard className="icon" />
            </div>
          </div>
        </div>

        {/* Complaints */}
        

        {/* Monthly Collection */}
        <div className="col-md-3 col-sm-6">
          <div className="card dashboard-card yellow">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="title">Monthly Collection</p>
                <h4>₹89,698</h4>
                <small>Expected this month</small>
              </div>
              <FaChartBar className="icon" />
            </div>
          </div>
        </div>

        {/* Active Users */}
        <div className="col-md-3 col-sm-6">
          <div className="card dashboard-card dark">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="title">Active Users</p>
                <h4>{activerdusers}</h4>
                <small>With active RD balance</small>
              </div>
              <FaUsers className="icon" />
            </div>
          </div>
        </div>

        {/* Annual Profit */}
        <div className="col-md-3 col-sm-6">
          <div className="card dashboard-card gray">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="title">Annual Profit</p>
                <h4>₹59,201</h4>
                <small>At 5.5% interest rate</small>
              </div>
              <FaChartLine className="icon" />
            </div>
          </div>
        </div>

        {/* Pending Payments */}
        <div className="col-md-3 col-sm-6">
          <div className="card dashboard-card red">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="title">Pending Payments</p>
                <h4>5</h4>
                <small>Late payments (after 15th)</small>
              </div>
              <FaClock className="icon" />
            </div>
          </div>
        </div>

      {/* ADD new RD user */}
        <div className="col-md-3 col-sm-6" >
          <div className="card dashboard-card green" onClick={() => navigate("/rdform")} >
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="title">New Registration</p>
                <h4>Create a new Account</h4>
                {/* <small>Eligible for withdrawal (12+ months)</small> */}
              </div>
              <FaUserCircle className="icon" />
            </div>
          </div>
        </div>

      </div>
    </div>




        <div className="container-fluid min-vh-100 bg-light py-4">
        
      {/* Header */}
        <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center">
          <h5 className="fw-bold mb-0"></h5>
          <button className="btn btn-bg btn-primary" onClick={handleShow} > Add User</button>
        </div>
         {/* Save */}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add RD User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Enter Login ID (Username) <br />
                <Form.Control type="text" placeholder="Login ID" onChange={handleLoginID} />
                <br />
                Enter Password <br />
                <Form.Control type="text" placeholder="Password" onChange={handlePwt} />
                <br />
                Enter User Name <br />
                <Form.Control type="text" placeholder="User Name" onChange={handleName} />
                <br />
                Enter User Address <br />
                <Form.Control type="text" placeholder="User Address" onChange={handleAddr} />
                <br />
                Enter User Mob <br />
                <Form.Control type="text" placeholder="User Mobile Number" onChange={handleMob} />
                <br />
                Enter User DOB <br />
                <Form.Control type="date" placeholder="User Date of Birth" onChange={handleDOB} />
                <br />
                <label className="form-label">Enter Gender</label>
                <select className="form-select" onChange={handleGender} >
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>               
                <br />
                Enter User Accupation <br />
                <Form.Control type="text" placeholder="User Accupation" onChange={handleAccupation} />
                <br />
                Enter RD Date <br />
                <Form.Control type="date" placeholder="RD Date" onChange={handleRddate} />
                <br />
                Enter RD Amount <br />
                <Form.Control type="number" placeholder="RD Amount" onChange={handleRdamt} onWheel={(e) => e.target.blur()}/>
                <br />
                Enter AC Number <br />
                <Form.Control type="text" placeholder="Account Number" onChange={handleAcno} />
                <br />
                Enter User Adhar No <br />
                <Form.Control type="text" placeholder="User Adhar Number" onChange={handleAdharno} />
                <br />
                Enter User Pan No <br />
                <Form.Control type="text" placeholder="User Pan Number" onChange={handlePanno} />
                <br />
                Enter Nomine Name <br />
                <Form.Control type="text" placeholder="Nomine Name" onChange={handleNname} />
                <br />
                Enter Nomine Address <br />
                <Form.Control type="text" placeholder="Nomine Address" onChange={handleNaddr} />
                <br />
                Enter Nomine Adhar No <br />
                <Form.Control type="text" placeholder="Nomine Adhar Number" onChange={handleNadharno} />
                <br />
                Enter Nomine Pan No <br />
                <Form.Control type="text" placeholder="Nomine Pan Number" onChange={handleNpanno} />
                <br />
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="mb-3-dark">
                    <Form.Check // prettier-ignore
                      type={type}
                      id={`default-${type}`}
                      label={`Accept All Rules`}
                    />
                  </div>
                ))}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={adduser} >
                Add User
            </Button>
            </Modal.Footer>
        </Modal>


      {/*Update*/}
      <Modal show={ushow} onHide={handleUClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add RD User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               
                <Form.Control style={{ display: "none" }} readonly="readonly" type="text" placeholder="Login ID" value={uloginid} onChange={handleULoginID} />
               
                <Form.Control style={{ display: "none" }} readonly="readonly" type="text" placeholder="Password" value={upwt} onChange={handleUPwt} />
               
                User ID <br />
                <Form.Control type="text" readonly="readonly" placeholder="User ID" value={rid} onChange={handleRID} />
                <br />
                Enter User Name <br />
                <Form.Control type="text" placeholder="User Name" value={uname} onChange={handleUName} />
                <br />
                Enter User Address <br />
                <Form.Control type="text" placeholder="User Address" value={uaddr} onChange={handleUAddr} />
                <br />
                Enter User Mob <br />
                <Form.Control type="text" placeholder="User Mobile Number" value={umob} onChange={handleUMob} />
                <br />
                Enter User DOB <br />
                <Form.Control type="date" placeholder="User Date of Birth" value={udob} onChange={handleUDOB} />
                <br />
                Enter User Gender <br />
                <Form.Control type="text" placeholder="User Gender" value={ugender} onChange={handleUGender} />
                <br />
                Enter User Accupation <br />
                <Form.Control type="text" placeholder="User Accupation" value={uaccupation} onChange={handleUAccupation} />
                <br />
                Enter RD Date <br />
                <Form.Control type="date" placeholder="RD Date" value={urddate} onChange={handleURddate} />
                <br />
                Enter RD Amount <br />
                <Form.Control type="number" placeholder="RD Amount" value={urdamt} onChange={handleURdamt} onWheel={(e) => e.target.blur()}/>
                <br />
                Enter AC Number <br />
                <Form.Control type="text" placeholder="Account Number" value={uacno} onChange={handleUAcno} />
                <br />
                Enter User Adhar No <br />
                <Form.Control type="text" placeholder="User Adhar Number" value={uadharno} onChange={handleUAdharno} />
                <br />
                Enter User Pan No <br />
                <Form.Control type="text" placeholder="User Pan Number" value={upanno} onChange={handleUPanno} />
                <br />
                Enter Nomine Name <br />
                <Form.Control type="text" placeholder="Nomine Name" value={unname} onChange={handleUNname} />
                <br />
                Enter Nomine Address <br />
                <Form.Control type="text" placeholder="Nomine Address" value={unaddr} onChange={handleUNaddr} />
                <br />
                Enter Nomine Adhar No <br />
                <Form.Control type="text" placeholder="Nomine Adhar Number" value={unadhar} onChange={handleUNadharno} />
                <br />
                Enter Nomine Pan No <br />
                <Form.Control type="text" placeholder="Nomine Pan Number" value={unpan} onChange={handleUNpanno} />
                <br />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleUClose}>
                Close
            </Button>
            <Button variant="primary" onClick={updtuser} >
                Update User
            </Button>
            </Modal.Footer>
        </Modal>

      <div className="card shadow border-0 rounded-4">
        <div className="card-body">

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>RID</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Mob No</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>Accupation</th>
                  <th>RD Date</th>
                  <th>RD Amt</th>
                  <th>AC No</th>
                  <th>Adhar No</th>
                  <th>Pan No</th>
                  <th>Nname</th>
                  <th>Naddress</th>
                  <th>Nadhar</th>
                  <th>Npan</th>
                 
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((item) => {
                    return (
                    <tr>
                    <td>{item.rid}</td>
                    <td>{item.name}</td>
                    <td>{item.addr}</td>
                    <td>{item.mobno}</td>
                    <td>{item.dob}</td>
                    <td>{item.gender}</td>
                    <td>{item.accupation}</td>
                    <td>{item.rddate}</td>
                    <td>{item.rdamt}</td>
                    <td>{item.acno}</td>
                    <td>{item.adharno}</td>
                    <td>{item.panno}</td>
                    <td>{item.nname}</td>
                    <td>{item.naddr}</td>
                    <td>{item.nadharno}</td>
                    <td>{item.npanno}</td>
                    <td>
                        <DeleteIcon style={{ color: "red" }} onClick={() => del(item.rid)} />
                        {/* <Button variant="outline-danger" onClick={() => del(item.rid)}>Delete</Button> */}
                        <EditSquareIcon style={{ color: "green" }} onClick={() => updtData(item.rid,item.name,item.addr,item.mobno,item.dob,
                          item.gender,item.accupation,item.rddate,item.rdamt,item.acno,item.adharno,item.panno,item.nname,item.naddr,item.nadharno,item.npanno,item.loginid,item.user_password)} />
                        {/* <Button variant="outline-warning" onClick={() => updtData(item.rid,item.name,item.addr,item.mobno,item.dob,
                          item.gender,item.accupation,item.rddate,item.rdamt,item.acno,item.adharno,item.panno,item.nname,item.naddr,item.nadharno,item.npanno)}>Update</Button> */}
                        <VisibilityIcon onClick={() => userPassbook(item.rid)} />
                        <PrintIcon />
                        
                    </td>
                    </tr>
                    )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    {/* for passbook details  */}

    <Modal show={dshow} onHide={handleDClose}>
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body>

             <div class="container my-5">
        <div class="card shadow-lg border-0 rounded-4">
          
          {/* <!-- Header --> */}
          <div class="card-header text-white rounded-top-4"
          style={{background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"}}
              >
            <h5 class="mb-0 fw-bold">User Account Details</h5>
          </div>

          {/* <!-- Table --> */}
          <div class="card-body p-2">
            <div class="table-responsive">
              <table class="table table-hover align-middle mb-0">
                <thead class="table-info text-center">
                  <tr>
                    <th>pid</th>
                    <th>rid</th>
                    <th>RD Date</th>
                    <th>RD Amount</th>
                    <th>Late Days</th>
                    <th>Fine Amount</th>
                    <th>Flag</th>
                  </tr>
                </thead>

                <tbody class="text-center">
                 
                    {pdetails.map((items) => {
                    return (
                    <tr>
                    <td>{items.pid}</td>
                    <td>{items.rid}</td>
                    <td>{items.rddate}</td>
                    <td>{items.rdamt}</td>
                    <td>{items.fine_amt}</td>
                    <td>{items.late_day}</td>
                    <td>{items.flag}</td>
                    </tr>
                    )
                })}         
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDClose}>
            Close
          </Button>

          <Button variant="danger" onClick={handleDClose}>
            Settle
          </Button>

          <Button 
            variant="warning" 
            onClick={() => manageLone(pdetails[0]?.rid)}
          >
            Loan
          </Button>

          <Button variant="success" onClick={handleADShow}>
            Add Entry
          </Button>
        </Modal.Footer>
      </Modal>


      {/* user passbook form */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        style={{backgroundColor:"gray"}}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className="container my-5">
      <div className="card shadow-lg form-card p-4">
        <h4 className="text-center mb-4">Add Passbook Entry</h4>

        <form>
          <div className="row g-4">
            {/* Left Column */}
            <div className="col-md-6 col-12">
              <div className="mb-3">
                <label className="form-label">Enter RD UserID</label>
                <input type="text" className="form-control" placeholder=" RID" onChange={handlePassbookRid} />
              </div>

              <div className="mb-3">
                <label className="form-label">Enter Amount</label>
                <input type="number" className="form-control" placeholder="RD Amount" onChange={handlePassbookRdamt} />
              </div>

              <div className="mb-3">
                <label className="form-label">Enter Late Day</label>
                <input type="number" className="form-control" placeholder="Late Day" onChange={handlePassbookLday} />
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-6 col-12">
              <div className="mb-3">
                <label className="form-label">Enter RD Date</label>
                <input type="date" className="form-control" placeholder="RD Date" onChange={handlePassbookRddate} />
              </div>

              <div className="mb-3">
                <label className="form-label">Enter Fine Amount</label>
                <input type="number" className="form-control" placeholder="Fine Amount" onChange={handlePassbookFamt} />
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            
          </div>
        </form>
      </div>
    </div>
    
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary px-5" onClick={handleADClose} >
              Close
            </button>
            <button className="btn btn-primary px-5" onClick={addpassbookdata}>
              Add Entry
            </button>
          
        </Modal.Footer>
      </Modal>
        </>
    )
}