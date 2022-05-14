import React from "react";
import img from '../../img/mb1 1.svg'
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import {useTranslation} from "react-i18next";


const Header = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };


    return (
            <div className="header">
                <div className="container">
                    <div className="content">
                        <div className="content--logo">
                            <img className="mx-3" src={img} alt=""/>
                            <a href="#" className="content--logo--web">MOTION WEB</a>
                        </div>
                        <div className="content--logo--web--nav">
                            <a href="#">я</a>
                            <a href="#">О нас</a>
                            <a href="#">Проекты</a>
                            <a href="#">Клиенты</a>
                            <a href="#">Наш команда</a>
                        </div>
                        <div id="google_translate_element">
                        </div>
                        <div>
                            <button className="btn">Contact</button>
                        </div>
                        <BurgerMenu/>
                        <button className="mat" onClick={() => changeLanguage("en")}>EN</button>
                        <button className="mat" onClick={() => changeLanguage("ru")}>RU</button>
                        <hr />
                        <div><h1 className="mat">{t("title")}</h1></div>
                        <div className="mat">{t("description.part1")}</div>
                        <div className="mat">{t("description.part2")}</div>
                    </div>
                </div>
            </div>
    );
};

export default Header;