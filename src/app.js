import 'babel-polyfill';
import greeting from './timer';
import './scss/style.scss';

if (module.hot) {
  module.hot.accept();
}

console.log('Hello, this is react');

greeting();
