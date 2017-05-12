const initialState = '38';

export default(state = initialState, action) => {
  switch (action.type) {
    case 'SET_WATER_PERCENT':
      return action.percent;
    case 'RESET_DEFAULTS':
      return initialState;
    default:
      return state;
  }
};
