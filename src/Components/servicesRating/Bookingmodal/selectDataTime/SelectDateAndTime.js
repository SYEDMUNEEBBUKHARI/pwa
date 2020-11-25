import React,{useEffect, useState} from 'react';
import "./date&time.scss";
import moment from "moment";
import FlatList from "../../FlatList/FlatList";
import ChooseTime from "../../chooseTime/ChooseTime";
function DateAndTimeSelection(){
    

    return(
        <React.Fragment>
            
                <h5 className="text-center">CHOOSE DATE</h5>
                
                 <FlatList   /> 
                 <h5 className="text-center">CHOOSE Time</h5>
               
               <ChooseTime />
      
        </React.Fragment>
    );
}

export default DateAndTimeSelection;