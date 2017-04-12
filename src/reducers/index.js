import { combineReducers } from 'redux';
import soapType from './soapTypeReducer';
import oils from './oilsReducer';

const rootReducer = combineReducers({
  soapType,
  oils
});

export default rootReducer;
