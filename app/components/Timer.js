import React, { Component } from 'react';

import Controls from './Controls';
import Counter from './Counter';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rest: 300,
      restControl: 5,
      session: 1500,
      sessionControl: 25,
      work: true,
      countdown: false
    };

    this.handleAddTime = this.handleAddTime.bind(this);
    this.handleSubstractTime = this.handleSubstractTime.bind(this);
    this.handleStartCounter = this.handleStartCounter.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleClearTimer = this.handleClearTimer.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('s: ', this.state.session);
    console.log('w: ', this.state.work);

    if (this.state.countdown !== prevState.countdown) {
      if (this.state.countdown) {
        this.handleStart();
      } else {
        clearInterval(this.start);
        this.start = undefined;
      }
    }
  }

  handleStartCounter() {
    console.log('Start Timer!!!!');
    const { countdown } = this.state;
    console.log(countdown);
    this.setState(() => {
      return {
        countdown: !countdown
      };
    });
  }

  handleStart() {
    this.start = setInterval(() => {
      let newCount;
      const { work, rest, restControl, session, sessionControl } = this.state;
      if (work) {
        newCount = session - 1;
        this.setState({
          session: newCount
        });
      } else {
        newCount = rest - 1;
        this.setState({
          rest: newCount
        });
      }

      if (newCount <= 0) {
        // clearInterval(this.start);
        // this.start = undefined;
        this.setState({
          work: !work,
          rest: restControl * 60,
          session: sessionControl * 60
        });
      }
    }, 1000);
  }

  handleAddTime(newVal) {
    // console.log('this', this);
    if (!this.state.countdown) {
      if (newVal === 'rest') {
        const newRestControl = this.state.restControl + 1;
        const newRest = newRestControl * 60;

        this.setState(() => {
          return {
            rest: newRest,
            restControl: newRestControl
          };
        });
      } else if (newVal === 'session') {
        const newSessionControl = this.state.sessionControl + 1;
        const newSession = newSessionControl * 60;

        this.setState(() => {
          return {
            session: newSession,
            sessionControl: newSessionControl
          };
        });
      }
    }
  }

  handleSubstractTime(newVal) {
    // console.log('Substracting 1');
    if (!this.state.countdown) {
      if (newVal === 'rest') {
        if (this.state.restControl > 0) {
          const newRestControl = this.state.restControl - 1;
          const newRest = newRestControl * 60;

          this.setState(() => {
            return {
              rest: newRest,
              restControl: newRestControl
            };
          });
        }
      } else if (newVal === 'session') {
        if (this.state.sessionControl > 0) {
          const newSessionControl = this.state.sessionControl - 1;
          const newSession = newSessionControl * 60;

          this.setState(() => {
            return {
              session: newSession,
              sessionControl: newSessionControl
            };
          });
        }
      }
    }
  }

  handleClearTimer() {
    console.log('it works!!!');

    clearInterval(this.start);
    this.start = undefined;

    this.setState(() => {
      return {
        rest: 300,
        restControl: 5,
        session: 1500,
        sessionControl: 25,
        work: true,
        countdown: false
      };
    });
  }

  render() {
    const { rest } = this.state;
    const { session } = this.state;
    const { restControl } = this.state;
    const { sessionControl } = this.state;
    const { work } = this.state;

    return (
      <div className='timer'>
        <Counter
          work={work ? 'Work' : 'Break!'}
          count={work ? session : rest} onStartCounter={this.handleStartCounter}
        />

        <Controls
          restControl={restControl}
          sessionControl={sessionControl}
          onAddTime={this.handleAddTime} onSubstractTime={this.handleSubstractTime}
          onClearTimer={this.handleClearTimer}
        />
      </div>
    );
  }
}

export default Timer;
