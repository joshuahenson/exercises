const updateValue = (state, action) => {
  if (state.oilId === action.oilId) {
    return { ...state, value: action.value };
  }
  return state;
};

const convertValue = (state, action) => {
  if (action.inPercent) { // convert percent to unit
    return { ...state, value: (state.value / 100 * action.oilWeight).toString() };
  } // convert unit to percent
  return { ...state, value: (state.value / action.oilWeight * 100).toString() };
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
    case 'OIL_BY_PERCENT':
      return state.map(oil => convertValue(oil, action));
    default:
      return state;
  }
};
