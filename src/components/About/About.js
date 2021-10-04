import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    
    return (
        <div>
            <Container>
            <Row className="about-us">
                <Col className="mt-5 mx-5">
                    <img className="about-img" src="https://media.istockphoto.com/photos/about-us-picture-id816887384?k=20&m=816887384&s=612x612&w=0&h=P3p2ciEwnLwDAK-7JoWZDTZJl9uRrJaGdLhuVbmMkJg=" alt="" srcset="" />
                </Col>
                <Col className="text-white mt-5">
                    <div className="about-text">
                    <h2>This About us</h2>
                    <p>Korean (Hankukmal 한국어/조선말) is the language of the Korean peninsula in northeast Asia. It is believed that the ancestors of the Korean people arrived in the Korean peninsula and in Manchuria around 4,000 BC. They displaced, or assimilated the earlier Paleosiberian-speaking settlers. Many small Korean tribal states were established in these locations between the 1st century BC and the 1st century AD.</p>
                    <p>The best way to learn Korean is to do a bit each day. For example, it's much better to study for 20 minutes a day than to study once a week fo</p>
                    </div>
                    
                </Col>
            </Row>
            </Container>
            
        </div>
    );
};

export default About;