export default(state = [], action) => {
  switch (action.type) {
    case 'ADD_OIL':
      if (state.some(oil => oil.oilId === action.oil.oilId)) {
        return state;
      }
      return [...state, { ...action.oil, value: '0' }];
    default:
      return state;
  }
};
