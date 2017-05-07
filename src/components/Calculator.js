import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import sap from '../data/sap.json';
import Button from './Button';
import Checkbox from './Checkbox';
import FilteredInput from './FilteredInput';
import Radio from './Radio';
import Oils from './Oils';
import InputUnit from './InputUnit';
import {
  pickSoapType, addOil, pickUnit, setOilWeight, setWaterRatio, setSuperfatting, setByPercent,
  resetDefaults, clearAll
} from '../actions';
import './Calculator.css';

// TODO: add notification when adding oil

const handleSubmit = (e, history, setByPercent, byPercent, oilWeight) => {
  e.preventDefault();
  if (byPercent) {
    setByPercent(byPercent, oilWeight);
  }
  history.push('/recipe');
};

const Calculator = (
  {
    soapType, pickSoapType, addOil, unit, pickUnit, oilWeight, setOilWeight, waterRatio,
    setWaterRatio, superfatting, setSuperfatting, byPercent, setByPercent, resetDefaults,
    clearAll, history
  }) => {
  return (
    <div className="calculator">
      <form onSubmit={e => handleSubmit(e, history, setByPercent, byPercent, oilWeight)}>
        <div className="row">
          <fieldset>
            <legend>Soap Type</legend>
            <Radio
              name="soap_type" id="NaOH_soap_type" label="Bar (NaOH)" value="naoh"
              checked={soapType === 'naoh'}
              clickHandler={() => pickSoapType('naoh')}
            />
            <Radio
              name="soap_type" id="KOH_soap_type" label="Liquid (KOH)" value="koh"
              checked={soapType === 'koh'}
              clickHandler={() => pickSoapType('koh')}
            />
          </fieldset>

          <fieldset>
            <legend>Water Ratio</legend>
            <InputUnit
              id="water_ratio" min="0" max="100" unit="%" value={waterRatio}
              onChange={e => setWaterRatio(e.target.value)}
            />
          </fieldset>

          <div className="row">
            <fieldset>
              <legend>Superfatting</legend>
              <InputUnit
                id="superfatting" min="0" max="100" unit="%" value={superfatting}
                onChange={e => setSuperfatting(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <legend>Oil Weight</legend>
              <InputUnit
                id="oil_weight" min="0" unit={unit} value={oilWeight}
                onChange={e => setOilWeight(e.target.value)}
              />
              <Radio
                name="weight_units" id="oz_unit" label="Ounces (oz)" value="oz"
                checked={unit === 'oz'}
                clickHandler={() => pickUnit('oz')}
              />
              <Radio
                name="weight_units" id="lb_unit" label="Pounds (lb)" value="lb"
                checked={unit === 'lb'}
                clickHandler={() => pickUnit('lb')}
              />
              <Radio
                name="weight_units" id="g_unit" label="Grams (g)" value="g"
                checked={unit === 'g'}
                clickHandler={() => pickUnit('g')}
              />
              <Radio
                name="weight_units" id="kg_unit" label="Kilograms (kg)" value="kg"
                checked={unit === 'kg'}
                clickHandler={() => pickUnit('kg')}
              />
            </fieldset>
          </div>
        </div>
        <div className="row">
          <fieldset>
            <legend>Available Oils</legend>
            <FilteredInput data={sap} clickHandler={addOil} />
          </fieldset>

          <fieldset>
            <legend>Selected Oils</legend>
            <div className="col">
              <Checkbox
                name="percent_checkbox" id="percent_checkbox" label="Add oils by percentage?"
                checked={byPercent}
                clickHandler={() => setByPercent(byPercent, oilWeight)}
              />
              <Oils />
            </div>
          </fieldset>
        </div>
        <div className="row">
          <Button className="primary flex" type="button" clickHandler={resetDefaults}>
            Reset Defaults
          </Button>
          <Button className="primary flex" type="button" clickHandler={clearAll}>
            Clear All
          </Button>
          <Button className="accent flex-two" type="submit">Calculate</Button>
        </div>
      </form>
    </div>
  );
};

Calculator.propTypes = {
  soapType: PropTypes.string,
  pickSoapType: PropTypes.func,
  addOil: PropTypes.func,
  unit: PropTypes.string,
  pickUnit: PropTypes.func,
  oilWeight: PropTypes.string,
  setOilWeight: PropTypes.func,
  waterRatio: PropTypes.string,
  setWaterRatio: PropTypes.func,
  superfatting: PropTypes.string,
  setSuperfatting: PropTypes.func,
  byPercent: PropTypes.bool,
  setByPercent: PropTypes.func,
  resetDefaults: PropTypes.func,
  clearAll: PropTypes.func,
  history: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    soapType: state.soapType,
    unit: state.unit,
    oilWeight: state.oilWeight,
    waterRatio: state.waterRatio,
    superfatting: state.superfatting,
    byPercent: state.byPercent
  };
};

export default connect(
  mapStateToProps,
  { pickSoapType,
    addOil,
    pickUnit,
    setOilWeight,
    setWaterRatio,
    setSuperfatting,
    setByPercent,
    resetDefaults,
    clearAll }
)(Calculator);
