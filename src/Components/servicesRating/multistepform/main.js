import React from 'react';
import Webicon from "../../../Assets/images/webicon.png";


import MultiStep from 'react-multistep'

import './css/skeleton.scss'
import StepOne from './stepOne'
import StepTwo from './stepTwo'
import StepThree from './stepThree'
import StepFour from './stepFour'

const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepThree /> },
  { component: <StepFour /> }
]

const prevStyle = {'background': '#33c3f0', 'borderWidth': '2px'}
const nextStyle = {'background': '#33c3f0',  'borderWidth': '2px'}



const MultiStepForm = () => (
  <div className='container'>
    <div className="order-top-img">
            <img className="img-fluid site-logo" src={Webicon} alt="order-logo" />
        </div>
    <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle}/>
    
  </div>
)

export default MultiStepForm;
