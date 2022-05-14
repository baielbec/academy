import React from 'react';
import CCC from "../../img/andr/iPhone 13/C_Logo.png";
import Ruby from "../../img/andr/iPhone 13/768px-Ruby_logo 1.svg";
import PostCSS from "../../img/andr/iPhone 13/PostCSS_Logo.svg";
import MySQL from "../../img/andr/iPhone 13/MySQL-Logo.svg";
import MongoDB from "../../img/andr/iPhone 13/mongodb-logo.svg";
import Webpack from "../../img/andr/iPhone 13/icon-square-big.svg";
import Babel from "../../img/andr/iPhone 13/1200px-Babel_Logo.svg";
import PHP from "../../img/andr/iPhone 13/php-1-logo-png-transparent.svg";

const Android = () => {
    return (
        <div>
            <div id="Design">
                <div className="container">
                    <div className="div">
                        <div className="box">
                            <img className="logo" src={CCC} alt=""/>
                            <p className="lad">C</p>
                        </div>
                        <div className="box">
                            <img className="logo" src={Ruby} alt=""/>
                            <p className="lad">Ruby</p>
                        </div>
                        <div className="box">
                            <img className="logo" src={PostCSS} alt=""/>
                            <p className="lad">PostCSS</p>
                        </div>
                        <div className="box">
                            <img className="logo" src={MySQL} alt=""/>
                            <p className="lad">MySQL</p>
                        </div>
                        <div className="box">
                        <img className="logo" src={MongoDB} alt=""/>
                        <p className="lad">MongoDB</p>
                    </div>
                        <div className="box">
                            <img className="logo" src={Webpack} alt=""/>
                            <p className="lad">Webpack</p>
                        </div>
                        <div className="box">
                            <img className="logo" src={Babel} alt=""/>
                            <p className="lad">Babel</p>
                        </div>
                        <div className="box">
                            <img className="logo" src={PHP} alt=""/>
                            <p className="lad">PHP</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Android;