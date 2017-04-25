const updateValue = (state, action) => {
  if (state.oilId === action.oilId) {
    return { ...state, value: action.value };
  }
  return state;
};

export default(state = [], action) => {
  switch (action.type) {
    case 'ADD_OIL':
      if (state.some(oil => oil.oilId === action.oil.oilId)) {
        return state;
      }
      return [...state, { ...action.oil, value: '0' }];
    case 'REMOVE_OIL':
      return state.filter(oil => oil.oilId !== action.oilId);
    case 'SET_OIL_VALUE':
      return state.map(oil => updateValue(oil, action));
    default:
      return state;
  }
};
