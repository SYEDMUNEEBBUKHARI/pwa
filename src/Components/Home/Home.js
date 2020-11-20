import React,{useEffect} from "react";
import { BsSearch } from "react-icons/bs";
import "./Home.scss";
import Webicon from "../../Assets/images/webicon.png";
import OurServices from "../Home/OurServices/OurServices"

function Home(){

    useEffect(()=>{

    })
    return(
    <>
        <div className="background-banner">
            <div className="webicon">
                <img className="img-fluid site-logo" alt="mr mahir icon" src={Webicon} />    
            <div className="right-searching mr-3 mt-3">
                <BsSearch />
            </div>
            </div>

        </div>
        <OurServices />

    </>
    
)}

export default Home;