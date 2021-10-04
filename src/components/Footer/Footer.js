import React from 'react';
import { Container, Nav, Navbar,Row,Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
             <Navbar className="conatiner" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Row>
                        <Col className="col-md-6">
                        <Nav className="me-auto mx-5 mt-5 d-block">
                             <NavLink className="text-white link footer-text" to="/home">HANGUL</NavLink>
                             <div className="mt-5">
                             <NavLink className="text-white link " to="/home">Home</NavLink>
                             <NavLink className="text-white link mx-3" to="/services">Service</NavLink>
                            <NavLink className="text-white link mx-3" to="/teachers">Teachers</NavLink>
                            <NavLink className="text-white link mx-3" to="/about">About</NavLink>
                             </div>
                         </Nav>
                        </Col>
                        <Col className="col-md-6 mt-5">
                        <Nav>
                            <img className="footer-img" src="https://clippingpathservice.org/wp-content/uploads/2017/09/payment-method.jpg" alt="" srcset="" />
                         </Nav>
                        </Col>
                    </Row>
                
                  
               
               </Container>
             </Navbar>
        </div>
    );
};

export default Footer;