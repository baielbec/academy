import React from 'react';
import "../../styles/Design/Design.scss"
import Sketch from "../../img/Sketch_Logo.svg"
import Photoshop from "../../img/1200px-Adobe_Photoshop_CC_icon.svg"
import CCCC from "../../img/1822px-ISO_C++_Logo.svg"
import Adobe from "../../img/adobe-3628601-3029826.svg"
import figma from "../../img/icon figma vector.svg"
const Design = () => {
    return (
        <div id="Design">
            <div className="container">
         <div className="div">
             <div className="box">
                 <img className="logo" src={figma} alt=""/>
                 <p className="lad">figma</p>
             </div>
             <div className="box">
                 <img className="logo" src={Adobe} alt=""/>
                 <p className="lad">AdobeSuite
                 </p>
             </div>
             <div className="box">
                 <img className="logo" src={CCCC} alt=""/>
                 <p className="lad">C++
                    </p>
             </div>
             <div className="box">
                 <img className="logo" src={Photoshop} alt=""/>
                 <p className="lad">Photoshop</p>
             </div>
             <div className="box">
                 <img className="logo" src={Sketch} alt=""/>
                 <p className="lad">Sketch</p>
             </div>
         </div>
            </div>
        </div>
    );
};

export default Design;