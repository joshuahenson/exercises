import { combineReducers } from 'redux';
import poll from './pollReducer';
import polls from './pollsReducer';

const rootReducer = combineReducers({
  polls,
  poll
});

export default rootReducer;
