import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import logo from '../../../images/logos/Logo.png';
import './NavBar.css'
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className='container mb-0'>
           <>
           
  <Navbar variant="light" className="d-flex justify-content-between">
    <Link to='/'><Navbar.Brand href="#home"> <img src={logo} width='100'alt=""/> </Navbar.Brand></Link>
    
    <Nav >
      <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#service">Service</Nav.Link>
      <Nav.Link href="#concerns">Concerns</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      <Link to="rentDetails"> <button className='btn btn-primary mr-1'>DashBoard</button> </Link>
     <Link to='login'> <button className='btn btn-primary'>Login</button></Link>
    </Nav>
    
    
  </Navbar> 
  <br />
 
</> 
        </div>
    );
};

export default NavBar;