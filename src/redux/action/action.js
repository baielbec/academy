import {GET_CARTA, GET_LOREM, GET_PROJECT} from "../types/actionTypes";
import api from "../../https/api";

export const getAbout  =  () => {
    return (dispatch)=> {
        api.get(`order/`)
            .then(({data})=>{dispatch({type: GET_CARTA , payload:data})})
    }
}

export const getProject  =  () => {
    return (dispatch)=> {
        api.get(`order/`)
            .then(({data})=>{dispatch({type: GET_PROJECT , payload:data})})
    }
}

export const getLorem  =  () => {
    return (dispatch)=> {
        api.get(`createstaff/`)
            .then(({data})=>{dispatch({type: GET_LOREM , payload:data})})
    }
}