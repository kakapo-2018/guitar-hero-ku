import React from "react";
import {connect} from "react-redux"
import {keyToState, toneToState, qualityToState} from "../actions"

class KeyChordButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){

// ---- Event listeners to trigger redux action on click
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

    let qualityClass = document.getElementsByClassName("quality")
    for (let i = 0; i < qualityClass.length; i++) {
      qualityClass[i].addEventListener("click", (x) => {
        this.props.dispatch(qualityToState(x.target.value))
      })
    }
  }

render() { 
  return (
  <div className="keyChordContainer">

  <div className="row">
    <div id="chord-display">
      {<p><strong>Selected Chord:</strong> {this.props.selectedChord.selectedKey}{this.props.selectedChord.selectedTone}{this.props.selectedChord.selectedQuality}</p>}
    </div>

    <div id="note-display">
      <p><strong>Notes:</strong> <span id="note-display-text"></span></p>
    </div>
  </div>

    <div className="chord-buttons-row">
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
      </div>
    </div>

    <div className="chord-buttons-row">
      <div className="quality-row">
        <button className="quality" type="button" value="maj">Major</button>
        <button className="quality" type="button" value="m">minor</button>
        <button className="quality" type="button" value="7">7th</button>
        <button className="quality" type="button" value="maj7">Major7</button>
        <button className="quality" type="button" value="m7">minor7</button>
        <button className="quality" type="button" value="dim">diminished</button>
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