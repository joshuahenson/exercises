import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

const Checkbox = ({ name, id, label, checked, clickHandler }) => {
  return (
    <div className="checkbox">
      <input id={id} name={name} type="checkbox" checked={checked} onChange={clickHandler} />
      <label htmlFor={id} className="checkbox-label">{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  clickHandler: PropTypes.func
};

export default Checkbox;
