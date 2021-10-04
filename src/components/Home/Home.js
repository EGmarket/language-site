import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeService from '../HomeService/HomeService';
import Welcome from '../Welcome/Welcome';
import './Home.css'

const Home = () => {
    const [books,setBooks] = useState([]);
    
    //Showing Service using useEffect
    useEffect(()=>{
        fetch('./books.JSON')
        .then(res => res.json())
        .then(data =>setBooks(data))
    },[])

   
    return (
        <div> 
           <Welcome></Welcome>
           <div className="container">
               <h1 className="service-text">Our Simple Course Line Make you Master in Korean</h1>
           <Row xs={1} md={4} lg={4} className="container g-4 my-5 service">         
           {
               books.map(book =><HomeService
               key = {book.key}
               book = {book}
               ></HomeService>)
           }
           </Row>
           <Link to="/services">
           <button className="btn btn-primary mt-2 enroll-btn mb-5">See More </button>
           </Link>
           
           </div>
                
        </div>
    );
};

export default Home;