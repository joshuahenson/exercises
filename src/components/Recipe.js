import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import round from 'lodash/round';
import './Recipe.css';

// TODO: validate other things in case someone loads route directly

const Recipe = ({ oils, unit, oilWeight, waterPercent, soapType }) => {
  if (oils.length === 0) {
    return <Redirect to="/" />;
  }
  return (
    <div className="recipe">
      <table>
        <thead>
          <tr>
            <th className="ingredient">Ingredients</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Water</td>
            <td>{`${round(oilWeight * waterPercent / 100, 2)} ${unit}`}</td>
          </tr>
          <tr>
            <td>{soapType === 'naoh' ? 'Sodium Hydroxide (NaOH)' : 'Potassium Hydroxide (KOH)'}</td>
            <td>{`${round(oils.reduce((a, b) => (a + b.value * b[soapType]), 0), 2)} ${unit}`}</td>
          </tr>
          {oils.map((oil) => {
            return (
              <tr key={oil.oilId}>
                <td>{oil.oil}</td>
                <td>{`${oil.value} ${unit}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Recipe.propTypes = {
  oils: PropTypes.arrayOf(PropTypes.object),
  unit: PropTypes.string,
  oilWeight: PropTypes.string,
  waterPercent: PropTypes.string,
  soapType: PropTypes.string
};

function mapStateToProps(state) {
  return {
    oils: state.oils,
    unit: state.unit,
    oilWeight: state.oilWeight,
    waterPercent: state.waterPercent,
    soapType: state.soapType
  };
}

export default connect(mapStateToProps)(Recipe);
