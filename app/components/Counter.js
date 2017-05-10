import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.formatSeconds = this.formatSeconds.bind(this);
  }

  formatSeconds(totalSeconds) {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds - seconds);

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${minutes}:${seconds}`;
  }

  render() {
    const { count } = this.props;
    return (
      <div className='counter'>
        <h3 className='clock-text'>Work</h3>
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
  count: PropTypes.number.isRequired
};

export default Counter;
