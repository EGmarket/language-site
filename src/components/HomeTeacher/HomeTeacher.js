import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './HomeTeacher.css'

const HomeTeacher = (props) => {
    const {name,qualification,level,country,img,desc} = props.teacher;
    return (
        <div>
            <Col>
             <Card className="container mx-5">
                     <Card.Img variant="top" src={img}  className="teacher-img"/>
                     <Card.Body>
                         <Card.Title>Name: {name}</Card.Title>
                         {country === 'BD' ? <h5>Country: Bangladesh</h5>: <h5>Country: KOREA</h5>}
                         <Card.Text>
                                <h5>{qualification}</h5>
                                <h5>Level: {level}</h5>
                                {desc}
                        </Card.Text>
                     </Card.Body>
                </Card>
            
            </Col>
        </div>
    );
};

export default HomeTeacher;