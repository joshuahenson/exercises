const initialState = false;

export default(state = initialState, action) => {
  switch (action.type) {
    case 'OIL_BY_PERCENT':
      return !state;
    case 'RESET_DEFAULTS':
    case 'CLEAR_ALL':
      return initialState;
    default:
      return state;
  }
};
