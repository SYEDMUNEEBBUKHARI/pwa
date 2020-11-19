import React,{useState,useEffect} from "react";
import "./bookmodal.scss";
import {Modal} from 'react-bootstrap';
import MultiStep from "../multistepform/main";
function BookModal(props){
    const [lgShow, setLgShow] = useState(props.flag);
  
   
  

    useEffect(()=>{
     console.log("flag",lgShow);
    })
   
return(
<>
      
      <Modal show={lgShow} onHide={props.close} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">

            <MultiStep />

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>

    </>
);

}

export default BookModal;
