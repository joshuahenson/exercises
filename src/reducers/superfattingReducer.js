export default(state = '5', action) => {
  switch (action.type) {
    case 'SET_SUPERFATTING':
      return action.superfat;
    default:
      return state;
  }
};
