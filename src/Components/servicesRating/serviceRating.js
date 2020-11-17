import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import "./serviceRating.scss";
import {RiStarSFill} from "react-icons/ri";
import {RiStarHalfFill} from "react-icons/ri" 
import Servicesuccess from "../../Assets/images/successrating.jpg";
import {HiOutlineHome} from "react-icons/hi"
 function serviceRating(){
return(
    <>
    <div>
        <h5 className="text-center service-rating-title"><b>SERVICE RATING</b></h5>
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

                    <h5><b>4.7/5</b></h5 >
                   based on 195 Tags
                </div>
                <button className="book">Book Now</button>
                </Col>
            
                <Col lg xs="6">
               <img src={Servicesuccess}  className="service-rating-image" />
                </Col>
            </Row>
  </Container>
    </div>
    </>
);
}

export default serviceRating;