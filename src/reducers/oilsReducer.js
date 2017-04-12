export default(state = [], action) => {
  switch (action.type) {
    case 'ADD_OIL':
      return [...state, { oil: action.oil, value: 0 }];
    default:
      return state;
  }
};
