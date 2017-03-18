import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './timer.jsx';
import './scss/style.scss';

console.log('Hello, this is react!');

ReactDOM.render(<Greeting />, document.getElementById('root'));
