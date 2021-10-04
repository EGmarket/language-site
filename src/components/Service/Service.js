import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const {title, img,duration,tutionFee,desc} = props.service;
    console.log(duration);
    return (
        <div>
            <Col>
             <Card className="container  mx-5 ">
                     <Card.Img variant="top" src={img}  className="teacher-img"/>
                     <Card.Body className="bg-service text-white mb-3 shadow-lg rounded">
                         <Card.Title>Name: {title}</Card.Title>
                         <Card.Text>
                                <h5>{tutionFee}</h5>
                                {desc}
                        </Card.Text>
                     </Card.Body>
                     <button className="btn btn-primary mb-3">Enroll Now</button>
                </Card>
            
            </Col>
        </div>
    );
};

export default Service;