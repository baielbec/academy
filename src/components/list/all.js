import React from 'react';
import {Link} from "react-router-dom";
import "../../styles/All/All.scss"
const All = () => {
    return (
        <div id="All">
           <div className="container">
               <h1 className="color">ТЕХНОЛОГИИ  и  ИНСТРУМЕНТЫ</h1>
               <div className="all">
                     <Link to={"/main"}><a className="nav" href="#">Все</a></Link>
                     <Link to={"/design"}><a  className="nav" href="#">UX|UI DESIGN</a></Link>
                     <Link to={"/frond"}><a  className="nav" href="#">FROND-END</a></Link>
                     <Link to={"/backend"}><a  className="nav" href="#">BACKEND</a></Link>
                     <Link to={"/android"}><a  className="nav" href="#">ANDROID</a></Link>
               </div>
           </div>
        </div>
    );
};

export default All;