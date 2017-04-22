import { combineReducers } from 'redux';
import soapType from './soapTypeReducer';
import oils from './oilsReducer';
import unit from './unitReducer';
import oilWeight from './oilWeightReducer';
import waterRatio from './waterRatioReducer';

const rootReducer = combineReducers({
  soapType,
  oils,
  unit,
  oilWeight,
  waterRatio
});

export default rootReducer;
