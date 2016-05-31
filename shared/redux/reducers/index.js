import { combineReducers } from 'redux';
import post from './postReducer';
import posts from './postsReducer';
import poll from './pollReducer';
import polls from './pollsReducer';

// temp posts and polls

const rootReducer = combineReducers({
  post,
  posts,
  polls,
  poll
});

export default rootReducer;
