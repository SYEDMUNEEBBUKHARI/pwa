import React from 'react';
import "./StepFour.scss";
import { AiOutlineCheck, AiOutlineBranches } from "react-icons/ai";
import { Row, Col } from 'react-bootstrap';
import {BsTools} from "react-icons/bs";
import {Redirect} from "react-router-dom";
import { useHistory } from "react-router-dom";



function StepFour() {
    let history = useHistory();
    const handelOrderStatus=()=>{
     
        console.log("clicked");
       history.push('/orderstatus');
    }
    return (
        <>
        <div className="main-partition">
            <AiOutlineCheck className="check"/>
            <h5 className="mb-4 appreciation">Thank You!</h5>



            <Row>
                <Col lg xs="6">
                    <div className="text-left mb-3">
                        <h6><b>Name</b></h6>
                        <h6 className="not-bold">Lorem Ipsum</h6>
                    </div>
                    
                </Col>

                <Col lg xs="6">
                <div className="text-left right-division">
                        <h6><b>Phone No</b></h6>
                        <h6 className="not-bold">0300 1234567</h6>
                    </div>
                </Col>
           
                <Col lg xs="6">
                    <div className="text-left mb-3">
                        <h6><b>Service</b></h6>
                        <h6 className="not-bold">Cleaning</h6>
                    </div>
                    
                </Col>

                <Col lg xs="6">
                <div className="text-left right-division">
                        <h6><b>Subservice</b></h6>
                        <h6 className="not-bold">Sofa Cleaning</h6>
                    </div>
                </Col>
           
                <Col lg xs="6">
                    <div className="text-left mb-3">
                        <h6><b>Date</b></h6>
                        <h6 className="not-bold">22 Oct, 2020</h6>
                    </div>
                    
                </Col>

                <Col lg xs="5">
                <div className="text-left right-division">
                        <h6><b>Time</b></h6>
                        <h6 className="not-bold">12:30 PM</h6>
                    </div>
                </Col>
            
                <Col lg xs="12">
                    <div className="text-left">
                        <h6><b>Address</b></h6>
                        <p className="not-bold">33/F Johar Town, Lahore</p>
                    </div>
                    
                </Col>
            </Row>


            <Row className="mt-4 mb-5">
                <Col lg xs="5">
                    <div className="text-left" onClick={handelOrderStatus}>
                        <h6><b><AiOutlineBranches className="tracking-icon" /></b></h6>
                        <h6 className="bold">Track Order</h6>
                    </div>
                </Col>

                <Col lg xs="7">
                <div className="text-left right-division">
                    <h6><b><BsTools className="service-icon"/></b></h6>
                        <h6 className="bold">More Services</h6>
                    </div>
                </Col>
            </Row>

        </div>
        </>
    )
}




export default StepFour