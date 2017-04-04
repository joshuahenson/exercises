import React from 'react';
import Button from './Button';
import Checkbox from './Checkbox';
import Radio from './Radio';

const App = () => {
  return (
    <div>
      <div>
        <Radio name="soap_type" id="type_radio_1" label="Bar (NaOH)" />
        <Radio name="soap_type" id="type_radio_2" label="Liquid (KOH)" />
      </div>
      <hr />
      <Checkbox name="percent-checkbox" id="percent-checkbox" label="Add oils by percentage?" />
      <hr />
      <div>
        <Button>Regular</Button>
        <Button buttonClass="primary" round>Primary</Button>
        <Button buttonClass="accent">Accent</Button>
        <Button buttonClass="primary round">-</Button>
        <Button buttonClass="primary-outline round">+</Button>
      </div>
    </div>
  );
};

export default App;
