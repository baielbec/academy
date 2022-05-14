import React, {useState} from 'react';
import "../../styles/Rges/Reges.scss"
import Mark from "../../img/unsplash_mP7aPSUm7aE.svg"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as PropTypes from "prop-types";

const Reges = () => {

 const [user, setUser] = useState({
     username: "",
     email: {pattern: /^\S+@\S+$/i},
     phone: {pattern: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/}
 })
    const handleChange = (el) => {
        setUser({...user,[el.target.name]: el.target.value})
    }

    const sendData = (e) => {
     e.preventDefault()
        axios.post("https://motion-django.herokuapp.com/feedback/link/" ,
            {
                name: user.name,
                email: user.email,
                phone: user.phone,
            })
            .then(data => {
                toast.success("Успешно "+data.data.name)
                console.log(data)
            }).catch(error => {
                if(error.response.data.name){
                    toast.error("Имя "+error.response.data.name[0])
                } else if (error.response.data.email){
                    toast.error(error.response.data.email[0])
                }
                else if (error.response.data.phone){
                    toast.error(error.response.data.phone[0])
                }

        })
    }


    return (
        <div id="Reges">
            <div className="container">
                <h1 className="color-1">Have a project?
                </h1>
                <div
                    style={{background:`url(${Mark})no-repeat center / cover`,
                        minHeight:"100vh",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                    }}
                >
                    {/*<img className="img-3" src={Mark} alt=""/>*/}
                    <div className="Reges-box"
                    >
                        <ToastContainer />
                    <div className="Reges-left">
                        <form  onSubmit={sendData}>
                            <div className="Reges-input">
                                <p className="Reges-pit">имя</p>
                                <input onChange={handleChange} name="name" type="phone" className="Reges-inputt" placeholder="Имя"/>
                                <p className="Reges-pit">Номер телефона</p>
                                <input onChange={handleChange} pattern="\+?[0-9\s\-\(\)]+" minLength='13' name="phone" type="phone" className="Reges-inputt" placeholder="+996 995-995-250"/>
                                <p className="Reges-pit">Email</p>
                                <input onChange={handleChange}  name="email" type="email" className="Reges-inputt" placeholder="Email"/>
                            </div>
                            <div className="Reges-nutton">
                                <button className="Reges-button">
                                    Отправить
                                </button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reges;