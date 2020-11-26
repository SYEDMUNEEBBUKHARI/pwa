import React,{useState} from 'react';
import "./StepOne.scss";
import { Container, Form } from 'react-bootstrap';


function StepOne() {

    const [subService, setSubservice]=useState('subservice-tag');
    const [service, setService]=useState('service-tag');
    const [complaint, setComplaint]=useState('complaint-tag');

    const handelChange=(data)=>{
        console.log("data",data);
        const dataLength=document.getElementById(data).value;
        switch(data){

          case 'service':
            if(dataLength.length>0){
            setService('service-has-data');
            }
            else
            {
              setService('service-tag');
            }
          break;

          case 'subService':
            if(dataLength.length>0)
            {
            setSubservice('subservice-has-data');
            }
            else
            {
              setSubservice('subservice-tag');
            }
          break;

          case 'complaint':
            if(dataLength.length>0)
            {  
          setComplaint('complaint-has-data');
            }
            else
            {
              setComplaint('complaint-tag');
            }
          break;
          default:

            break;

        }

      }

    return (
       <>
            <Container>
                <div className="services-head">
                    <h5 className="mb-4">services & complaint</h5>
                </div>
              <Form autoComplete="off">
                <Form.Group controlId="service">
                    <Form.Label  className={service}>Service</Form.Label>
                    <Form.Control className="mb-3" type="text" onChange={(e)=>{handelChange(e.target.id)}} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="subService">
                <Form.Label className={subService}>Subservice</Form.Label>
                    <Form.Control className="mb-3" type="text" onChange={(e)=>{handelChange(e.target.id)}}/>
                </Form.Group>

                <Form.Group controlId="complaint">
                <Form.Label className={complaint}>Complaint</Form.Label>
                <Form.Control className="mb-3" as="textarea" rows={3} onChange={(e)=>{handelChange(e.target.id)}} />
                </Form.Group>
             </Form>
             </Container>
       </>
    )
}



export default StepOne