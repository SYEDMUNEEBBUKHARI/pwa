import React,{useState} from 'react';
import "./date&time.scss";
import FlatList from "../../FlatList/FlatList";
import moment from "moment";
function DateAndTimeSelection(){
    const [generatedDates, setGeneratedDates] = useState([
        moment().format('DD-MMM'),
      ]);
    return(
        <React.Fragment>
            {console.log("generated dates",generatedDates)}
            <h5 className="text-center">CHOOSE DATE</h5>
           <FlatList  data={generatedDates} />
        </React.Fragment>
    );
}

export default DateAndTimeSelection;