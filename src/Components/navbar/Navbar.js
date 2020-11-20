import React from 'react';
import "./navbar.scss";
import {HiOutlineHome} from "react-icons/hi";
import {BsTools} from "react-icons/bs"
import {RiPagesFill} from 'react-icons/ri';
import {BiUser} from "react-icons/bi";
import {NavLink} from 'react-router-dom'

function Navbar(){

   
   
    return(
    <>
    
    <div className="navigationbar"  >
    <NavLink to="/" exact className="text-center nav-links" activeClassName="nav-links">
    <div className="">
              <HiOutlineHome className="nav-icon" />
           <div> HOME</div>
        </div>
    </NavLink>
    <NavLink to="/services" exact className="text-center nav-links" activeClassName="nav-links">
    <div className="">
              <BsTools className="nav-icon" />
              <div>  SERVICES</div>
        </div>
    </NavLink>
    <NavLink to="/orders" exact className="text-center nav-links" activeClassName="nav-links">
    <div className="">
    <RiPagesFill className="nav-icon" />
              <div> ORDERS</div>
        </div>
    </NavLink>
    <NavLink to="/profile" exact className="text-center nav-links" activeClassName="nav-links">
    <div className="">
              <BiUser className="nav-icon" />
              <div> PROFILE</div>
        </div>
    </NavLink>
    
        

    </div>
    
    </>
    );
}
export default Navbar;