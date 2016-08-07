import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
import poll from './pollReducer';
import polls from './pollsReducer';
import showModal from './modalReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  polls,
  poll,
  showModal,
  form: formReducer,
  routing,
  auth
});

export default rootReducer;
