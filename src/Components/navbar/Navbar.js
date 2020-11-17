import React from 'react';
import "./navbar.scss";
import {HiOutlineHome} from "react-icons/hi";
import {BsTools} from "react-icons/bs"
import {RiPagesFill} from 'react-icons/ri';
import {BiUser} from "react-icons/bi"
function Navbar(){
    return(
    <>
    <div className="navigationbar">
        <div>
        <div className="text-center">
              <HiOutlineHome className="nav-icon" /></div>
            HOME
        </div>
        <div>
        <div className="text-center">
              <BsTools className="nav-icon" /></div>
            SERVICES
        </div>
        <div>
        <div className="text-center">
              <RiPagesFill className="nav-icon" /></div>
            ORDERS
        </div>
        <div>
        <div className="text-center">
              <BiUser className="nav-icon" /></div>
            PROFILE
        </div>

    </div>
    
    </>
    );
}
export default Navbar;