import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import Checkbox from './Checkbox';
import FilteredInput from './FilteredInput';
import Radio from './Radio';
import { pickSoapType } from '../actions';

// const dummyData = ['Avocado Oil', 'Coconut Oil', 'Olive Oil'];
const dummyData = () => {
  const data = ['Avocado Oil', 'Coconut Oil', 'Olive Oil', 'dsfdlskajflkjasdfljsajhkjhkjhkljhkjhkjhkljhkljhkljhkjhdlkfjsldkjf'];
  for (let i = 65; i < 80; i++) {
    data.push(String.fromCharCode(i));
  }
  return data;
};

const App = ({ soapType, pickSoapType }) => {
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
      <div>
        <Checkbox name="percent_checkbox" id="percent_checkbox" label="Add oils by percentage?" />
      </div>
      <div>
        <Button>Regular</Button>
        <Button buttonClass="primary" round>Primary</Button>
        <Button buttonClass="accent">Accent</Button>
        <Button buttonClass="primary round">-</Button>
        <Button buttonClass="primary-outline round">+</Button>
      </div>
      <div >
        <FilteredInput data={dummyData()} />
      </div>
    </form>
  );
};

App.propTypes = {
  soapType: PropTypes.string,
  pickSoapType: PropTypes.func
};

function mapStateToProps(state) {
  return { soapType: state.soapType };
}

export default connect(mapStateToProps, { pickSoapType })(App);
