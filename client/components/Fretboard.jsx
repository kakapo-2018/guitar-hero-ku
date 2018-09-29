import React from "react"
import {connect} from 'react-redux'

import * as Chord from "tonal-chord"

class Fretboard extends React.Component {
  constructor(props){
    super(props)

    this.lightUpNote = this.lightUpNote.bind(this)
    this.getChordNotes = this.getChordNotes.bind(this)
  }

  componentDidMount(){

// Add event listener to all frets to trigger lightUpNote on click
    let frets = document.getElementsByClassName("fret")
    for (let i = 0; i < frets.length; i++) {
      frets[i].addEventListener("click", (x) => {
        this.lightUpNote(x.target.id)
      })
    }

  }


lightUpNote(noteID) {
  let selectedNote = document.getElementById(noteID)
  selectedNote.classList.add("lit")
}

getChordNotes() {
  let notes = Chord.notes(this.props.selectedChord.selectedKey, this.props.selectedChord.selectedChordType)
  console.log(notes)
  for (let i = 0; i < notes.length; i++) {
    let thisNote = String(notes[i])

// need to use as a filtering tool, find all with matching class, and then return IDs for all
// OR
// use this as a way to immediately get only the particular notes wanted


    // this.lightUpNote(thisNote)
  }
}



render() {
// console.log(Chord.notes(this.props.selectedChord.selectedKey, this.props.selectedChord.selectedChordType));
this.getChordNotes()

  return(
    <div className="fretboard">

      <div className="string" id="Estring1">
        <div className="fret E E5 Estring1" id="fret-E5-Estring1">E</div>
        <div className="fret F F5 Estring1" id="fret-F5-Estring1">F</div>
        <div className="fret Fsharp F5sharp Estring1" id="fret-F5sharp-Estring1">F#</div>
        <div className="fret G G5 Estring1" id="fret-G5-Estring1">G</div>
        <div className="fret Gsharp G5sharp Estring1" id="fret-G5sharp-Estring1">G#</div>
        <div className="fret A A5 Estring1" id="fret-A5-Estring1">A</div>
      </div>

      <div className="string" id="Bstring2">
        <div className="fret B B5 Bstring2" id="fret-B5-Bstring2">B</div>
        <div className="fret C C5 Bstring2" id="fret-C5-Bstring2">C</div>
        <div className="fret Csharp C5sharp Bstring2" id="fret-C5sharp-Bstring2">C#</div>
        <div className="fret D D5 Bstring2" id="fret-D5-Bstring2">D</div>
        <div className="fret Dsharp D5sharp Bstring2" id="fret-D5sharp-Bstring2">D#</div>
        <div className="fret E E5 Bstring2" id="fret-E5-Bstring2">E</div>
      </div>

      <div className="string" id="Gstring3">
        <div className="fret G G4 Gstring3" id="fret-G4-Gstring3">G</div>
        <div className="fret Gsharp G4sharp Gstring3" id="fret-G4sharp-Gstring3">G#</div>
        <div className="fret A A5 Gstring3" id="fret-A5-Gstring3">A</div>
        <div className="fret Asharp A5sharp Gstring3" id="fret-A5sharp-Gstring3">A#</div>
        <div className="fret B B5 Gstring3" id="fret-B5-Gstring3">B</div>
        <div className="fret C C5 Gstring3" id="fret-C5-Gstring3">C</div>
      </div>

      <div className="string" id="Dstring4">
        <div className="fret D D4 Dstring4" id="fret-D4-Dstring4">D</div>
        <div className="fret Dsharp D4sharp Dstring4" id="fret-D4sharp-Dstring4">D#</div>
        <div className="fret E E4 Dstring4" id="fret-E4-Dstring4">E</div>
        <div className="fret F F4 Dstring4" id="fret-F4-Dstring4">F</div>
        <div className="fret Fsharp F4sharp Dstring4" id="fret-F4sharp-Dstring4">F#</div>
        <div className="fret G G4 Dstring4" id="fret-G4-Dstring4">G</div>
      </div>

      <div className="string" id="Astring5">
        <div className="fret A A4 Astring5" id="fret-A4-Astring5">A</div>
        <div className="fret Asharp A4sharp Astring5" id="fret-A4sharp-Astring5">A#</div>
        <div className="fret B B4 Astring5" id="fret-B4-Astring5">B</div>
        <div className="fret C C4 Astring5" id="fret-C4-Astring5">C</div>
        <div className="fret Csharp C4sharp Astring5" id="fret-C4sharp-Astring5">C#</div>
        <div className="fret D D4 Astring5" id="fret-D4-Astring5">D</div>
      </div>

      <div className="string" id="Estring6">
        <div className="fret E E3 Estring6" id="fret-E3-Estring6">E</div>
        <div className="fret F F3 Estring6" id="fret-F3-Estring6">F</div>
        <div className="fret Fsharp F3sharp Estring6" id="fret-F3sharp-Estring6">F#</div>
        <div className="fret G G3 Estring6" id="fret-G3-Estring6">G</div>
        <div className="fret Gsharp G3sharp Estring6" id="fret-G3sharp-Estring6">G#</div>
        <div className="fret A A4 Estring6" id="fret-A4-Estring6">A</div>
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

export default connect(mapStateToProps)(Fretboard)
