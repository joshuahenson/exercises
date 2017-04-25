export default(state = '16', action) => {
  switch (action.type) {
    case 'SET_OIL_WEIGHT':
      return action.weight;
    default:
      return state;
  }
};
