import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
             
           <div className="container mt-5 mb-5">
           <h1 className="full-service mx-5">Why Choose Us ? See Our Course Plan </h1>
           <Row xs={1} md={4} className="container g-4 my-5 ">
                {
                    services.map(service => <Service
                    key={service.key}
                    service = {service}
                    ></Service>)
                }
            </Row>
            </div>
        </div>
    );
};

export default Services;