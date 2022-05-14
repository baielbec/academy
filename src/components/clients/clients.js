import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAbout, getProject} from "../../redux/action/action";
import "../../styles/clientes/Clients.scss"

const Clients = () => {
    const elem = useSelector(state => state.getProject)
    console.log(elem, "carta")
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProject())
    },[])
    return (
        <div id="Clients">
            <div className="container">
                <div>
                    <h1 className="color">НАШИ КЛИЕНТЫ</h1>
                </div>
                <div className="main">
                    {

                    }
                </div>
            </div>
        </div>
    );
};

export default Clients;