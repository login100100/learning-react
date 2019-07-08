import * as ACTIONS from '../actions/types';

const initialState = {
    type: '',
    message: ''
}

export default function (state = initialState, action)  {
    switch (action.type) {
        case ACTIONS.ALERT.SUCCESS:
            return {
                type: 'alert-success',
                message: action.payload
            }
        case ACTIONS.ALERT.ERROR:
            return {
                type: 'alert-error',
                message: action.payload
            }
        case ACTIONS.ALERT.CLEAR:
            return {}
        default: return state;
    }
}