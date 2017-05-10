import React, { Component } from 'react';

class Controls extends Component {
  constructor(props) {
    super(props);

    // this.addTime = this.addTime.bind(this);
    // this.substractTime = this.substractTime.bind(this);
  }

  addTime(newVal) {
    // console.log('Adding 1 minute');
    return () => {
      this.props.onAddTime(newVal);
    }

  }

  // we can do it like in addTime return () => { ... }
  substractTime(newVal) {
    // console.log('Substract 1 minute');
    this.props.onSubstractTime(newVal);
  }

  clearTimer() {
    console.log('clear timer');
  }

  render() {
    const { rest } = this.props;
    const { session } = this.props;
    return (
      <div className='controls'>
        <div className='btn-group'>
          <p>break length</p>
          <div className='button-counter'>
            <button className='button primary hollow' onClick={() => this.substractTime('rest')}>-</button>
            <span>{rest}</span>
            <button className='button primary hollow rest' onClick={this.addTime('rest')}>+</button>
          </div>
        </div>

        <button className='button alert hollow clear' onClick={this.clearTimer}>Clear</button>

        <div className='btn-group'>
          <p>session length</p>
          <div className='button-counter'>
            <button className='button primary hollow' onClick={() => this.substractTime('session')}>-</button>
            <span>{session}</span>
            <button className='button primary hollow' onClick={this.addTime('session')}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;
