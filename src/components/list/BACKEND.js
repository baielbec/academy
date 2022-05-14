import React from 'react';
import Node from "../../img/bec/iPhone 13/nodejs-logo-FBE122E377-seeklogo 1.svg";
import Python from "../../img/bec/iPhone 13/2048px-Python-logo-notext.svg";

const Backend = () => {
    return (
        <div>
            <div id="Design">
                <div className="container">
                    <div className="div">
                        <div className="box">
                            <img className="logo" src={Node} alt=""/>
                            <p className="lad">Node.js
                            </p>
                        </div>
                        <div className="box">
                            <img className="logo" src={Python} alt=""/>
                            <p className="lad">Python
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Backend;