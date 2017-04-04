import React from 'react';
import Button from './Button';
import Checkbox from './Checkbox';
import FilteredInput from './FilteredInput';
import Radio from './Radio';

// const dummyData = ['Avocado Oil', 'Coconut Oil', 'Olive Oil'];
const dummyData = () => {
  const data = ['Avocado Oil', 'Coconut Oil', 'Olive Oil', 'dsfdlskajflkjasdfljsajhkjhkjhkljhkjhkjhkljhkljhkljhkjhdlkfjsldkjf'];
  for (let i = 65; i < 80; i++) {
    data.push(String.fromCharCode(i));
  }
  return data;
};

const App = () => {
  return (
    <div>
      <div>
        <Radio name="soap_type" id="type_radio_1" label="Bar (NaOH)" />
        <Radio name="soap_type" id="type_radio_2" label="Liquid (KOH)" />
      </div>
      <div>
        <Checkbox name="percent-checkbox" id="percent-checkbox" label="Add oils by percentage?" />
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
    </div>
  );
};

export default App;
