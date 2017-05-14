import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Notification.css';

const Notification = ({ message }) => {
  return (
    <p className={message ? 'notification visible' : 'notification'}>{message}</p>
  );
};

Notification.propTypes = {
  message: PropTypes.string
};

function mapStateToProps(state) {
  return {
    message: state.notification.message
  };
}

export default connect(mapStateToProps)(Notification);
