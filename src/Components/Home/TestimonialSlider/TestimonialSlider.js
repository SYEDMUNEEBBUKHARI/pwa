import React from 'react';
import "./TestimonialSlider.scss";
import DownloadOurApp from '../DownloadOurApp/DownloadOurApp';

// Import css files
import { Carousel, Card, Container } from 'react-bootstrap'
import Test from "../../../Assets/images/test.png";
import {RiStarSFill, RiStarHalfFill} from "react-icons/ri";



function TestimonialSlider() {
   

    return (
        <>
            <Container fluid>
            <div className="testimonial-head pt-5">
            <h3 className="text-center pb-3">Testimonial</h3>
            <Carousel >
            <Carousel.Item>
             <Card className="text-center testimonial-top">
            <Card.Body className="testimonial-inner">
            <img className="img-fluid  testimonial-icons" alt="testimonials" src={Test} />

                <Card.Title>Lorem ipsum</Card.Title>
                <span><RiStarSFill className="star" /></span>
                    <span><RiStarSFill className="star" /></span>
                    <span><RiStarSFill className="star" /></span>
                    <span><RiStarSFill className="star" /></span>
                    <span><RiStarHalfFill className="half-star" />
                </span>
                <Card.Text className="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Card.Text>
            </Card.Body>
            </Card>
               
            </Carousel.Item>



            <Carousel.Item>
                        <Card className="text-center testimonial-top">
            <Card.Body className="testimonial-inner">
            <img className="img-fluid  testimonial-icons" alt="testimonials" src={Test} />

                <Card.Title>Lorem ipsum</Card.Title>
                <span>
                    <RiStarSFill className="star" /></span>
                    <span><RiStarSFill className="star" /></span>
                    <span><RiStarSFill className="star" /></span>
                    <span><RiStarSFill className="star" /></span>
                    <span><RiStarHalfFill className="half-star" />
                </span>
                <Card.Text className="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Card.Text>
            </Card.Body>
           
            </Card>
               
            </Carousel.Item>

           
        </Carousel>
            </div>
            </Container>
            <DownloadOurApp />
        </>
    )
}




export default TestimonialSlider