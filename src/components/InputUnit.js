import React from 'react';
import PropTypes from 'prop-types';
import './InputUnit.css';

// TODO: override browser styles or convert to text type input?

const InputUnit = ({ name, id, label, unit, min, max, onChange, value }) => {
  return (
    <div className="input-unit">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type="number" min={min} max={max} onChange={onChange} value={value} />
      <div className="unit">{unit}</div>
    </div>
  );
};

InputUnit.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  unit: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default InputUnit;
