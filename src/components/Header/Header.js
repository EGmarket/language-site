import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="conatiner">
             <Navbar className="conatiner" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Row>
                        <Col className="col-md-6">
                        <Nav className="me-auto mx-5">
                             <NavLink className="text-white link" to="/home">HANGUL</NavLink>
                         </Nav>
                        </Col>
                        <Col className="col-md-6">
                        <Nav>
                            <NavLink className="text-white link mx-5" to="/home">Home</NavLink>
                             <NavLink className="text-white link mx-5" to="/services">Service</NavLink>
                            <NavLink className="text-white link mx-5" to="/teachers">Teachers</NavLink>
                            <NavLink className="text-white link mx-5" to="/about">About</NavLink>
                  </Nav>
                        </Col>
                    </Row>
                
                  
               
               </Container>
             </Navbar>
        </div>
    );
};

export default Header;