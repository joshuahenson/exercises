import * as ActionTypes from '../constants/constants';

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

    default:
      return state;
  }
};

export default pollsReducer;
