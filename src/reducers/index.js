import { combineReducers } from 'redux';
import soapType from './soapTypeReducer';
import oils from './oilsReducer';
import unit from './unitReducer';
import oilWeight from './oilWeightReducer';
import waterRatio from './waterRatioReducer';
import superfatting from './superfattingReducer';

const rootReducer = combineReducers({
  soapType,
  oils,
  unit,
  oilWeight,
  waterRatio,
  superfatting
});

export default rootReducer;
