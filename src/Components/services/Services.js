import React,{useState,useEffect} from 'react';
import "./services.scss";
import Logo from "../../Assets/images/logo.png";
import SelectService from "../selectService/SelectService";

function Home(props) {

  useEffect(() => {
    const val=document.querySelectorAll('.scrollmenu a[id]');
    });
    let LoadComponent;
const serviceSelectionHandler=(e)=>{

  var header = document.getElementById(e.target.id);

  switch(e.target.id)
  {
    case 'cleaning':
      handelActiveClasses(e.target.id,header);
      LoadComponent=<SelectService />;

    break;
    case 'plumber':
      handelActiveClasses(e.target.id,header);

    break;
    case 'electrician':
      handelActiveClasses(e.target.id,header);

    break;
    case 'handyman':
      handelActiveClasses(e.target.id,header);

    break;
    case 'carwash':
      handelActiveClasses(e.target.id,header);

    break;
    case 'acservices':
      handelActiveClasses(e.target.id,header);

    break;

  }
  

}

const handelActiveClasses=(data,header)=>{
   
   const DataArr=['cleaning','plumber','electrician','handyman','carwash','acservices'];

for(var i=0; i<6; i++)
{
  if(DataArr[i] === data){

    console.log("red",DataArr[i]);
    header.classList.add("active");


  }
  else{
    if (header.classList.contains("active")) {
      header.classList.remove("active");
    }

  }
}
}
  
    return(
        <>
          <div className="services">
            <img className="site-logo" src={Logo} alt=" disappear"/>
          </div>
          <div className="container ">
          <div className="scrollmenu" id="scroll-nav">
            <a onClick={(e)=>{serviceSelectionHandler(e)}} id="cleaning " className="cleaning active">Cleaning</a>
            <a onClick={(e)=>{serviceSelectionHandler(e)}} id="plumber" className="plumber">Plumber</a>
            <a onClick={(e)=>{serviceSelectionHandler(e)}} id="electrician" className="electrician">Electrician</a>
            <a onClick={(e)=>{serviceSelectionHandler(e)}} id="handyman" className="handyman">Handyman</a>
            <a onClick={(e)=>{serviceSelectionHandler(e)}} id="carwash" className="carwash">Car Wash</a>
            <a onClick={(e)=>{serviceSelectionHandler(e)}} id="acservices" className="acservices">Ac Services</a>
            
          </div>
          </div>

          {LoadComponent}
        </>
    );
}

export default Home;