import React from 'react'
import Suggestedone from "../../../Assets/images/suggested-services/Suggestedone.jpg";
import Suggestedtwo from "../../../Assets/images/suggested-services/Suggestedtwo.jpg";

import { Container, Row } from 'react-bootstrap'
import './SuggestedServices.scss'
import AboutMrMahir from '../AboutMrMahir/AboutMrMahir';

function SuggestedServices() {
    return (
        <React.Fragment>
            <div className="suggested-service pt-5">
                <h2 className="text-center pb-3">Suggested Services</h2>
      
            <div className="services-we-provide">
                 <Container fluid>
                 <Row>
                    <div className="service-suggested-grid">
                    <img className="img-fluid suggestedcleaning" alt="suggested cleaning" src={Suggestedone} />
                    <p>Cleaning</p>
                    </div>

                    <div className="service-suggested-grid">
                    <img className="img-fluid suggestedacservice" alt="suggested acservice" src={Suggestedtwo} />
                    <p>AC Services</p>
                    </div>

                    <div className="service-suggested-grid">
                    <img className="img-fluid suggestedcleaning" alt="suggested cleaning" src={Suggestedone} />
                    <p>Tap Fitting</p>
                    </div>

                    <div className="service-suggested-grid">
                    <img className="img-fluid suggestedacservice" alt="suggested acservice" src={Suggestedtwo} />
                    <p>Car Wash</p>
                    </div>
                </Row>

                </Container>
            </div>
            </div>

            <AboutMrMahir />
        </React.Fragment>
    )
}


export default SuggestedServices
