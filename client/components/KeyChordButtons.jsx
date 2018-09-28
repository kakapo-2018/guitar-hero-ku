import React, { Component } from "react";
import {connect} from 'react-redux'
import {getChord} from "../actions"

class KeyChordButtons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputChord: {}
    }

    this.updateState = this.updateState.bind(this)
  }

  componentDidMount(){
// Event listeners for all key letters and chord types to trigger display on click
    let keyClass = document.getElementsByClassName("keys")
    for (let i = 0; i < keyClass.length; i++) {
      keyClass[i].addEventListener("click", (x) => {
        document.getElementById("selected-chord-letter").innerHTML = x.target.value
      })
    }

    let chordTypeClass = document.getElementsByClassName("chord-type")
    for (let i = 0; i < chordTypeClass.length; i++) {
      chordTypeClass[i].addEventListener("click", (x) => {
        document.getElementById("selected-chord-type").innerHTML = x.target.value
      })
    }
  }


  updateState(){
    let inputKey = document.getElementById("selected-chord-letter").innerHTML
    let inputChordType = document.getElementById("selected-chord-type").innerHTML

    // let inputChord = {
    //   selectedKey: inputKey,
    //   selectedChordType: inputChordType
    // }
    console.log("getChord is", getChord)
    this.props.dispatch(getChord(inputKey, inputChordType))

  // this.setState({inputChord})
  }


  render() { 
//     this.props.dispatch(getChord())
console.log("KeyChordButton render")
console.log(this.state)
console.log(this.state.inputChord)

    return (
      <div className="keyChordContainer">

        <div id="chord-display">
          <p>Current Chord: <span id="selected-chord-letter"></span><span id="selected-chord-type"></span></p>
          <button onClick={this.updateState}>Find Chord</button><br /><br />
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
          <div className="keyRow">

            <input className="key" type="button" value="C#"></input>
            <input className="key" type="button" value="D#"></input>
            <input className="key" type="button" value="F#"></input>
            <input className="key" type="button" value="G#"></input>
            <input className="key" type="button" value="A#"></input>

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
    console.log("mapping state to props in KeyChordButtons")
    console.log(state.selectedChord)
  return {
    selectedChord: state.selectedChord
  }
}

export default connect(mapStateToProps)(KeyChordButtons)

// export default KeyChordButtons;