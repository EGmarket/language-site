import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="conatiner">
             <Navbar className="conatiner" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
    
                  <Nav className="me-auto mx-5">
                     <NavLink className="text-white link" to="/home">Learn Korean</NavLink>
                 </Nav>
                  <Nav className="me-auto">
                     <div className="my-3">
                      <NavLink className="text-white link mx-5" to="/home">Home</NavLink>
                      <NavLink className="text-white link mx-5" to="/services">Features</NavLink>
                      <NavLink className="text-white link mx-5" to="/about">Pricing</NavLink>
                     </div>
      
                  </Nav>
               </Container>
             </Navbar>
        </div>
    );
};

export default Header;