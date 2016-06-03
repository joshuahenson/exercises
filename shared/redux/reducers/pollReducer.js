import * as ActionTypes from '../constants/constants';

const updateOptions = (state, action) => {
  switch (action.type) {
    case ActionTypes.VOTE:
      if (state._id !== action.optionId) {
        return state;
      }
      return Object.assign({}, state, {
        votes: state.votes + 1
      });
    default:
      return state;
  }
};

const pollReducer = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_SELECTED_POLL :
      return action.slug;

    case ActionTypes.ADD_SELECTED_POLL :
      return action.poll;

    case ActionTypes.VOTE:
      return Object.assign({}, state, {
        options: state.options.map(t =>
          updateOptions(t, action)
        )
      });

    default:
      return state;
  }
};

export default pollReducer;
