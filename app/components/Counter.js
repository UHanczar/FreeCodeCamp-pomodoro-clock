import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);

    // this.formatSeconds = this.formatSeconds.bind(this);
  }

  formatSeconds(totalSeconds) {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds - seconds) / 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${minutes}:${seconds}`;
  }

  startCounter() {
    // console.log('Counter is started.');
    this.props.onStartCounter();
  }

  render() {
    const { count, work, color } = this.props;
    const opacity = parseFloat(`0.${color}`, 10).toString();
    const alarmColor = `rgba(235, 86, 22, ${opacity})`;
    return (
      <div className='counter' style={count < 60 ? { backgroundColor: alarmColor, border: '2px solid rgba(94, 11, 11, 1)' } : {}} onClick={() => this.startCounter()}>
        <h3 className='clock-text'>{ work }</h3>
        <span className='clock-text'>
          {this.formatSeconds(count)}
        </span>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  work: PropTypes.string.isRequired
};

export default Counter;
