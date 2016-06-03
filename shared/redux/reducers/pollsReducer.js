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

const updatePoll = (state, action) => {
  switch (action.type) {
    case ActionTypes.VOTE:
      if (state._id !== action.pollId) {
        return state;
      }
      return Object.assign({}, state, {
        options: state.options.map(t =>
          updateOptions(t, action)
        )
      });
    default:
      return state;
  }
};

const pollsReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_POLL :
      return [{
        name: action.name,
        title: action.title,
        options: action.options,
        slug: action.slug,
        cuid: action.cuid,
        _id: action._id,
      }, ...state];

    case ActionTypes.ADD_POLLS :
      return action.polls;

    case ActionTypes.DELETE_POLL :
      return state.filter((poll) => poll._id !== action.poll._id);

    case ActionTypes.VOTE:
      return state.map(t =>
        updatePoll(t, action)
      );

    default:
      return state;
  }
};

export default pollsReducer;
