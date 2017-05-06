import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import round from 'lodash/round';
import './Recipe.css';

// TODO: redirect to calculator if no oils

const Recipe = ({ oils, unit, oilWeight, waterRatio, soapType }) => {
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
            <td>{`${round(oilWeight * waterRatio / 100, 2)} ${unit}`}</td>
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
  waterRatio: PropTypes.string,
  soapType: PropTypes.string
};

function mapStateToProps(state) {
  return {
    oils: state.oils,
    unit: state.unit,
    oilWeight: state.oilWeight,
    waterRatio: state.waterRatio,
    soapType: state.soapType
  };
}

export default connect(mapStateToProps)(Recipe);
