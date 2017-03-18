import 'babel-polyfill';
import greeting from './timer';

if (module.hot) {
  module.hot.accept();
}

console.log('Hello, this is react');

greeting();
