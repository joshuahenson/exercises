import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputUnit from './InputUnit';
import { setOilValue } from '../actions';
import './Oils.css';

const Oils = ({ oils, unit, byPercent, setOilValue }) => {
  return (
    <ul className="oils">
      {
        oils.map((oil) => {
          return (
            <li key={oil.oil}>
              <InputUnit
                id={`${oil.oilId}_oil_weight`} label={oil.oil} min="0" value={oil.value}
                unit={byPercent ? '%' : unit}
                onChange={e => setOilValue(e.target.value, oil.oilId)}
              />
            </li>
          );
        })
      }
    </ul>
  );
};

Oils.propTypes = {
  oils: PropTypes.arrayOf(PropTypes.object),
  unit: PropTypes.string,
  byPercent: PropTypes.bool,
  setOilValue: PropTypes.func
};

function mapStateToProps(state) {
  return {
    oils: state.oils,
    unit: state.unit,
    byPercent: state.byPercent
  };
}

export default connect(mapStateToProps, { setOilValue })(Oils);
