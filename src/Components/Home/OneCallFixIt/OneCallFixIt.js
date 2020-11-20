import React from 'react';
import "./OneCallFixIt.scss";
import Mahir from "../../../Assets/images/mahir-bottom.png";
import { Container, Col, Row, Form } from 'react-bootstrap';
import { RiFacebookCircleLine, RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";

    
 const OneCallFixIt = props => {
        const [selectedfirst, setSelectedOption] = React.useState("A");
      
        if (selectedfirst === "A") {
        } else if (selectedfirst === "B") {
        }




    return (
        <React.Fragment>
                <div className="one-call-head py-4">
                    <Container fluid>
                    <Row className="justify-content-md-center mb-4">
                    <Col lg xs="6">
                        <img src={Mahir} alt="mahir icon" className="mahir-bottom-icon" />
                    </Col>

                    <Col lg xs="6">
                        <div className="right-socials-bottom">
                        <RiFacebookCircleLine />
                        <RiInstagramFill />
                        <AiFillTwitterCircle />
                        <FiLinkedin className="linkedin" />
                        </div>
                    </Col>
                    </Row>

                        <h4 className="text-center pb-3 one-call">One Call Fix It All</h4>

                    <div className="services-selection text-center">
                        <div className="filters">
                            <select className="mb-3"
                                value={selectedfirst}
                                onChange={evt => setSelectedOption(evt.target.value)} 
                            >
                                <option value="About" id={1}>
                                About
                                </option>
                                <option value="Mahir" id={2}>
                                Mahir
                                </option>
                            </select>

                            <select className="mb-3"
                                value={selectedfirst}
                                onChange={evt => setSelectedOption(evt.target.value)} 
                            >
                                <option value="A" id={1}>
                                Services
                                </option>
                                <option value="B" id={2}>
                                Mahir
                                </option>
                            </select>


                            <select
                                value={selectedfirst}
                                onChange={evt => setSelectedOption(evt.target.value)} 
                            >
                                <option value="A" id={1}>
                                Portfolio
                                </option>
                                <option value="B" id={2}>
                                Mahir
                                </option>
                            </select>
                         </div>

                         <h5 className="mt-5 last-heads">All Rights Reserved Mr Mahir</h5>

                    </div>
                    </Container>

                </div>
        </React.Fragment>
    )
}






export default OneCallFixIt
