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

export function setWaterPercent(Percent) {
  return {
    type: 'SET_WATER_Percent',
    Percent
  };
}

export function setSuperfatting(superfat) {
  return {
    type: 'SET_SUPERFATTING',
    superfat
  };
}

export function setByPercent(inPercent, oilWeight) {
  return {
    type: 'OIL_BY_PERCENT',
    inPercent,
    oilWeight
  };
}

export function setOilValue(value, oilId) {
  return {
    type: 'SET_OIL_VALUE',
    value,
    oilId
  };
}

export function resetDefaults() {
  return {
    type: 'RESET_DEFAULTS'
  };
}

export function clearAll() {
  return {
    type: 'CLEAR_ALL'
  };
}
