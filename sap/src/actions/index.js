export function pickSoapType(soapType) {
  return {
    type: 'PICK_SOAP_TYPE',
    soapType
  };
}

export function addOil(oil) {
  return {
    type: 'ADD_OIL',
    oil
  };
}

export function removeOil(oilId) {
  return {
    type: 'REMOVE_OIL',
    oilId
  };
}

export function pickUnit(unit) {
  return {
    type: 'PICK_UNIT',
    unit
  };
}

export function setOilWeight(weight) {
  return {
    type: 'SET_OIL_WEIGHT',
    weight
  };
}

export function setWaterPercent(percent) {
  return {
    type: 'SET_WATER_PERCENT',
    percent
  };
}

export function setSuperfatting(superfat) {
  return {
    type: 'SET_SUPERFATTING',
    superfat
  };
}

export function setByPercent(inPercent) {
  return {
    type: 'OIL_BY_PERCENT',
    inPercent
  };
}

export function setOilValue(value, oilId, inPercent, oilWeight) {
  return {
    type: 'SET_OIL_VALUE',
    value,
    oilId,
    inPercent,
    oilWeight
  };
}

export function resetDefaults() {
  return {
    type: 'RESET_DEFAULTS'
  };
}

function showNotification(id, message) {
  return {
    type: 'SHOW_NOTIFICATION',
    id,
    message
  };
}

function clearNotification(id) {
  return {
    type: 'CLEAR_NOTIFICATION',
    id
  };
}

let nextNotificationId = 0;
export function showNotificationTimeout(message) {
  return (dispatch) => {
    const id = nextNotificationId++;
    dispatch(showNotification(id, message));
    setTimeout(() => {
      dispatch(clearNotification(id));
    }, 2000);
  };
}

export function addOilNotification(oil) {
  return (dispatch) => {
    const id = nextNotificationId++;
    dispatch(addOil(oil));
    dispatch(showNotification(id, `${oil.oil} has been added`));
    setTimeout(() => {
      dispatch(clearNotification(id));
    }, 2000);
  };
}
