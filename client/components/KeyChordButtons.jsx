import React from "react";
import {connect} from 'react-redux'
import {keyToState, toneToState, qualityToState} from "../actions"

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

    let qualityClass = document.getElementsByClassName("chord-quality")
    for (let i = 0; i < qualityClass.length; i++) {
      qualityClass[i].addEventListener("click", (x) => {
        this.props.dispatch(qualityToState(x.target.value))
      })
    }
  }

  render() { 
    return (
      <div className="keyChordContainer">

        <div id="chord-display">
        {<p>Selected Chord: {this.props.selectedChord.selectedKey}{this.props.selectedChord.selectedTone}{this.props.selectedChord.selectedQuality}</p>}
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
            <button className="chord-quality" type="button" value="M">Major</button>
            <button className="chord-quality" type="button" value="m">minor</button>

            {/* <button className="chord-quality" type="button" value="Dom"></button>
            <button className="chord-quality" type="button" value="Dim"></button>
            <button className="chord-quality" type="button" value="Half-Dim"></button> */}

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