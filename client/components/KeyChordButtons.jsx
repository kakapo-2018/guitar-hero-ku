import React, { Component } from "react";
import {connect} from 'react-redux'
import {keyToState, toneToState, chordTypeToState} from "../actions"

class KeyChordButtons extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
// Event listeners for all key letters and chord types to trigger display on click
    let keyClass = document.getElementsByClassName("key")
    for (let i = 0; i < keyClass.length; i++) {
      keyClass[i].addEventListener("click", (x) => {
        this.setState({inputKey: x.target.value})
        this.props.dispatch(keyToState(x.target.value))
      })
    }

    let toneClass = document.getElementsByClassName("tone")
    for (let i = 0; i < toneClass.length; i++) {
      toneClass[i].addEventListener("click", (x) => {
        this.setState({inputTone: x.target.value})
        this.props.dispatch(toneToState(x.target.value))
      })
    }

    let chordTypeClass = document.getElementsByClassName("chord-type")
    for (let i = 0; i < chordTypeClass.length; i++) {
      chordTypeClass[i].addEventListener("click", (x) => {
        this.setState({inputChordType: x.target.value})
        this.props.dispatch(chordTypeToState(x.target.value))
      })
    }
  }


  render() { 

    return (
      <div className="keyChordContainer">

        <div id="chord-display">
        {<p>Selected Chord: {this.props.selectedChord.selectedKey}{this.props.selectedChord.selectedTone}{this.props.selectedChord.selectedChordType}</p>}
        </div>

        <div className="keys">
          <div className="keyRow">
            <input className="key" type="button" value="C"></input>
            <input className="key" type="button" value="D"></input>
            <input className="key" type="button" value="E"></input>
            <input className="key" type="button" value="F"></input>
            <input className="key" type="button" value="G"></input>
            <input className="key" type="button" value="A"></input>
            <input className="key" type="button" value="B"></input>

          </div>
          <div className="toneRow">
            <input className="tone" type="button" value="#"></input>
            <input className="tone" type="button" value="b"></input>

          </div>
        </div>
        <div className="chords">
          <div className="chordRow">
            <input className="chord-type" type="button" value="M"></input>
            <input className="chord-type" type="button" value="m"></input>

            {/* <input className="chord-type" type="button" value="Dom"></input>
            <input className="chord-type" type="button" value="Dim"></input>
            <input className="chord-type" type="button" value="Half-Dim"></input> */}

          </div>
        </div>
      </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    selectedChord: state.selectedChord
  }
}

export default connect(mapStateToProps)(KeyChordButtons)