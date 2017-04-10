export default(state = '', action) => {
  switch (action.type) {
    case 'PICK_SOAP_TYPE':
      return action.soapType;
    default:
      return state;
  }
};
