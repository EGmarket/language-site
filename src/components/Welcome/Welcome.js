import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../Assets/Images/background.png';
import kmen from '../Assets/Images/kmen.png';
import './Welcome.css'

const Welcome = () => {
    return (
        <div>
             <Container>
            <Row  className="row head-section">
                <Col className="col-md-6 col-lg-6">
                     <h1 className="head-text"> Learn Traditional Korean</h1>
                     <h1 className="speak-text"> Speak and Writing Like Native</h1>
                     <h4 className="best-text"> Best Teachers are ready to teach you</h4>
                     <button className="btn btn-primary mt-2 enroll-btn">ENROLL NOW</button>
                </Col>
                <Col className="men col-md-6 col-lg-6">
                     <img src={kmen} alt="" srcset="" />
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Welcome;