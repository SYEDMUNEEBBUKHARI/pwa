import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import "./serviceRating.scss";
import {RiStarSFill} from "react-icons/ri";
import {RiStarHalfFill} from "react-icons/ri" 
import Servicesuccess from "../../Assets/images/successrating.jpg";
import {HiOutlineHome} from "react-icons/hi";
 function ServiceRating(props){

    const openBookForm=()=>{
props.popmodal();
}
   
return(
    <div className="service-rating-component">
    <div>
        <h3 className="text-center mt-5 pb-2 service-rating-title">SERVICE RATING</h3>
    </div>
    <div className="service-rating">
    <Container>
            <Row className="justify-content-md-center">
                <Col lg xs="6">
                <div className="successful">
                    <p><b  className="order-title">SUCCESSFULL ORDERS</b></p>
                        <span><RiStarSFill className="star" /></span>
                        <span><RiStarSFill className="star" /></span>
                        <span><RiStarSFill className="star" /></span>
                        <span><RiStarSFill className="star" /></span>
                        <span><RiStarHalfFill className="half-star" /></span>
                    <h4 className="mt-2"><b>4.7/5</b></h4 >
                    <span>based on 195 Ratings</span>
                </div>
                <button className="booking-process" onClick={()=>openBookForm()}>Book Now</button>
                </Col>
            
                <Col lg xs="6">
               <img src={Servicesuccess}  className="service-rating-image" />
                </Col>
            </Row>
  </Container>
    </div>
    </div>
);
}

export default ServiceRating;