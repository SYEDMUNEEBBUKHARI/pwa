import React from 'react';
import "./orders.scss";
import Webicon from "../../Assets/images/webicon.png";
import { Container, Card, Button, Row  } from 'react-bootstrap'
import About from "../../Assets/images/about.jpg";

let activeOrders=[
    {
  title:'cleaning',
  subtitle:'Cleaning',
  description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  date: "12-Nov-2020"
    },
    {
    title:'cleaning',
    subtitle:'Sofa Cleaning',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: "12-Nov-2020"
    },
    {
      title:'cleaning',
      subtitle:'Sofa Cleaning',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: "12-Nov-2020"
    },
    {
      title:'cleaning',
      subtitle:'Sofa Cleaning',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: "12-Nov-2020"
    },
    {
      title:'cleaning',
      subtitle:'Sofa Cleaning',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: "12-Nov-2020"
    },
    {
      title:'cleaning',
      subtitle:'Sofa Cleaning',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: "12-Nov-2020"
    }

];

let previousOrders=[
    {
  title:'cleaning',
  subtitle:'Cleaning',
  description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  date: "12-feb-2020"
    },
    {
    title:'cleaning',
    subtitle:'Sofa Cleaning',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: "12-feb-2020"
    },
    {
      title:'cleaning',
      subtitle:'Sofa Cleaning',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: "12-feb-2020"
    },
    {
      title:'cleaning',
      subtitle:'Sofa Cleaning',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: "12-feb-2020"
    },
    {
      title:'cleaning',
      subtitle:'Sofa Cleaning',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: "12-feb-2020"
    },
    {
      title:'cleaning',
      subtitle:'Sofa Cleaning',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: "12-Nov-2020"
    }

];


function orders(){
    return(
        <React.Fragment>
            <div className="orders-head">
                <div className="order-top-img">
                    <img className="img-fluid site-logo" src={Webicon} alt="order-logo" />
                </div>
                <h3 className="text-center py-5">Your active orders</h3>
                <Container fluid>
                    {/* itme one */}
                    <Card className="background-color mb-3">
                    <img className="img-fluid about-left ml-1 pt-2" src={About} alt="order-logo" />

                    <Card.Body className="inner-media">
                            <Card.Title className="main-top-text">Cleaning</Card.Title>
                            <Card.Title className="date-orders">22 October 2020</Card.Title>
                        
                        <Card.Subtitle className="mb-2 text-muted bottom-text">Sofa Cleaning</Card.Subtitle>
                        <Card.Text className="description-media">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button className="btn-success status-btn" href="#">Status</Button>
                        <Button className="btn-danger cancel-btn" href="#">Cancel</Button>
                    </Card.Body>
                    </Card>
                    {/* end */}

                    {/* itme two */}
                    <Card className="background-color mb-3">
                    <img className="img-fluid about-left ml-1 pt-2" src={About} alt="order-logo" />

                    <Card.Body className="inner-media">
                        <Card.Title className="main-top-text">Cleaning</Card.Title>
                        <Card.Title className="date-orders">22 October 2020</Card.Title>

                        <Card.Subtitle className="mb-2 text-muted bottom-text">Sofa Cleaning</Card.Subtitle>
                        <Card.Text className="description-media">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button className="btn-success status-btn" href="#">Status</Button>
                        <Button className="btn-danger cancel-btn" href="#">Cancel</Button>
                    </Card.Body>
                    </Card>
                    {/* end */}


                    <h3 className="text-center mt-5 mb-5">Your Previous orders</h3>
                    {/* itme one */}
                    <Card className="background-color mb-3">
                    <img className="img-fluid about-left ml-1 pt-2" src={About} alt="order-logo" />

                    <Card.Body className="inner-media">
                        <Card.Title className="main-top-text">Cleaning</Card.Title>
                        <Card.Title className="date-orders">22 October 2020</Card.Title>

                        <Card.Subtitle className="mb-2 text-muted bottom-text">Sofa Cleaning</Card.Subtitle>
                        <Card.Text className="description-media">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button className="btn-success completed-btn" href="#">completed</Button>
                        <Button className="btn-danger review-btn" href="#">review</Button>
                    </Card.Body>
                    </Card>
                    {/* end */}

                    {/* itme two */}
                    <Card className="background-color mb-3">
                    <img className="img-fluid about-left ml-1 pt-2" src={About} alt="order-logo" />

                    <Card.Body className="inner-media">
                        <Card.Title className="main-top-text">Cleaning</Card.Title>
                        <Card.Title className="date-orders">22 October 2020</Card.Title>

                        <Card.Subtitle className="mb-2 text-muted bottom-text">Sofa Cleaning</Card.Subtitle>
                        <Card.Text className="description-media">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button className="btn-success completed-btn" href="#">completed</Button>
                        <Button className="btn-danger review-btn" href="#">review</Button>
                    </Card.Body>
                    </Card>
                    {/* end */}


                    {/* itme three */}
                    <Card className="background-color last-card">
                    <img className="img-fluid about-left ml-1 pt-2" src={About} alt="order-logo" />

                    <Card.Body className="inner-media">
                        <Card.Title className="main-top-text">Cleaning</Card.Title>
                                                    <Card.Title className="date-orders">22 October 2020</Card.Title>

                        <Card.Subtitle className="mb-2 text-muted bottom-text">Sofa Cleaning</Card.Subtitle>
                        <Card.Text className="description-media">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button className="btn-success completed-btn" href="#">completed</Button>
                        <Button className="btn-danger review-btn" href="#">review</Button>
                    </Card.Body>
                    </Card>
                    {/* end */}

                   
                </Container>
            </div>
        </React.Fragment>
    );
}

export default orders;