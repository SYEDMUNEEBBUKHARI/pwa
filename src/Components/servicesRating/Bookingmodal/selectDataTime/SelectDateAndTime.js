import React,{useEffect, useState} from 'react';
import "./date&time.scss";
import moment from "moment";
import FlatList from "../../FlatList/FlatList";
import ChooseTime from "../../chooseTime/ChooseTime";
import {BsFillImageFill} from "react-icons/bs";
function DateAndTimeSelection(){
    const [dimmerInput, setDimmerInput]=useState('dimmer-tag');
    const [messageTag, setMessageTag]=useState('message-tag');



    const handelChange=(data)=>{
        console.log("data",data);
        const dataLength=document.getElementById(data).value;
        switch(data){
        
        case 'dimmerInput':
        if(dataLength.length>0){
            setDimmerInput('dimmer-has-data');
        }
        else
        {
            setDimmerInput('dimmer-tag');
        }
        break;
        default:
        break;
        case 'messageInput':
            if(dataLength.length>0){
                setMessageTag('message-has-data');
            }
            else
            {
                setMessageTag('message-tag');
            }
        break;

        }
        
        }




    return(
        <React.Fragment>
            
                
            
                <div className="wrapper">
                    <div className="subservice-name text-left mb-3 ">Electrician</div>
                    <div></div>
                    <div className="text-right"><button className="adds-on ">Adds on</button></div>
                </div>
                   
                <div className="text-left mb-3 dim-input-label">
                    <p className={dimmerInput}>Enter no of Dimmer</p>
                    <input id="dimmerInput" type="text"   onChange={(e)=>{handelChange(e.target.id)}} className="dimmer-input"/>
                </div>
                <div className="price-grid mb-2">
                    <div  className="text-left"> Price starting from: </div>
                    <div className="price"> Rs. 200 </div>

                </div>
                <div className="price-grid mb-3">
                    <div className="text-left"> Your total price: </div>
                    <div className="price"> Rs. 1000 </div>

                </div>
                


                 <FlatList   /> 
                
               
                 <ChooseTime />
                 <div className="mb-4">
                    <div className="text-left">Message <span className="optional-span">(optional)</span></div>
                <div>
                   <div className="message-box text-left"> 
                   <label className={messageTag}>Your Message</label>
                  <div>
                   <input type="text" id="messageInput" onChange={(e)=>{handelChange(e.target.id)}} className="message-text-input text-left"/>
                   </div>
                   </div>
                   
                </div>
                </div>

                <div className="mb-4 picture-upload-grid">
                    <div className="text-left">Picture <span className="optional-span">(optional)</span></div>
                <div className="text-right"><button className="upload-picture" ><BsFillImageFill className="upload-img-icon mr-2" />upload pic</button></div>
                </div>
      
        </React.Fragment>
    );
}

export default DateAndTimeSelection;