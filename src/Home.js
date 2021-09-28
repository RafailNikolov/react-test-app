import React, { useEffect } from "react";
import { Row, Col, Container, Image } from 'react-bootstrap';
import homeImage from "./assets/technology.jpg";
import { useState } from "react";

export const Home = ({lang}) => {

    const [ seconds, setSeconds ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
          console.log('asdads');
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
        <React.Fragment>
            <Row style={{"textAlign" : "center"}} >
                <h1>{lang.title}</h1>
            </Row>

            <Row style={{"textAlign" : "center"}} >
                <h1>{ seconds }</h1>
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