import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import poll from './pollReducer';
import polls from './pollsReducer';
import showModal from './modalReducer';

const rootReducer = combineReducers({
  polls,
  poll,
  showModal,
  form: formReducer
});

export default rootReducer;
