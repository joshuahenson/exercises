import React from 'react';
import Radio from './Radio';

const App = () => {
  return (
    <div>
      <Radio name="soap_type" id="type_radio_1" label="Bar (NaOH)" />
      <Radio name="soap_type" id="type_radio_2" label="Liquid (KOH)" />
    </div>
  );
};

export default App;
