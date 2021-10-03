import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeService from '../HomeService/HomeService';
import HomeTeacher from '../HomeTeacher/HomeTeacher';
import Welcome from '../Welcome/Welcome';
import './Home.css'

const Home = () => {
    const [books,setBooks] = useState([]);
    const [teachers,setTeachers] = useState([])
    //Showing Service using useEffect
    useEffect(()=>{
        fetch('./books.JSON')
        .then(res => res.json())
        .then(data =>setBooks(data))
    },[])

    //Showing Team Member/ Teachers using useEffect
    useEffect(()=>{
        fetch('./teacher.JSON')
        .then(res => res.json())
        .then(data =>setTeachers(data))
    },[])
    return (
        <div> 
           <Welcome></Welcome>
           <div className="container">
               <h1 className="service-text">Our Simple Guide Line Make you Master in Korean</h1>
           <Row xs={1} md={4} lg={4} className="container g-4 my-5 service">         
           {
               books.map(book =><HomeService
               key = {book.key}
               book = {book}
               ></HomeService>)
           }
           </Row>
           <button className="btn btn-primary mt-2 enroll-btn mb-5">See More </button>
           </div>

           <div className="container mt-5 mb-5">
           <h1 className="service-text mx-5">Why Choose Us ?</h1>
           <Row xs={1} md={2} className="container g-4 my-5">
                {
                    teachers.map(teacher => <HomeTeacher
                    key={teacher.key}
                    teacher = {teacher}
                    ></HomeTeacher>)
                }
            </Row>
           </div>
                    
        </div>
    );
};

export default Home;