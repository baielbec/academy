import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
const BurgerMenu = () => {
    const [NavOpen, setNavOpen] = useState(false);
    return (
        <div className="flex items-center justify-between border-b border-gray-400 py-8">
            <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-200"/>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-200"/>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-200"/>
                    </div>
                    <div className={NavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-200"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[50vh]">
                            <li className="border-b border-gray-400 my-8 uppercase text-white">
                                <NavLink to="/hero">Главная</NavLink>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase text-white">
                                <NavLink to="/courses">Курсы</NavLink>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase text-white">
                                <NavLink to="/about">О нас</NavLink>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase text-white">
                                <NavLink to="/contact">Контакт</NavLink>
                            </li>
                        </ul>
                    </div>
                </section>
            </nav>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 70vh;
        top: 0;
        left: 0;
        background: #01487E;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
    );
};
export default BurgerMenu;