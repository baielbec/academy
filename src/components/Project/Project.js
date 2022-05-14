import React, {useEffect,Component} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAbout, getProject} from "../../redux/action/action";
import Slider from "react-slick";
import "../../styles/Project/Project.scss"
import {Link, NavLink} from "react-router-dom";

const Project = () => {
    const elem = useSelector(state => state.getAbout)
    console.log(elem, "carta")
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAbout())
    },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div id="Project">
            <div className="container">
                <div>
                    <h1 className="color-1">НАШИ ПРОЕКТЫ</h1>
                </div>
                        <Slider {...settings}>
                        { elem ? elem.map((el)=> (
                            <div key={el.id}>
                                <img className="margin" src={el.image} alt=""/>
                               <div className="margin0">
                                   <p className="marin-1">{el.name}</p>
                                   <a href={el.url_project}><h1 className="marin-2">{el.description}</h1></a>
                               </div>
                            </div>
                        )) : <h1>loading</h1>}
                        </Slider>
            </div>
        </div>
    );
};

export default Project;