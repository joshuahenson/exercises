import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import Checkbox from './Checkbox';
import FilteredInput from './FilteredInput';
import Radio from './Radio';
import Oils from './Oils';
import InputUnit from './InputUnit';
import {
  pickSoapType, addOil, pickUnit, setOilWeight, setWaterRatio, setSuperfatting, setByPercent
} from '../actions';

// const dummyData = ['Avocado Oil', 'Coconut Oil', 'Olive Oil'];
const dummyData = () => {
  const data = ['Avocado Oil', 'Coconut Oil', 'Olive Oil', 'dsfdlskajflkjasdfljsajhkjhkjhkljhkjhkjhkljhkljhkljhkjhdlkfjsldkjf'];
  for (let i = 65; i < 80; i++) {
    data.push(String.fromCharCode(i));
  }
  return data;
};

const App = (
  {
    soapType, pickSoapType, addOil, unit, pickUnit, oilWeight, setOilWeight,
    waterRatio, setWaterRatio, superfatting, setSuperfatting, byPercent, setByPercent
  }) => {
  return (
    <form>
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
        <legend>Oil Weight</legend>
        <InputUnit
          id="oil_weight" label="Total Wt." min="0" unit={unit} value={oilWeight}
          onChange={e => setOilWeight(e.target.value)}
        />
        <Radio
          name="weight_units" id="oz_unit" label="Ounces (oz)" value="oz"
          checked={unit === 'oz'}
          clickHandler={() => pickUnit('oz')}
        />
        <Radio
          name="weight_units" id="lb_unit" label="Pounds (lbs)" value="lbs"
          checked={unit === 'lbs'}
          clickHandler={() => pickUnit('lbs')}
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

      <fieldset>
        <legend>Water Ratio</legend>
        <InputUnit
          id="water_ratio" min="0" max="100" unit="%" value={waterRatio}
          onChange={e => setWaterRatio(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <legend>Superfatting</legend>
        <InputUnit
          id="superfatting" min="0" max="100" unit="%" value={superfatting}
          onChange={e => setSuperfatting(e.target.value)}
        />
      </fieldset>

      <div>
        <Checkbox
          name="percent_checkbox" id="percent_checkbox" label="Add oils by percentage?"
          checked={byPercent}
          clickHandler={() => setByPercent()}
        />
      </div>
      <div>
        <Button>Regular</Button>
        <Button buttonClass="primary" round>Primary</Button>
        <Button buttonClass="accent">Accent</Button>
        <Button buttonClass="primary round">-</Button>
        <Button buttonClass="primary-outline round">+</Button>
      </div>
      <div >
        <FilteredInput data={dummyData()} clickHandler={addOil} />
        <Oils />
      </div>
    </form>
  );
};

App.propTypes = {
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
  setByPercent: PropTypes.func
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
  { pickSoapType, addOil, pickUnit, setOilWeight, setWaterRatio, setSuperfatting, setByPercent }
)(App);
