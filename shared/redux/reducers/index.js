import { combineReducers } from 'redux';
import post from './postReducer';
import posts from './postsReducer';

const rootReducer = combineReducers({
  post,
  posts
});

export default rootReducer;
