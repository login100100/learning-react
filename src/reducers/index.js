import { combineReducers } from 'redux';
import postReducer from './post.reducer';
import userReducer from './user.reducer';
import alertReducer from './alert.reducer';

export default combineReducers({ // define app-wide reducers for global app state
    posts: postReducer,
    user: userReducer,
    alert: alertReducer
});