import React from "react";
import {connect} from 'react-redux'
// import * as Chord from "tonal-chord"
import {keyToState, toneToState, chordTypeToState} from "../actions"

class KeyChordButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){

// Event listeners for all key letters, tone (for lack of better word) and chord types to trigger redux action on click
    let keyClass = document.getElementsByClassName("key")
    for (let i = 0; i < keyClass.length; i++) {
      keyClass[i].addEventListener("click", (x) => {
        this.props.dispatch(keyToState(x.target.value))
      })
    }

    let toneClass = document.getElementsByClassName("tone")
    for (let i = 0; i < toneClass.length; i++) {
      toneClass[i].addEventListener("click", (x) => {
        this.props.dispatch(toneToState(x.target.value))
      })
    }

    let chordTypeClass = document.getElementsByClassName("chord-type")
    for (let i = 0; i < chordTypeClass.length; i++) {
      chordTypeClass[i].addEventListener("click", (x) => {
        this.props.dispatch(chordTypeToState(x.target.value))
      })
    }
  }


  render() { 
    return (
<div className="keyChordContainer">

<div className="row">
  <div id="chord-display">
    {<p>Selected Chord: {this.props.selectedChord.selectedKey}{this.props.selectedChord.selectedTone}{this.props.selectedChord.selectedChordType}</p>}
  </div>

  <div id="note-display">
    {<p>
      Chord Notes: 
      {/* placeholder so we can display chord notes on screen */}
    </p>}
  </div>
</div>

<div className="row">
  <div className="key-row">
    <button className="key" type="button" value="C">C</button>
    <button className="key" type="button" value="D">D</button>
    <button className="key" type="button" value="E">E</button>
    <button className="key" type="button" value="F">F</button>
    <button className="key" type="button" value="G">G</button>
    <button className="key" type="button" value="A">A</button>
    <button className="key" type="button" value="B">B</button>
  </div>

  <div className="tone-row">
    <button className="tone" type="button" value="#">#</button>
    <button className="tone" type="button" value="b">b</button>
    <button className="tone" type="button" value="">clear</button>
    {/* <button className="tone" type="button" value=""></button> */}
  </div>

  <div className="chord-type-row">
    <button className="chord-type" type="button" value="maj">Major</button>
    <button className="chord-type" type="button" value="m">minor</button>
    <button className="chord-type" type="button" value="7">7th</button>
    <button className="chord-type" type="button" value="maj7">Major7</button>
    <button className="chord-type" type="button" value="m7">minor7</button>
    <button className="chord-type" type="button" value="dim">diminished</button>
    </div>
  </div>
</div>
      )
  }
}

function mapStateToProps(state) {
  return {
    selectedChord: state.selectedChord
  }
}

export default connect(mapStateToProps)(KeyChordButtons)