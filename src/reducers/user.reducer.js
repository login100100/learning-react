import * as ACTIONS from '../actions/types';

const initialState = {
    userData: {},
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
                loading: false
            }
        default: 
            return { ...state };
    }
}