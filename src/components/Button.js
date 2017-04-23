import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, buttonClass }) => {
  return (
    <button className={buttonClass}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  buttonClass: PropTypes.string
};

export default Button;
