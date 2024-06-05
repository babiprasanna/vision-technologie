import logo from  "../../assets/logo (1).jpg"
import { useState } from "react";

import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import {Link} from "react-router-dom"
import "./index.css"

function Navbar(){
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:3001/contactRouter/contact",{name, email,contactNumber,message})
    .then(res => {
       console.log(res)
    })
    .catch(err => console.log(err))
   
   
   
    console.log('Submitted:', { name, email, contactNumber, message });
    setName('');
    setEmail('');
    setContactNumber('');
    setMessage('');
  };

    return(<nav className="navbar navbar-expand-lg navbar-light bg-black p-3" style={{height:"70px"}}>
     <Link to="/" className="navbar-brand" ><img src={logo} alt="img1" className='logo' /></Link>
    <button className="navbar-toggler" style={{backgroundColor:"white"}} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse w-100" id="navbarNav" style={{zIndex:"100"}}  >
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#/" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false" style={{color:"yellow"}}>Home</a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/"><a className="dropdown-item" href="#">Action</a></Link>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li >

        </li>
        <li className="nav-item dropdown">
        <Link to="/about" className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        About us
        </Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false" style={{color:"yellow"}}>Our Services</a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/services" className="dropdown-item" >Our Services</Link>
          <Link to="/ourWorks" className="dropdown-item" >Our Works</Link>
            <div className="dropdown-divider"></div>
            <Link to="/reviews" className="dropdown-item" >Our Reviews</Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false" style={{color:"yellow"}}>Our Portfolio</a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
      <div className="ml-auto">
      <Button variant="primary" className="ml-auto m-2 color" onClick={() => setShowModal(true)}>
        Contact Us
      </Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">Name</label>
        <input type="text" className="form-control" id="exampleInputName" value={name} onChange={(e) => setName(e.target.value)} aria-describedby="nameHelp" required />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" required />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputContact" className="form-label">Contact Number</label>
        <input type="tel" className="form-control" id="exampleInputContact" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} aria-describedby="contactHelp" placeholder="Enter your contact number" required />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" value={message} onChange={(e) => setMessage(e.target.value)} rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
  


      </div>
    </div>
  </nav>
 )
}

export default Navbar;