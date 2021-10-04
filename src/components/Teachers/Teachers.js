import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';
import './Teachers.css'

const Teachers = (props) => {
    const [teachers,setTeachers] = useState([])

     //Showing Team Member/ Teachers using useEffect
     useEffect(()=>{
        fetch('./teacher.JSON')
        .then(res => res.json())
        .then(data =>setTeachers(data))
    },[])
    return (
        <div>
            <div className="container mt-5 mb-5 mt-5">
           <h1 className="full-service mx-5 "> See Our Teachers Panel </h1>
           <Row xs={1} md={3} className="container g-4 my-5">
                {
                    teachers.map(teacher => <Teacher
                    key={teacher.key}
                    teacher = {teacher}
                    ></Teacher>)
                }
            </Row>
           </div>
        </div>
    );
};

export default Teachers;