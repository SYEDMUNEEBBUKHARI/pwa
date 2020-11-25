import React,{useState,useEffect} from 'react';
import "./flatlist.scss";
import moment from "moment";

function FlatList(props){
  const [generatedDates, setGeneratedDates] = useState([
    moment().format('DD-MMM'),
    ]);
    
   useEffect(()=>{
    if(generatedDates.length<2  )
    {
      generateDatesForList();
    }
   })
    
    const generateDatesForList = (end = 10) => {
      console.log("reached");

      let __dates = [...generatedDates];
      let _date = moment(__dates[__dates.length - 1]);
  
      for (var i = 1; i <= end; i++) {
        __dates.push(_date.add(1, 'd').format('DD-MMM'));
      }
  
      setGeneratedDates(__dates);

    };
    
    
    
    const checkEnd=(key)=>{
     

                          }
                    
      const onScroll = e => {
       
        const Element=document.getElementById("scroll-date");
        const findScrolWidth=Element.scrollWidth;
        var styles = getComputedStyle(Element);
        console.log("maxscrollLeft",Element.scrollLeft);

    const clientWidth=Element.clientWidth
  - parseFloat(styles.paddingLeft)
  - parseFloat(styles.paddingRight)
      ;

      var maxScrollLeft = findScrolWidth -clientWidth;
      console.log("maxscroll",maxScrollLeft);

      if(maxScrollLeft===Element.scrollLeft)
      {
        generateDatesForList();
      }
      };
    return(
           <>
             <div className="container ">
                    <div className="scrolldate"  id="scroll-date" onScroll={onScroll}>
                            {
                               generatedDates.map((data,key) => (
                                <a className="active-date" id="s"
                                  key={key} onClick={()=>{checkEnd(key)}} >
                                  {data}
                                </a>
                              ))
                            }
                    </div>

                  </div> 
            </>
             );
                     }

export default FlatList;