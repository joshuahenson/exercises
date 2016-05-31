import * as ActionTypes from '../constants/constants';

const pollReducer = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_SELECTED_POLL :
      return action.slug;

    case ActionTypes.ADD_SELECTED_POLL :
      return action.poll;

    default:
      return state;
  }
};

export default pollReducer;
