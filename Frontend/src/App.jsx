import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import NavScroll from './NavScroll';
import Contact from './Contact';
import Rduser from './Rduser';
import About from './About';
import Home from './Home';
import Rdadmin from './Rdadmin';
import Rdloginpage from './Rdloginpage';
import Rduserdetails from './Rduserdetails';
import Rdform from './Rdform';
import Services from './Services';
import Adminlogin from './Adminlogin';



export default function App() {
    return(
        <>
        <Router>
            <NavScroll /> {/* Always render Navbar component */}
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/rduser" element={<Rduser />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rdadmin" element={<Rdadmin />} />
            <Route path="/rduserdetails" element={<Rduserdetails />} />
            <Route path="/rdloginpage" element={<Rdloginpage />} />
            <Route path="/rdform" element={<Rdform />} />
             <Route path="/adminlogin" element={<Adminlogin />} />
            </Routes>
    </Router>

        

        </>
    )
}