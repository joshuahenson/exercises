import React, { PropTypes } from 'react';
import './Radio.css';

const Radio = ({ name, id, label }) => {
  return (
    <div className="radio">
      <input id={id} name={name} type="radio" />
      <label htmlFor={id} className="radio-label">{label}</label>
    </div>
  );
};

Radio.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string
};

export default Radio;
