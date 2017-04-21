import { combineReducers } from 'redux';
import soapType from './soapTypeReducer';
import oils from './oilsReducer';
import unit from './unitReducer';
import oilWeight from './oilWeightReducer';

const rootReducer = combineReducers({
  soapType,
  oils,
  unit,
  oilWeight
});

export default rootReducer;
