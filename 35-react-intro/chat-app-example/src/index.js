import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import cheese from './data.js'

ReactDOM.render(<App greeting={"hi"} another='yo' data={cheese} />, document.getElementById('root'));
