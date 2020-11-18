import React from 'react'
import cleaning from "../../../Assets/images/cleaning.png";
import Carwash from "../../../Assets/images/Carwash.png";
import Plumber from "../../../Assets/images/Plumber.png";
import Electric from "../../../Assets/images/Electric.png";
import Carpenter from "../../../Assets/images/Carpenter.png";
import Handyman from "../../../Assets/images/Handyman.png";
import ACService from "../../../Assets/images/ACService.png";

import './OurServices.scss'
import { Container, Row } from 'react-bootstrap'
import SuggestedServices from "../SuggestedServices/SuggestedServices";

function OurServices() {
    return (
        <React.Fragment>
            <div className="service-head pt-2">
                <h3 className="text-center pb-3">Our Services</h3>
            </div>

            <div className="services-showcase mx-3 pt-4">
            <Container fluid>
                <Row>
                    <div className="service-grid">
                    <img className="img-fluid cleaner" alt="cleaning" src={cleaning} />
                    <p>Cleaning</p>
                    </div>

                    <div className="service-grid">
                    <img className="img-fluid carwash" alt="carwash" src={Carwash} />
                    <p>Car Wash</p>
                    </div>

                    <div className="service-grid">
                    <img className="img-fluid plumber" alt="plumber" src={Plumber} />
                    <p>Plumber</p>
                    </div>

                    <div className="service-grid">
                    <img className="img-fluid electric" alt="electric" src={Electric} />
                    <p>Carpenter</p>
                    </div>
                </Row>

                <Row className="row pb-1 pt-3">
                    <div className="service-grid-bottom">
                    <img className="img-fluid carpenter" alt="carpenter" src={Carpenter} />
                    <p>Carpenter</p>
                    </div>

                    <div className="service-grid-bottom">
                    <img className="img-fluid handyman" alt="handyman" src={Handyman} />
                    <p>Handyman</p>
                    </div>

                    <div className="service-grid-bottom">
                    <img className="img-fluid acservice" alt="cleaning" src={ACService} />
                    <p>AC Services</p>
                    </div>
                </Row>
                
                </Container>
            </div>
            
            <SuggestedServices />
        </React.Fragment>
    )
}


export default OurServices