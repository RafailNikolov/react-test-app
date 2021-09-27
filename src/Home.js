import React from "react";
import { Row, Col, Container, Image } from 'react-bootstrap';
import homeImage from "./assets/technology.jpg"

export const Home = ({lang}) => {
    return (
        <React.Fragment>
            <Row style={{"text-align" : "center"}} >
                <h1>{lang.title}</h1>
            </Row>
            
            <Row>
                <Col lg={6}>
                    <Image src={homeImage} fluid></Image>
                </Col>
                <Col lg={6} style={{"margin": "auto"}}>
                    {lang.text}
                </Col>
            </Row>
           
        </React.Fragment>
    )
}