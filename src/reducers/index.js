import { combineReducers } from 'redux';
import postReducer from './post.reducer';

export default combineReducers({ // define app-wide reducers for global app state
    posts: postReducer
});