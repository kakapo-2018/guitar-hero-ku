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
            <button className="key" type="button" value="C">C</button>
            <button className="key" type="button" value="D">D</button>
            <button className="key" type="button" value="E">E</button>
            <button className="key" type="button" value="F">F</button>
            <button className="key" type="button" value="G">G</button>
            <button className="key" type="button" value="A">A</button>
            <button className="key" type="button" value="B">B</button>

          </div>
          <div className="toneRow">
            <button className="tone" type="button" value="#">#</button>
            <button className="tone" type="button" value="b">b</button>
            <button className="tone" type="button" value="">clear</button>
            {/* <button className="tone" type="button" value=""></button> */}

          </div>
        </div>
        <div className="chords">
          <div className="chordRow">
            <button className="chord-type" type="button" value="M">Major</button>
            <button className="chord-type" type="button" value="m">minor</button>

            {/* <button className="chord-type" type="button" value="Dom"></button>
            <button className="chord-type" type="button" value="Dim"></button>
            <button className="chord-type" type="button" value="Half-Dim"></button> */}

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