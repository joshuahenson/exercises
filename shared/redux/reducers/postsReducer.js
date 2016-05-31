import * as ActionTypes from '../constants/constants';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_POST :
      return [{
        name: action.name,
        title: action.title,
        content: action.content,
        slug: action.slug,
        cuid: action.cuid,
        _id: action._id,
      }, ...state];

    case ActionTypes.ADD_POSTS :
      return action.posts;

    case ActionTypes.DELETE_POST :
      return state.filter((post) => post._id !== action.post._id);

    default:
      return state;
  }
};

export default postsReducer;
