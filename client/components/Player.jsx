import React, { Component } from 'react';
import waaclock from 'waaclock'
// import clock from '../waaClock'

class Player extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      steps: [0, 0, 0, 0],
      currentStep: 0,
      playing: false
    };
  }
  
  componentDidMount() {
    this.context = new AudioContext();
    this.clock = new waaclock(this.context);

    
  }
  
  handleTick({ deadline }) {
    const { currentStep, steps } = this.state;
    
    if (steps[currentStep % steps.length]) {
      trigger(this.context, deadline);
    }
    
    setTimeout(() => {
      this.setState({ currentStep: currentStep + 1 });
    }, deadline - this.context.currentTime);
  }
  
  handlePlayPress() {

    this.clock.callbackAtTime(() => {
      console.log("wow!!!");
      
    }, 20)

    if (!this.state.playing) {
       this.setState({ 
        currentStep: 0,
        playing: true
      }, () => {
        this.clock.start();
        this.tickEvent = this.clock.callbackAtTime(
            this.handleTick.bind(this),
            this.context.currentTime
         ).repeat(0.47);
      });
    } else {
     this.setState(
        { playing: false },
        () => {
          this.clock.stop();
          this.tickEvent = null;
        }
      );
    }
  }
  
  render() {
    const { currentStep, playing, steps } = this.state;
 

    return (
      <div className="sequencer-wrapper">
        <div className="step-display">
          {`Current Step: ${currentStep % steps.length}`}
        </div>
        <button 
          className="play-button"
          onClick={() => this.handlePlayPress()}
        >
          {playing ? 'Stop' : 'Play'}
        </button>
      </div>
    );
  }
  
}


export default Player;