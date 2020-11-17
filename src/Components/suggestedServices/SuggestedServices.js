import React from 'react'
import Suggestedone from "../../Assets/images/suggested-services/Suggestedone.jpg";
import Suggestedtwo from "../../Assets/images/suggested-services/Suggestedtwo.jpg";
import Carpentar from "../../Assets/images/Carpentar.png";
import Ac from "../../Assets/images/ACService.png";

import "./suggestedServices.scss";
import {Container,Row} from'react-bootstrap';
function SuggestedServices(props) {
    return (
        <>
            <div className="suggested-service">
      
            <div className="services-we-provide">
                 <Container fluid>
                 <Row>
                    {
                    props.cleaningServiceList.map((data,key)=>{
                   return (
                   <div className="service-suggested-grid" key={`${data.id}`}>
                   
                    <img className="img-fluid suggestedcleaning" alt="suggested cleaning" src={Suggestedtwo} />
                    <p className="suggested-service-title">{data.id}</p>
                   
                    </div>)
                    })
                    }

                </Row>

                </Container>
            </div>
            </div>

            {/* <AboutMrMahir /> */}
        </>
    )
}


export default SuggestedServices