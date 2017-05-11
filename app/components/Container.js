import React, { Component } from 'react';

import Timer from './Timer';

class Container extends Component {
  render() {
    return (
      <div className='row'>
        <div className='container'>
          <h1 className='header-text'>Free Code Camp</h1>
          <Timer />
        </div>
      </div>
    );
  }
}

export default Container;
