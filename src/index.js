import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import API_KEY from '../secret.js'

//Create a new component. This should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// This this component's HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));


//15
