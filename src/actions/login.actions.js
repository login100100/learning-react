import * as ACTIONS from './types'
import axios from 'axios';

export const login = loginData => dispatch => {
    dispatch({
        type: ACTIONS.LOGIN.LOGIN_SUBMIT
    });

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then((response) => {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                }    
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
    
            return data;
        });
    })
    .then(user => {
        dispatch({
            type: ACTIONS.LOGIN.LOGIN_SUCCESS,
            payload: user
        });
    });
}