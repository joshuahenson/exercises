import React, { PropTypes } from 'react';
import './Radio.css';

const Radio = ({ name, id, label, value, checked, clickHandler }) => {
  return (
    <div className="radio">
      <input id={id} name={name} type="radio" value={value} checked={checked} onChange={clickHandler} />
      <label htmlFor={id} className="radio-label">{label}</label>
    </div>
  );
};

Radio.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  clickHandler: PropTypes.func
};

export default Radio;
