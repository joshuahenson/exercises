import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import round from 'lodash/round';
import './Recipe.css';

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
      {
        soapType === 'naoh' &&
        <table>
          <thead>
            <tr>
              <th>Bar Qualities</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bubbly</td>
              <td>{Math.round(oils.reduce((a, b) => (a + b.percent * b.bubbly / 100), 0))}</td>
            </tr>
            <tr>
              <td>Cleansing</td>
              <td>{Math.round(oils.reduce((a, b) => (a + b.percent * b.cleansing / 100), 0))}</td>
            </tr>
            <tr>
              <td>Conditioning</td>
              <td>{Math.round(oils.reduce((a, b) => (a + b.percent * b.conditioning / 100), 0))}</td>
            </tr>
            <tr>
              <td>Creamy</td>
              <td>{Math.round(oils.reduce((a, b) => (a + b.percent * b.creamy / 100), 0))}</td>
            </tr>
            <tr>
              <td>Hardness</td>
              <td>{Math.round(oils.reduce((a, b) => (a + b.percent * b.hardness / 100), 0))}</td>
            </tr>
            <tr>
              <td>Iodine</td>
              <td>{Math.round(oils.reduce((a, b) => (a + b.percent * b.iodine / 100), 0))}</td>
            </tr>
            <tr>
              <td>Ins</td>
              <td>{Math.round(oils.reduce((a, b) => (a + b.percent * b.ins / 100), 0))}</td>
            </tr>
          </tbody>
        </table>
      }
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
