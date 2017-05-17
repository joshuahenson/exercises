const initialState = '16';

export default(state = initialState, action) => {
  switch (action.type) {
    case 'SET_OIL_WEIGHT':
      return action.weight;
    case 'RESET_DEFAULTS':
      return initialState;
    default:
      return state;
  }
};