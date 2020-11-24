import React from 'react';
import "./flatlist.scss"

function FlatList(props){
    return(
           <>
             <div className="container ">
              <div className="scrolldate" id="scroll-date">

                  {
                    props.data.map((data,key) => (
                      <a className="active-date" 
                        key={key} >
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