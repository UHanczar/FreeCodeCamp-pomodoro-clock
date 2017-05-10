import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  // we can do it like in addTime return () => { ... } like we did in clearTimer
  substractTime(newVal) {
    // console.log('Substract 1 minute');
    return () => {
      this.props.onSubstractTime(newVal);
    }
  }

  clearTimer() {
    // return () => {
      this.props.onClearTimer();
    // }
  }

  render() {
    const { restControl } = this.props;
    const { sessionControl } = this.props;
    return (
      <div className='controls'>
        <div className='btn-group'>
          <p>break length</p>
          <div className='button-counter'>
            <button className='button primary hollow' onClick={this.substractTime('rest')}>-</button>
            <span>{restControl}</span>
            <button className='button primary hollow rest' onClick={this.addTime('rest')}>+</button>
          </div>
        </div>

        <button className='button alert hollow clear' onClick={() => this.clearTimer()}>Clear</button>

        <div className='btn-group'>
          <p>session length</p>
          <div className='button-counter'>
            <button className='button primary hollow' onClick={this.substractTime('session')}>-</button>
            <span>{sessionControl}</span>
            <button className='button primary hollow' onClick={this.addTime('session')}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

Controls.propTypes = {
  restControl: PropTypes.number.isRequired,
  sessionControl: PropTypes.number.isRequired,
  onAddTime: PropTypes.func.isRequired,
  onSubstractTime: PropTypes.func.isRequired,
  onClearTimer: PropTypes.func.isRequired
};

export default Controls;
