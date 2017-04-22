export default(state = false, action) => {
  switch (action.type) {
    case 'OIL_BY_PERCENT':
      return !state;
    default:
      return state;
  }
};
