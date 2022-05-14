import React from 'react';
import "../../styles/Reviews/Reviews.scss"
import {Link} from "react-router-dom";
import Text from "./Text";
const Reviews = () => {
    return (
        <div id="Reviews">
         <div className="container">
             <div>
                 <h1 className="color-1">ОТЗЫВЫ</h1>
             </div>
             <div className="Reviews-item">
               <Link to={"/text"}> <button className="Text">Текст</button></Link>
                <Link to={"/video"}> <button className="video">Видео</button></Link>
             </div>
         </div>
        </div>
    );
};

export default Reviews;