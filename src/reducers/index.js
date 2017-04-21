import { combineReducers } from 'redux';
import soapType from './soapTypeReducer';
import oils from './oilsReducer';
import unit from './unitReducer';

const rootReducer = combineReducers({
  soapType,
  oils,
  unit
});

export default rootReducer;
