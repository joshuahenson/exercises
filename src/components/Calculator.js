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
  pickSoapType, addOil, pickUnit, setOilWeight, setWaterPercent, setSuperfatting, setByPercent,
  resetDefaults, clearAll
} from '../actions';
import './Calculator.css';

// TODO: add notification when adding oil

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      touched: {
        waterPercent: false,
        superfatting: false,
        oilWeight: false
      },
      errors: {
        waterPercent: '',
        superfatting: '',
        oilWeight: ''
      }
    };
    this.handlePercentBlur = this.handlePercentBlur.bind(this);
    this.validatePercent = this.validatePercent.bind(this);
    this.handleWaterChange = this.handleWaterChange.bind(this);
    this.handleSuperfattingChange = this.handleSuperfattingChange.bind(this);
    this.handleGtzBlur = this.handleGtzBlur.bind(this);
    this.validateGtz = this.validateGtz.bind(this);
    this.handleOilWeightChange = this.handleOilWeightChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handlePercentBlur(e) {
    if (!this.state.touched[e.target.name]) {
      this.setState({ touched: { ...this.state.touched, [e.target.name]: true } });
      this.validatePercent(e, true);
    }
  }
  validatePercent(e, bool = false) {
    if (this.state.touched[e.target.name] || bool) {
      if (e.target.value === '' || e.target.value <= 0 || e.target.value >= 100) {
        this.setState({ errors: { ...this.state.errors, [e.target.name]: 'Number between 0 and 100 required' } });
      } else {
        this.setState({ errors: { ...this.state.errors, [e.target.name]: '' } });
      }
    }
  }
  handleWaterChange(e) {
    this.props.setWaterPercent(e.target.value);
    this.validatePercent(e);
  }
  handleSuperfattingChange(e) {
    this.props.setSuperfatting(e.target.value);
    this.validatePercent(e);
  }
  handleGtzBlur(e) {
    if (!this.state.touched[e.target.name]) {
      this.setState({ touched: { ...this.state.touched, [e.target.name]: true } });
      this.validateGtz(e, true);
    }
  }
  validateGtz(e, bool = false) {
    if (this.state.touched[e.target.name] || bool) {
      if (e.target.value <= 0) {
        this.setState({ errors: { ...this.state.errors, [e.target.name]: 'Number greater than 0 required' } });
      } else {
        this.setState({ errors: { ...this.state.errors, [e.target.name]: '' } });
      }
    }
  }
  handleOilWeightChange(e) {
    this.props.setOilWeight(e.target.value);
    this.validateGtz(e);
  }
  handleSubmit(e) {
    const { history, setByPercent, byPercent, oilWeight } = this.props;
    const { errors } = this.state;
    e.preventDefault();
    if (errors.waterPercent || errors.superfatting || errors.oilWeight) {
      // TODO: alert errors
    } else {
      if (byPercent) {
        setByPercent(byPercent, oilWeight);
      }
      history.push('/recipe');
    }
  }
  render() {
    const {
      soapType, pickSoapType, addOil, unit, pickUnit, oilWeight, waterPercent,
      superfatting, byPercent, setByPercent, resetDefaults, clearAll
    } = this.props;
    const { errors } = this.state;
    return (
      <div className="calculator">
        <form onSubmit={this.handleSubmit}>
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
              <legend>Water: % of Oils</legend>
              <InputUnit
                id="water_Percent" min="0" max="100" unit="%" value={waterPercent}
                name="waterPercent" onChange={this.handleWaterChange}
                onBlur={this.handlePercentBlur} error={errors.waterPercent}
              />
            </fieldset>

            <div className="row">
              <fieldset>
                <legend>Superfatting</legend>
                <InputUnit
                  id="superfatting" min="0" max="100" unit="%" value={superfatting}
                  name="superfatting" onChange={this.handleSuperfattingChange}
                  onBlur={this.handlePercentBlur} error={errors.superfatting}
                />
              </fieldset>

              <fieldset>
                <legend>Oil Weight</legend>
                <InputUnit
                  id="oil_weight" min="0" unit={unit} value={oilWeight}
                  name="oilWeight" onChange={this.handleOilWeightChange}
                  onBlur={this.handleGtzBlur} error={errors.oilWeight}
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
  }
}

Calculator.propTypes = {
  soapType: PropTypes.string,
  pickSoapType: PropTypes.func,
  addOil: PropTypes.func,
  unit: PropTypes.string,
  pickUnit: PropTypes.func,
  oilWeight: PropTypes.string,
  setOilWeight: PropTypes.func,
  waterPercent: PropTypes.string,
  setWaterPercent: PropTypes.func,
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
    waterPercent: state.waterPercent,
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
    setWaterPercent,
    setSuperfatting,
    setByPercent,
    resetDefaults,
    clearAll }
)(Calculator);
