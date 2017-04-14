import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Oils = ({ oils }) => {
  return (
    <ul>
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
