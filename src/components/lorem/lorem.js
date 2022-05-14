import React, {useEffect,Component} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getLorem} from "../../redux/action/action";
import "../../styles/Lorem/lorem.scss"
import instagram from "../../img/image 18.svg"
import internet from "../../img/image 19.svg"
import feezboook from "../../img/image 20.svg"
import Slider from "react-slick";
const Lorem = () => {
    const lorem = useSelector(state => state.getLorem)
    console.log(lorem)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getLorem())
    },[])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div id="Lorem">
            <div className="container">
                <div>
                    <h1 className="color-1">НАША КОМАНДА</h1>
                </div>
                <Slider {...settings}>
                        { lorem.map(el => (
                            <div className="box">
                                <img className="mar" src={el.image} alt=""/>
                                <div className="loit">
                                    <h1 className="mon">{el.name}</h1>
                                    <div className="navv">
                                        <div>
                                            <h1 className="nex">{el.position}</h1>
                                        </div>
                                        <div style={{display:"flex"}}>
                                            <a href={el.url_facebook}>
                                                <img className="pos" src={instagram} alt=""/>
                                            </a>
                                            <a href={el.url_instagram}>
                                                <img className="pos" src={internet} alt=""/>
                                            </a>
                                            <a href={el.url_linkedin}>
                                                <img className="pos" src={feezboook} alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </div>
    );
};

export default Lorem;

