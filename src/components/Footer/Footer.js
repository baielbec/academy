import React from 'react';
import Footerr from "../../img/mb1 1.svg"
import "../../styles/Footer/Footer.scss"
const Footer = () => {
    return (
        <div id="Footer">
            <div className="container">
                <div className="Footer-lop">
                    <div className="Pol">
                        <img src={Footerr} alt=""/>
                        <p className="Text">MOTION WEB</p>
                    </div>
                <div className="lop">
                    <div>
                        <h3>lorem</h3>
                        <p>lorem</p>
                        <p>lorem</p>
                        <p>lorem</p>
                        <p>lorem</p>
                    </div>
                    <div>
                        <h3>lorem</h3>
                        <p>lorem</p>
                        <p>lorem</p>
                        <p>lorem</p>
                        <p>lorem</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;