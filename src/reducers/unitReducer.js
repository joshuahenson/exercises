const initialState = 'oz';

export default(state = initialState, action) => {
  switch (action.type) {
    case 'PICK_UNIT':
      return action.unit;
    case 'RESET_DEFAULTS':
      return initialState;
    default:
      return state;
  }
};
