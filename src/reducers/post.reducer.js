import * as ActionTypes from '../actions/types';

const initialState = {
    posts: [],
    post: {} // single post to submit in form
}

export default function (state = initialState, action) {
    switch (action.type) {        
        case ActionTypes.POSTS.FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        default:
            return { ...state};
    }
}