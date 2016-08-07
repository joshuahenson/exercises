import * as ActionTypes from '../constants/constants';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  loaded: false,
  message: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_CHECK_TOKEN:
      return Object.assign({}, state, {
        isAuthenticated: action.isAuthenticated,
        isFetching: action.isFetching,
        loaded: false
      });
    case ActionTypes.TOKEN_VALID:
      return Object.assign({}, state, {
        isAuthenticated: action.isAuthenticated,
        isFetching: action.isFetching,
        loaded: true
      });
    case ActionTypes.TOKEN_INVALID:
      return Object.assign({}, state, {
        isAuthenticated: action.isAuthenticated,
        isFetching: action.isFetching,
        loaded: true
      });
    case ActionTypes.REQUEST_LOGIN:
      return {
        isAuthenticated: action.isAuthenticated,
        isFetching: action.isFetching,
        user: action.creds,
        message: '',
      };
    case ActionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        isFetching: false,
        message: ''
      });
    case ActionTypes.LOGIN_FALIURE:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: false,
        message: action.message
      });
    default:
      return state;
  }
};

export default authReducer;
