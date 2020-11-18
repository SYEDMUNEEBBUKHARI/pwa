import React from 'react'
import { Container, Row } from 'react-bootstrap'

import TestimonialSlider from "../TestimonialSlider/TestimonialSlider"
import './AboutMrMahir.scss'
import About from "../../../Assets/images/about.jpg";

function AboutMrMahir() {
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
            <div className="about-mrmahir-head pt-5">
                <h3 className="text-center pb-3">About Mr. Mahir</h3>

                <div className="about-thumbnail">
                    <img src={About} />
                </div>
                <div className="inner-detail-mrmahir">
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            </Row>
            </Container>

            <TestimonialSlider />
        </React.Fragment>
    )
}




export default AboutMrMahir
