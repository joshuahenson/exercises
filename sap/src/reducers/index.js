import { combineReducers } from 'redux';
import soapType from './soapTypeReducer';
import oils from './oilsReducer';
import unit from './unitReducer';
import oilWeight from './oilWeightReducer';
import waterPercent from './waterPercentReducer';
import superfatting from './superfattingReducer';
import byPercent from './byPercentReducer';
import notification from './notificationReducer';

const rootReducer = combineReducers({
  notification,
  soapType,
  oils,
  unit,
  oilWeight,
  waterPercent,
  superfatting,
  byPercent
});

export default rootReducer;
