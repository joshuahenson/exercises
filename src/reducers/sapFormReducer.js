const initialState = {
  soapType: 'naoh'
};

export default(state = initialState, action) => {
  switch (action.type) {
    case 'PICK_SOAP_TYPE':
      return { ...state, soapType: action.soapType };
    default:
      return state;
  }
};
