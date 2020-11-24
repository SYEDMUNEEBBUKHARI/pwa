import React,{useState,useEffect} from "react";
import {  Route, Switch, Redirect } from "react-router-dom";
import "./bookmodal.scss";
import {Card, Modal, Button} from 'react-bootstrap';
import Webicon from "../../../Assets/images/webicon.png";
import { CgClose } from "react-icons/cg";
// import { Stepper } from 'react-form-stepper';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import DateAndTimeSelection from "./selectDataTime/SelectDateAndTime";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


function getSteps() {
  return ['', '', '', ''];
}


function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'SERVICES & COMPLAINT';     
    case 1:

      return <span><DateAndTimeSelection /></span>;
    case 2:
      return 'CONTACT DETAIL';
    default:
      return 'THANK YOU';
  }
}

function BookModal({match}){
  console.log(match)
return(
  <>
    <Switch>
      <Route path='/booking/service'  component={() => <p>Service Component</p>} />
      <Route path='/booking/sub-service'  component={() => <p>Sub Service Component</p>} />
      <Redirect to='/booking/service' />
    </Switch>
  </>
);

}




export default BookModal;



