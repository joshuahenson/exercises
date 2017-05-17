const initialState = { message: '', id: 0 };

export default(state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return { message: action.message, id: action.id };
    case 'CLEAR_NOTIFICATION':
      if (action.id === state.id) {
        return { message: '', id: action.id };
      }
      return state;
    default:
      return state;
  }
};
