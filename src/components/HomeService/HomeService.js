import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './HomeService.css'

const HomeService = (props) => {
    const {title, img, desc} = props.book;
    console.log(img);
    return (
        <div>
             <Col>
             <Card className="container mx-5">
                     <Card.Img variant="top" src={img}  className="card-img"/>
                     <Card.Body>
                         <Card.Title>{title}</Card.Title>
                         <Card.Text>
                                {desc}
                        </Card.Text>
                     </Card.Body>
                </Card>
            
            </Col>
            
            
           
        </div>
    );
};

export default HomeService;