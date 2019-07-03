import * as ActionTypes from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => { // fetchPosts function returns a function with action dispatcher as a parameter
    axios.get('http://localhost:4000/posts')
    .then(res => res.data)
    .then(data => dispatch({
        type: ActionTypes.POSTS.FETCH_POSTS,
        payload: data
    }));
}