import * as ACTIONS from '../actions/types';

const initialState = {
    userData: {},
    error: {},
    loading: false
}

export default function (state = initialState, action) {
    switch(action.type) {
        case ACTIONS.LOGIN.LOGIN_SUBMIT:
            return { 
                ...state,
                loading: true
            };
        case ACTIONS.LOGIN.LOGIN_SUCCESS: 
            return {
                ...state,
                userData: action.payload,
                error: {},
                loading: false
            }
        case ACTIONS.LOGIN.LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return { ...state };
    }
}