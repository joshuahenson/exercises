import React from 'react';
import Button from './Button';
import Radio from './Radio';

const App = () => {
  return (
    <div>
      <div>
        <Radio name="soap_type" id="type_radio_1" label="Bar (NaOH)" />
        <Radio name="soap_type" id="type_radio_2" label="Liquid (KOH)" />
      </div>
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
