import React,{useEffect, useState} from "react";
import "./choosetime.scss";
import moment from 'moment';

function ChooseTime(){
    const [generatedTimes, setGeneratedTimes] = useState([moment().format('hh:mm A')]);
    useEffect(()=>{
        if(generatedTimes.length < 2)
        {
            generateTimesForList();
        } 
    });
    const adjustTime=(hour,min,dayornight)=>{
      console.log("hour",dayornight)
      let makeMultiple=Math.ceil(min/15)*15;
    
      var format = 'hh:mm A';

          // var time = moment() gives you current time. no format required.
          var time = moment(`${hour}:${min} ${dayornight}`,format),
            beforeTime = moment('10:45 PM', format),
            afterTime = moment();

          if (time.isBetween(beforeTime, afterTime)) {

            console.log('is between');
            return({hour:'08',makeMultiple:'30',dayornight:'AM'});        

          } else {

            console.log('is not between',hour,":",min,":",dayornight);
     
            
            return({hour,min,dayornight});        

          }


    }
     const generateTimesForList = () => {
      const currentHour=moment().format('hh');
      const currentMinute=moment().format('mm');
      const amOrPm=moment().format('A');
      let data=adjustTime('01','40','PM');
      console.log("current",data)
        let _time = moment({hour: data.hour, minutes: data.makeMultiple});
        let __times = [_time.format('hh:mm A')];
    
        while (_time.format('hh:mm A') !== '10:45 PM') {
          __times.push(_time.add(15, 'm').format('hh:mm A'));
        }
    
        setGeneratedTimes(__times);
      };
      const onScroll = e => {
      
    }
return(
    <>
     <h5 className="text-center">CHOOSE TIME</h5>
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