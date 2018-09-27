import React, { Component } from "react";

class KeyChordButtons extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // }

    this.displayChord = this.displayChord.bind(this)
    this.changeSelectedChordLetter = this.changeSelectedChordLetter.bind(this)
    this.changeSelectedChordType = this.changeSelectedChordType.bind(this)
  }

  componentDidMount(){

// Add event listener to all key letters and chord types to trigger displayChord on click
    let keyClass = document.getElementsByClassName("keys")
    for (let i = 0; i < keyClass.length; i++) {
      keyClass[i].addEventListener("click", (x) => {
        this.displayChord(x.target.value)
        this.changeSelectedChordLetter(x.target.value)
      })
    }

    let chordTypeClass = document.getElementsByClassName("chord-type")
    for (let i = 0; i < chordTypeClass.length; i++) {
      chordTypeClass[i].addEventListener("click", (x) => {
        this.displayChord(x.target.value)
        this.changeSelectedChordType(x.target.value)
      })
    }
  }

  displayChord(e) {
    console.log('display chord!', e)     
  }

  changeSelectedChordLetter(letter) {
    console.log("in change selected chord letter")
    document.getElementById("selected-chord-letter").innerHTML = letter;
  }

  changeSelectedChordType(type) {
    console.log("in change selected chord type")
    document.getElementById("selected-chord-type").innerHTML = type;
  }

  render() { 
    
    return (
      <div className="keyChordContainer">
        <div className="chord-display">
          <p>Current Chord: <span id="selected-chord-letter"></span><span id="selected-chord-type"></span></p>
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

            <input className="chord-type" type="button" value="Dom"></input>
            <input className="chord-type" type="button" value="Dim"></input>
            <input className="chord-type" type="button" value="Half-Dim"></input>

          </div>
        </div>
      </div>
      );
  }
}
 
export default KeyChordButtons;