import {UPDATE_REQUEST,UPDATE_REQUEST_SUCCESS,DELETE_REQUEST,DELETE_REQUEST_SUCCESS} from '../actions/types';

const INITAL_STATE = {
    loadingUpdate:false,
    loadingDelete:false
}

export default (state = INITAL_STATE,action)=>{
    switch (action.type) {
        case UPDATE_REQUEST:
            return{loadingUpdate:true};
        case UPDATE_REQUEST_SUCCESS:
            return INITAL_STATE;
        case DELETE_REQUEST:
            return{loadingDelete:true};
        case DELETE_REQUEST_SUCCESS:
            return INITAL_STATE;
        default:
            return state;
    }
};