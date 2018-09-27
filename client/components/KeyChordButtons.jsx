import React, { Component } from 'react';

class KeyChordButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() { 
    
    return (
      <div className="keyChordContainer">
        <div className="keys">
          <div className='keyRow'>
            <input className='topRowKeys' id='c-key' type='button' value='C' onClick={() => this.props.displayChord('C')}></input>
            <input className='topRowKeys' id='d-key' type='button' value='D' onClick={() => this.props.displayChord('D')}></input>

            <input className='topRowKeys' type='button' value='E'></input>
            <input className='topRowKeys' type='button' value='F'></input>
            <input className='topRowKeys' type='button' value='G'></input>
            <input className='topRowKeys' type='button' value='A'></input>
            <input className='topRowKeys' type='button' value='B'></input>

          </div>
          <div className="keyRow">

            <input className='bottomRowKeys' type='button' value='C#'></input>
            <input className='bottomRowKeys' type='button' value='D#'></input>
            <input className='bottomRowKeys' type='button' value='F#'></input>
            <input className='bottomRowKeys' type='button' value='G#'></input>
            <input className='bottomRowKeys' type='button' value='A#'></input>

          </div>
        </div>
        <div className="chords">
          <div className="chordRow">
            <input className='topRowChords' id='maj' type='button' value='M' onClick={() => this.props.displayChord()}></input>
            <input className='topRowChords' id='min' type='button' value='m' onClick={() => this.props.displayChord()}></input>

            <input className='topRowChords' type='button' value='Dom'></input>
            <input className='topRowChords' type='button' value='Dim'></input>
            <input className='topRowChords' type='button' value='Half-Dim'></input>

          </div>
        </div>
      </div>
      );
  }
}
 
export default KeyChordButtons;