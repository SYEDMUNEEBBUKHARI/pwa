import React from 'react';
import "./DownloadOurApp.scss";
import { Container, Row, Col } from 'react-bootstrap'
import Suggestedtwo from "../../../Assets/images/suggested-services/Suggestedtwo.jpg";
import OneCallFixIt from '../OneCallFixIt/OneCallFixIt';



function DownloadOurApp() {
    return (
        <React.Fragment>
            <div className="service-rating">
    <Container>
            <Row className="justify-content-md-center">
                <Col lg xs="6">
                <div className="successful">
                    <p className="download-text">Download our<br /> mobile app</p>
                    <p className="desribe">but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="btn-group">
                <button className="playstore">Get it on<br /> Playstore</button>
                <button className="appstore">Get it on<br /> Appstore</button>
                </div>
                </Col>
            
                <Col lg xs="6">
               <img src={Suggestedtwo} alt="app icon" className="service-rating-image" />
                </Col>
            </Row>
            
  </Container>
  </div>

  <OneCallFixIt />
        </React.Fragment>
    )
}



export default DownloadOurApp
