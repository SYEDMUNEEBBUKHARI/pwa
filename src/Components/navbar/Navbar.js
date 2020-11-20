import React,{useEffect} from 'react';
import "./navbar.scss";
import {HiOutlineHome} from "react-icons/hi";
import {BsTools} from "react-icons/bs"
import {RiPagesFill} from 'react-icons/ri';
import {BiUser} from "react-icons/bi";

function Navbar(props){

useEffect(()=>{
  var pathname = window.location.pathname;

  if(pathname==="/")
  {
    pathname=pathname+'home'
  }
  const splitPath=pathname.split("/");
  const splitStr=splitPath[1].trim();

  let listContainer= document.getElementById(splitStr);
  if(listContainer)
  {
    listContainer.classList.add("active-nav");
  }
  else{
    document.getElementById('home').classList.add("active-nav");
  }
  })


  const handelTheNavClick=(data)=>{
        window.location.href=`/${data}`;     
 }
   
   
    return(
    <>
    
    <div className="navigationbar"  >
        <div className="nav-item " id="home" onClick={(e)=>{handelTheNavClick(e.currentTarget.id)}}>
        <div className="text-center" >
              <HiOutlineHome className="nav-icon" /></div>
            HOME
        </div>
        <div className="nav-item" id="services" onClick={(e)=>{handelTheNavClick(e.currentTarget.id)}}>
        <div className="text-center">
              <BsTools className="nav-icon" /></div>
            SERVICES
        </div>
        <div className="nav-item" id="orders" onClick={(e)=>{handelTheNavClick(e.currentTarget.id)}}>
        <div className="text-center">
              <RiPagesFill className="nav-icon" /></div>
            ORDERS
        </div>
        <div className="nav-item" id="profile" onClick={(e)=>{handelTheNavClick(e.currentTarget.id)}}>
        <div className="text-center">
              <BiUser className="nav-icon" /></div>
            PROFILE
        </div>

    </div>
    
    </>
    );
}
export default Navbar;