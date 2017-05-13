const updateValue = (state, action) => {
  if (state.oilId === action.oilId) { // Check that we are updating the selected oilId
    if (action.inPercent) { // Determine whether we need to convert to decimal or percent
      return { ...state, percent: action.value, value: (action.value / 100 * action.oilWeight).toString() };
    }
    return { ...state, percent: (action.value / action.oilWeight * 100).toString(), value: action.value };
  }
  return state;
};

const initialState = [];

export default(state = initialState, action) => {
  switch (action.type) {
    case 'ADD_OIL':
      if (state.some(oil => oil.oilId === action.oil.oilId)) {
        return state;
      }
      return [...state, { ...action.oil, percent: '0', value: '0' }];
    case 'REMOVE_OIL':
      return state.filter(oil => oil.oilId !== action.oilId);
    case 'SET_OIL_VALUE':
      return state.map(oil => updateValue(oil, action));
    case 'RESET_DEFAULTS':
      return initialState;
    default:
      return state;
  }
};
