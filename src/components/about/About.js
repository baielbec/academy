import React from 'react';
import img from "../../img/image 15 (Traced).png"
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    AOS.init({
        duration: 1200
    });
    return (
        <div id="about">
            <div className="name"/>
            <div className="container">
                <h1 className="team">УСЛУГИ</h1>
                <p className="team--moni">The Motion Web team constantly monitors the development and <br/> trends in  the field of IT. We actively apply the latest technologies in <br/> practice.</p>

                    <div className="grid grid-cols-3 gap-3 my-20 wrap ">
                        <div data-aos="fade-right">
                          <div className="blog">
                             <div className="blog--big">
                                <img className="blog--big--bolg" src={img} alt=""/>
                             </div>
                             <div className="blog--big--bolg--trends">
                                <h4 className="blog--big--bolg--trends--devel my-2">IT аутсорсинг</h4>
                                <p className="blog--big--bolg--trends--devel--the">Наша компания отлично выполняет абсолютно любые задачи, которые бизнесу нужно передать стороннему исполнителю. Наши клиенты всегда довольны, и их имена говорят о нашей репутации.</p>
                             </div>
                         </div>
                        </div>
                        <div data-aos="fade-up">
                            <div className="blog">
                                <div className="blog--big">
                                    <img className="blog--big--bolg" src={img} alt=""/>
                                </div>
                                <div className="blog--big--bolg--trends">
                                    <h4 className="blog--big--bolg--trends--devel my-2">IT аутсорсинг</h4>
                                    <p className="blog--big--bolg--trends--devel--the">Наша компания отлично выполняет абсолютно любые задачи, которые бизнесу нужно передать стороннему исполнителю. Наши клиенты всегда довольны, и их имена говорят о нашей репутации.</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left">
                            <div className="blog">
                                <div className="blog--big">
                                    <img className="blog--big--bolg" src={img} alt=""/>
                                </div>
                                <div className="blog--big--bolg--trends">
                                    <h4 className="blog--big--bolg--trends--devel my-2">IT аутсорсинг</h4>
                                    <p className="blog--big--bolg--trends--devel--the">Наша компания отлично выполняет абсолютно любые задачи, которые бизнесу нужно передать стороннему исполнителю. Наши клиенты всегда довольны, и их имена говорят о нашей репутации.</p>
                                </div>
                            </div>
                        </div>
                   </div>
                <div className="grid grid-cols-3 gap-3 my-20 wrap ">
                    <div data-aos="fade-down-right">
                        <div className="blog">
                            <div className="blog--big">
                                <img className="blog--big--bolg" src={img} alt=""/>
                            </div>
                            <div className="blog--big--bolg--trends">
                                <h4 className="blog--big--bolg--trends--devel my-2">IT аутсорсинг</h4>
                                <p className="blog--big--bolg--trends--devel--the">Наша компания отлично выполняет абсолютно любые задачи, которые бизнесу нужно передать стороннему исполнителю. Наши клиенты всегда довольны, и их имена говорят о нашей репутации.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-up">
                        <div className="blog">
                            <div className="blog--big">
                                <img className="blog--big--bolg" src={img} alt=""/>
                            </div>
                            <div className="blog--big--bolg--trends">
                                <h4 className="blog--big--bolg--trends--devel my-2">IT аутсорсинг</h4>
                                <p className="blog--big--bolg--trends--devel--the">Наша компания отлично выполняет абсолютно любые задачи, которые бизнесу нужно передать стороннему исполнителю. Наши клиенты всегда довольны, и их имена говорят о нашей репутации.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down-left">
                        <div className="blog">
                            <div className="blog--big">
                                <img className="blog--big--bolg" src={img} alt=""/>
                            </div>
                            <div className="blog--big--bolg--trends">
                                <h4 className="blog--big--bolg--trends--devel my-2">IT аутсорсинг</h4>
                                <p className="blog--big--bolg--trends--devel--the">Наша компания отлично выполняет абсолютно любые задачи, которые бизнесу нужно передать стороннему исполнителю. Наши клиенты всегда довольны, и их имена говорят о нашей репутации.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;