const initialState = false;

export default(state = initialState, action) => {
  switch (action.type) {
    case 'OIL_BY_PERCENT':
      return !state;
    case 'RESET_DEFAULTS':
      return initialState;
    default:
      return state;
  }
};
