import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Oils.css';

const Oils = ({ oils }) => {
  return (
    <ul className="oils">
      {
        oils.map((oil) => {
          return (
            <li key={oil.oil}>
              {oil.oil}
            </li>
          );
        })
      }
    </ul>
  );
};

Oils.propTypes = {
  oils: PropTypes.arrayOf(PropTypes.object),
};

function mapStateToProps(state) {
  return { oils: state.oils };
}

export default connect(mapStateToProps)(Oils);
