import React, { Component } from 'react';

import Controls from './Controls';
import Counter from './Counter';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rest: 5,
      session: 25,
      work: true
    };

    this.handleOnAddTime = this.handleOnAddTime.bind(this);
    this.handleOnSubstractTime = this.handleOnSubstractTime.bind(this);
  }

  handleOnAddTime(newVal) {
    // console.log('this', this);
    if (newVal === 'rest') {
      const newRest = this.state.rest + 1;
      this.setState(() => {
        return {
          rest: newRest
        };
      });
    } else if (newVal === 'session') {
      const newSession = this.state.session + 1;
      this.setState(() => {
        return {
          session: newSession
        };
      });
    }
  }

  handleOnSubstractTime(newVal) {
    // console.log('Substracting 1');
    if (newVal === 'rest') {
      const newRest = this.state.rest - 1;
      this.setState(() => {
        return {
          rest: newRest
        };
      });
    } else if (newVal === 'session') {
      const newSession = this.state.session - 1;
      this.setState(() => {
        return {
          session: newSession
        };
      });
    }
  }

  render() {
    const { rest } = this.state;
    const { session } = this.state;
    const { work } = this.state;

    return (
      <div className='timer'>
        <Counter count={work ? session : rest} />
        <Controls rest={rest} session={session} onAddTime={this.handleOnAddTime} onSubstractTime={this.handleOnSubstractTime} />
      </div>
    );
  }
}

export default Timer;
