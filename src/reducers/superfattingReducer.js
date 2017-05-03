const initialState = '5';

export default(state = initialState, action) => {
  switch (action.type) {
    case 'SET_SUPERFATTING':
      return action.superfat;
    case 'RESET_DEFAULTS':
      return initialState;
    case 'CLEAR_ALL':
      return '';
    default:
      return state;
  }
};
