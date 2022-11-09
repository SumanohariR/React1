import React from 'react';
import '../index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function menuComponents(props) {
    return (
            <Container  key={props.id} className="m-auto p-0 d-flex justify-content-center " >
                <Row className="col-10 justify-content-space-between mt-5" >
                    <Col className="col-2 ms-0">
                    <img src= {props.image} /> 
                    </Col>
                    <Col className="col-10 row  justify-content-center">
                        <h1 >{props.name}</h1>
                        <p>{props.description}</p>
                    </Col>
                </Row>
            </Container>
        
    )

}
