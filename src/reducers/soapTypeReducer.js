const initialState = 'naoh';

export default(state = initialState, action) => {
  switch (action.type) {
    case 'PICK_SOAP_TYPE':
      return action.soapType;
    case 'RESET_DEFAULTS':
      return initialState;
    case 'CLEAR_ALL':
      return '';
    default:
      return state;
  }
};
