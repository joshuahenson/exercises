import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputUnit from './InputUnit';
import { setOilValue, removeOil } from '../actions';
import './Oils.css';

const Oils = ({ oils, unit, byPercent, setOilValue, removeOil, oilWeight }) => {
  const totalIngredients = oils.reduce((a, b) => (a + parseInt(b.value, 10)), 0);
  return (
    <div>
      <ul className="oils">
        {
          oils.map((oil) => {
            return (
              <li key={oil.oil}>
                <div className="i-b">
                  <InputUnit
                    id={`${oil.oilId}_oil_weight`} label={oil.oil} min="0" value={oil.value}
                    unit={byPercent ? '%' : unit}
                    onChange={e => setOilValue(e.target.value, oil.oilId)}
                  />
                </div>
                <button className="remove" type="button" onClick={() => removeOil(oil.oilId)}>
                  X
                </button>
              </li>
            );
          })
        }
      </ul>
      <p>
        {
          byPercent ?
          `${100 - totalIngredients}% remaining` :
          `${oilWeight - totalIngredients}${unit} remaining`
        }
      </p>
    </div>
  );
};

Oils.propTypes = {
  oils: PropTypes.arrayOf(PropTypes.object),
  unit: PropTypes.string,
  byPercent: PropTypes.bool,
  setOilValue: PropTypes.func,
  removeOil: PropTypes.func,
  oilWeight: PropTypes.string
};

function mapStateToProps(state) {
  return {
    oils: state.oils,
    unit: state.unit,
    byPercent: state.byPercent,
    oilWeight: state.oilWeight
  };
}

export default connect(mapStateToProps, { setOilValue, removeOil })(Oils);
