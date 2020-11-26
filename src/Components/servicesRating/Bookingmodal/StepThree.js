import React,{useState} from 'react';
import "./StepThree.scss";
import { Container, Form } from 'react-bootstrap';

function StepThree() {
    const [name, setName]=useState('name-tag');
    const [phonenumber, setPhone]=useState('phonenumber-tag');
    const [city, setCity]=useState('city-tag');
    const [address, setAddress]=useState('address-tag');

    const handelChange=(data)=>{
        console.log("data",data);
        const dataLength=document.getElementById(data).value;
        switch(data){

          case 'name':
            if(dataLength.length>0){
             setName('name-has-data');
            }
            else
            {
                setName('name-tag');
            }
          break;

          case 'phonenumber':
            if(dataLength.length>0)
            {
                setPhone('phonenumber-has-data');
            }
            else
            {
                setPhone('phonenumber-tag');
            }
          break;

          case 'city':
            if(dataLength.length>0)
            {  
                setCity('city-has-data');
            }
            else
            {
                setCity('city-tag');
            }
          break;

          case 'address':
            if(dataLength.length>0)
            {  
                setAddress('address-has-data');
            }
            else
            {
                setAddress('address-tag');
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
                    <h5 className="mb-4">Contact Detail</h5>
                </div>
              <Form autoComplete="off">
                <Form.Group controlId="name">
                    <Form.Label  className={name}>Name</Form.Label>
                    <Form.Control className="mb-3" type="text" onChange={(e)=>{handelChange(e.target.id)}} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="phonenumber">
                <Form.Label className={phonenumber}>Phone number</Form.Label>
                    <Form.Control className="mb-3" type="text" onChange={(e)=>{handelChange(e.target.id)}}/>
                </Form.Group>

                <Form.Group controlId="city">
                <Form.Label className={city}>City</Form.Label>
                    <Form.Control className="mb-3" type="text" onChange={(e)=>{handelChange(e.target.id)}}/>
                </Form.Group>

                <Form.Group controlId="address">
                <Form.Label className={address}>Address</Form.Label>
                    <Form.Control className="mb-3" type="text" onChange={(e)=>{handelChange(e.target.id)}}/>
                </Form.Group>
             </Form>
             </Container>
       </>
        
    )
}





export default StepThree