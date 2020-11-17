import React,{useState,useEffect} from 'react';
import "./services.scss";
import Logo from "../../Assets/images/logo.png";
import SuggestedServices from "../suggestedServices/SuggestedServices";
import ServiceRating from "../servicesRating/serviceRating";

let servicesGroup=[
    {
  id:'cleaning',
  label:'Cleaning',
  img:'../../Assets/images/Carpentar.png'
    },
    {
    id:'plumber',
    label:'Plumber',
    img:'../../Assets/images/AcService.png'
    },
    {
      id:'electrician',
      label:'Electrician',
      img:'../../Assets/images/Carpentar.png'
    },
    {
      id:'handyman',
      label:'Handyman',
      img:'../../Assets/images/AcService.png'
    },
    {
      id:'carwash',
      label:'Car Wash',
      img:'../../Assets/images/Carpentar.png'
    },
    {
      id:'acservices',
      label:'Ac Services',
      img:'../../Assets/images/AcService.png'
    }

];

let cleaningServicesGroup=[
  {
  id:'Cleaning',
  label:'Cleaning',
  img:'../../Assets/images/Carpentar.png'
  },
  {
    id:'Ac Services',
    label:'Ac Services',
    img:'../../Assets/images/AcService.png'
    },
    {
      id:'Tap Fitting',
      label:'Tap Fitting',
      img:'../../Assets/images/Carpentar.png'
    },
    {
      id:'Car Wash',
      label:'Car Wash',
      img:'../../Assets/images/AcService.png'
    },
    {
      id:'Ac Servicesp',
      label:'Ac Services',
      img:'../../Assets/images/AcService.png'
    },
    {
      id:'Cleaningp',
      label:'Cleaning',
      img:'../../Assets/images/Carpentar.png'
    }

];

let electricianServicesGroup=[
  {
  id:'House Wiring',
  label:'House Wiring'
  },
  {
    id:'Bulb Repairing',
    label:'Bulb Repairing'
  },
  {
      id:'LED Light Repair',
      label:'LED Light Repair'
  },
  {
      id:'Ups Installation',
      label:'Ups Installation'
  },
  {
      id:'Ups Repair',
      label:'Ups Repair'
  },
  {
      id:'Fan Repair',
      label:'Fan Repair'
  }

];

function Services(props) {
  

  const [serviceComp, setServiceComp] = React.useState(<SuggestedServices cleaningServiceList={cleaningServicesGroup} />);
  useEffect(() => {
    });


        const serviceSelectionHandler=(e)=>{

            var header = document.getElementById(e.target.id);
console.log("tarfget",e.target.id)
                switch(e.target.id)
                {
                  case 'cleaning':
                    handelActiveClasses(e.target.id,header);
                   setServiceComp(<SuggestedServices cleaningServiceList={cleaningServicesGroup} />);

                  break;
                  case 'plumber':
                    handelActiveClasses(e.target.id,header);
                    setServiceComp(<SuggestedServices cleaningServiceList={cleaningServicesGroup} />);
                  break;
                  case 'electrician':
                    handelActiveClasses(e.target.id,header);
                    setServiceComp(<SuggestedServices cleaningServiceList={electricianServicesGroup} />);
                  break;
                  case 'handyman':
                    handelActiveClasses(e.target.id,header);
                    setServiceComp(<SuggestedServices cleaningServiceList={cleaningServicesGroup} />);
                  break;
                  case 'carwash':
                    handelActiveClasses(e.target.id,header);
                    setServiceComp(<SuggestedServices cleaningServiceList={cleaningServicesGroup} />);
                  break;
                  case 'acservices':
                    handelActiveClasses(e.target.id,header);
                    setServiceComp(<SuggestedServices cleaningServiceList={cleaningServicesGroup} />);
                  break;

                }
  

            }

            const handelActiveClasses=(data,header)=>{
              const DataArr=['cleaning','plumber','electrician','handyman','carwash','acservices'];
              var checkone=document.getElementById(data);
              checkone.classList.add("active");
                 for(var i=0; i<6; i++)
                 {
         
                   if(DataArr[i] != data){
                     var check=document.getElementById(DataArr[i]);
                     console.log("error",check)
                     if (check.classList.contains("active")) {
                     check.classList.remove("active");
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
                  {
                    servicesGroup.map((data,key)=>{
                      
                          return <a  onClick={(e)=>{serviceSelectionHandler(e)}} key={key} id={data.id} className={(data.id==="cleaning")?`${data.id} active`:`${data.id}`}>{data.label}</a>
                    
                    })
                  }
                </div>

              </div> 

         {serviceComp}
         <ServiceRating />
        </>
    );
}

export default Services;


// const menuRef = React.createRef(null);
//   let menu = menuRef.current;
//   if (menu) {
//     menu.getAttribute('id')
//   }
//   const val = menuRef.current;