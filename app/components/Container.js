import React, { Component } from 'react';

import Timer from './Timer';

class Container extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='header-text'>FCC Pomodoro Clock</h1>
        <Timer />
      </div>
    );
  }
}

export default Container;
