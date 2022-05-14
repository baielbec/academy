import {GET_CARTA, GET_LOREM, GET_PROJECT} from "../types/actionTypes";

const initialState = {
    getAbout: [],
    getProject: [],
    getLorem: [],
}


export  const reducer = (state = initialState, action) => {
    switch (action.type){
        case GET_CARTA:
            return {...state, getAbout: action.payload}
        case GET_PROJECT:
            return {...state, getProject: action.payload}
        case GET_LOREM:
            return {...state, getLorem: action.payload}
        default:
            return state
    }
}

