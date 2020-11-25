import React,{useState,useEffect} from "react";
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

function BookModal(props){
    const [lgShow, setLgShow] = useState(props.flag);
  
    useEffect(()=>{
    })
    


    const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  

   
return(
<>
      <Modal show={lgShow} onHide={props.close} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header>
            <div className="order-top-img">
              <img className="img-fluid booking-icon-top" src={Webicon} alt="order-logo" />
            </div>

            {/* <MultiStep /> */}
           
        </Modal.Header>
        <Modal.Body>
            <Card>
              <Card.Body>

              <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label,key) => (

          <Step key={label+"-"+key}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button  className="cross-btn" onClick={handleReset}><CgClose /></Button>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>{getStepContent(activeStep)}</div>
            <div className="btns-group">
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>

              <Button
                
                onClick={handleBack}
                className={classes.backButton}
              >
                Cancel
              </Button>
              
            </div>
          </div>
        )}
      </div>
    </div>

    
             
              </Card.Body>
            </Card>

        </Modal.Body>
      </Modal>

    </>
);

}




export default BookModal;



