import React, { PropTypes } from 'react';
import './Checkbox.css';

const Checkbox = ({ name, id, label }) => {
  return (
    <div className="checkbox">
      <input id={id} name={name} type="checkbox" />
      <label htmlFor={id} className="checkbox-label">{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string
};

export default Checkbox;
