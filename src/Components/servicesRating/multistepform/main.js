import React from 'react'

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
    
    <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle}/>
    
  </div>
)

export default MultiStepForm;
