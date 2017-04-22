import { combineReducers } from 'redux';
import soapType from './soapTypeReducer';
import oils from './oilsReducer';
import unit from './unitReducer';
import oilWeight from './oilWeightReducer';
import waterRatio from './waterRatioReducer';
import superfatting from './superfattingReducer';
import byPercent from './byPercentReducer';

const rootReducer = combineReducers({
  soapType,
  oils,
  unit,
  oilWeight,
  waterRatio,
  superfatting,
  byPercent
});

export default rootReducer;
