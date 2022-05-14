import React from 'react';
import "../../styles/Frondend/Frondend.scss"
import Logoo from "../../img/front/iPhone 13/1280px-React-icon.svg";
import JavaScript from "../../img/front/iPhone 13/JavaScript_logo.svg";
import Nuxt from "../../img/front/iPhone 13/Nuxt-js.svg";
import Bootstrap from "../../img/front/iPhone 13/Bootstrap_(front-end_framework)-Logo.svg";
import Angular from "../../img/front/iPhone 13/angular.svg";
import TypeScript from "../../img/front/iPhone 13/919832.png";
import Sass from "../../img/front/iPhone 13/1280px-Sass_Logo_Color.svg";
import Redux from "../../img/front/iPhone 13/logo.svg";
import Vue from "../../img/front/iPhone 13/Vue.js_Logo_2 1.svg";

const FRONDEND = () => {
    return (
        <div id="Frondend">
         <div className="container">
             <div className="div">
                 <div className="box">
                     <img className="logo" src={Logoo} alt=""/>
                     <p className="lad">React</p>
                 </div>
                 <div className="box">
                     <img className="logo" src={JavaScript} alt=""/>
                     <p className="lad">JavaScript</p>
                 </div>
                 <div className="box">
                     <img className="logo" src={Nuxt} alt=""/>
                     <p className="lad">Nuxt.js
                     </p>
                 </div>
                 <div className="box">
                     <img className="logo" src={Bootstrap} alt=""/>
                     <p className="lad">Bootstrap</p>
                 </div>
                 <div className="box">
                     <img className="logo" src={Angular} alt=""/>
                     <p className="lad">Angular</p>
                 </div>
                 <div className="box">
                     <img className="logo" src={TypeScript} alt=""/>
                     <p className="lad">TypeScript</p>
                 </div>
                 <div className="box">
                     <img className="logo" src={Sass} alt=""/>
                     <p className="lad">Sass</p>
                 </div>
                 <div className="box">
                     <img className="logo" src={Redux} alt=""/>
                     <p className="lad">Redux</p>
                 </div>
                 <div className="box">
                     <img className="logo" src={Vue} alt=""/>
                     <p className="lad">Vue</p>
                 </div>
             </div>
         </div>
        </div>
    );
};

export default FRONDEND;