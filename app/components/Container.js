import React, { Component } from 'react';

import Timer from './Timer';

class Container extends Component {
  render() {
    return (
      <div className='row'>
        <div className='column small-centered medium-8 large-6 container'>
          <h1 className='header-text'>Free Code Camp</h1>
          <Timer />
        </div>
      </div>
    );
  }
}

export default Container;
