import React from 'react';
import PropTypes from 'prop-types';
import './InputUnit.css';

// TODO: override browser styles or convert to text type input?

const InputUnit = ({ name, id, label, unit, min, max, onChange, value, onBlur, error }) => {
  return (
    <div className={error ? 'input-unit error' : 'input-unit'}>
      <input
        id={id} name={name} type="number" min={min} max={max} onChange={onChange} value={value} onBlur={onBlur}
      />
      <div className="unit">{unit}</div>
      <label htmlFor={id}>{label}</label>
      {error && <p>{error}</p>}
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
  value: PropTypes.string,
  onBlur: PropTypes.func,
  error: PropTypes.string
};

export default InputUnit;
