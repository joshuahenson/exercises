import * as ActionTypes from '../constants/constants';

const modalReducer = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL :
      return action.bool;

    default:
      return state;
  }
};

export default modalReducer;
