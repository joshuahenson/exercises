export default(state = '', action) => {
  switch (action.type) {
    case 'PICK_UNIT':
      return action.unit;
    default:
      return state;
  }
};
