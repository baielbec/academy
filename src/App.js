import React from "react"
import Header from "../src/components/Header/Header";
import Hero from "../src/components/hero/hero";
import About from "../src/components/about/About";
import Clients from "../src/components/clients/clients";
import {Routes, Route} from "react-router-dom"
import Project from "./components/Project/Project";
import Lorem from "./components/lorem/lorem";
import List from "./components/List/list";
import Main from "./components/list/Main"
import DESIGN from "./components/list/DESIGN";
import FRONDEND from "./components/list/FRONDEND";
import BACKEND from "./components/list/BACKEND";
import ANDROID from "./components/list/ANDROID";
import Reviews from "./components/REVIEWS/REVIEWS";
import Text from "./components/REVIEWS/Text";
import Video from "./components/REVIEWS/Video";
import Reges from "./components/Reges/Reges";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <About/>
        <Clients/>
        <Project/>
        <Lorem/>
        <List/>
        <Main/>
        <Reviews/>
        <Routes>
            <Route path={"/text"} element={<Text/>}/>
            <Route path={"/video"} element={<Video/>}/>
        </Routes>
        <Reges/>
        <Footer/>
    </div>
  );
}

export default App;
