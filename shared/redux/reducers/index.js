import { combineReducers } from 'redux';
import poll from './pollReducer';
import polls from './pollsReducer';
import showModal from './modalReducer';

const rootReducer = combineReducers({
  polls,
  poll,
  showModal
});

export default rootReducer;
