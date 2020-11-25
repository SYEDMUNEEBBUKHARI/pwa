import React,{useEffect, useState} from "react";
import "./choosetime.scss";
import moment from 'moment';

function ChooseTime(){
    const [generatedTimes, setGeneratedTimes] = useState([]);
useEffect(()=>{
    if(generatedTimes.length<2)
    {
        generateTimesForList();
    }
})
    const generateTimesForList = () => {
        let _time = moment({hour: 8, minutes: 0});
        let __times = [_time.format('hh:mm A')];
    
        while (_time.format('HH:mm:ss') !== '21:45:00') {
          __times.push(_time.add(15, 'm').format('hh:mm A'));
        }
    
        setGeneratedTimes(__times);
      };
      const onScroll = e => {
      
    }
return(
    <>
    <div className="container ">
                    <div className="scrolltime"  id="scroll-time" onScroll={onScroll}>
                            {
                              generatedTimes.map((data,key) => (
                                <a className="active-time" id="s"
                                  key={key}  >
                                  {data}
                                </a>
                              ))
                            }
                    </div>

                  </div> 
    </>
);

}


export default ChooseTime;