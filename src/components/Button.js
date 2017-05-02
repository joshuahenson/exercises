import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, className, type, clickHandler }) => {
  return (
    <button className={className} onClick={clickHandler} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  clickHandler: PropTypes.func
};

export default Button;
