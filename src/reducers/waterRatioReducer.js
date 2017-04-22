export default(state = '38', action) => {
  switch (action.type) {
    case 'SET_WATER_RATIO':
      return action.ratio;
    default:
      return state;
  }
};
