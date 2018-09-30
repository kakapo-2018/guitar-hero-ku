import React from "react"
import {connect} from 'react-redux'

import * as Chord from "tonal-chord"

class Fretboard extends React.Component {
  constructor(props){
    super(props)

    this.lightUpNote = this.lightUpNote.bind(this)
    this.lightUpChord = this.lightUpChord.bind(this)
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


lightUpNote(incomingNote) {
    let selectedNote = document.getElementById(incomingNote)
    selectedNote.classList.add("lit")
}

lightUpChord(incomingNote) {
    console.log("incomingNote is", incomingNote)

// ---------------------------- IN PROGRESS --------------------

  // if (incomingNote.includes("#") )


// //for sharps
//     if (incomingNote.includes("#")) {
//       // change "#" to "sharp" to match class name
//       let arr = incomingNote.split("#")
//       arr.push("sharp")
//       let noteInWords = arr.join("")

//       // get all divs with that class and add lit class
//       let notesByClass = document.getElementsByClassName(noteInWords)
//       for (let i = 0; i < notesByClass.length; i++) {
//         notesByClass[i].classList.add("lit")
//       }
//     }
//     else {
//       let notesByClass = document.getElementsByClassName(incomingNote)
//       for (let i = 0; i < notesByClass.length; i++) {
//         notesByClass[i].classList.add("lit")
//       }
//     }
// // do the same for flats

// // DOESN'T WORK FOR DOUBLE SHARPS. SIGH
// add a check: If ##, take init letter and replace F## -> G, etc
// OR, and probably better, make the selection by relative place. Maybe

}


getChordNotes() {
  let chordKey = this.props.selectedChord.selectedKey + this.props.selectedChord.selectedTone
  let notes = Chord.notes(chordKey, this.props.selectedChord.selectedChordType)

  for (let i = 0; i < notes.length; i++) {
    let thisNote = String(notes[i])
    this.lightUpChord(thisNote)
  }
}



render() {
this.getChordNotes()

  return(
    <div className="fretboard">


      <div className="string" id="first-string">
        <div className="fret string1 fret0 E E4 open-note" id="fret0-string1">E</div>
        <div className="fret string1 fret1 F F4" id="fret1-string1">F</div>
        <div className="fret string1 fret2 Fsharp Gflat F4sharp G4flat sharp-or-flat" id="fret2-string1">F#</div>
        <div className="fret string1 fret3 G G4" id="fret3-string1">G</div>
        <div className="fret string1 fret4 Gsharp Aflat G4sharp A4flat sharp-or-flat" id="fret4-string1">G#</div>
        <div className="fret string1 fret5 A A4" id="fret5-string1">A</div>
        <div className="fret string1 fret6 Asharp Bflat A4sharp B4flat" id="fret6-string1">A#</div>
        <div className="fret string1 fret7 B B4" id="fret7-string1">B</div>
        <div className="fret string1 fret8 C C5" id="fret8-string1">C</div>
        <div className="fret string1 fret9 Csharp Dflat C5sharp D5flat" id="fret9-string1">C#</div>
        <div className="fret string1 fret10 D D5" id="fret10-string1">D</div>
        <div className="fret string1 fret11 Dsharp Eflat D5sharp E5flat" id="fret11-string1">D#</div>
        <div className="fret string1 fret12 E E5" id="fret12-string1">E</div>
      </div>

      <div className="string" id="second-string">
        <div className="fret string2 fret0 B B3 open-note" id="fret0-string2">B</div>
        <div className="fret string2 fret1 C C4" id="fret1-string2">C</div>
        <div className="fret string2 fret2 Csharp Dflat C4sharp D4flat sharp-or-flat" id="fret2-string2">C#</div>
        <div className="fret string2 fret3 D D4" id="fret3-string2">D</div>
        <div className="fret string2 fret4 Dsharp Eflat D4sharp E4flat sharp-or-flat" id="fret4-string2">D#</div>
        <div className="fret string2 fret5 E E4" id="fret5-string2">E</div>
        <div className="fret string2 fret6 F F4" id="fret6-string2">F</div>
        <div className="fret string2 fret7 Fsharp Gflat F4sharp G4flat" id="fret7-string2">F#</div>
        <div className="fret string2 fret8 G G4" id="fret8-string2">G</div>
        <div className="fret string2 fret9 Gsharp Aflat G4sharp A4flat" id="fret9-string2">G#</div>
        <div className="fret string2 fret10 A A4" id="fret10-string2">A</div>
        <div className="fret string2 fret11 Asharp Bflat A4sharp B4flat" id="fret11-string2">A#</div>
        <div className="fret string2 fret12 B B4" id="fret12-string2">B</div>
      </div>

      <div className="string" id="third-string">
        <div className="fret string3 fret0 G G3 open-note" id="fret0-string3">G</div>
        <div className="fret string3 fret1 Gsharp Aflat G3sharp A3flat sharp-or-flat" id="fret1-string3">G#</div>
        <div className="fret string3 fret2 A A3" id="fret2-string3">A</div>
        <div className="fret string3 fret3 Asharp Bflat A3sharp B3flat sharp-or-flat" id="fret3-string3">A#</div>
        <div className="fret string3 fret4 B B3" id="fret4-string3">B</div>
        <div className="fret string3 fret5 C C4" id="fret5-string3">C</div>
        <div className="fret string3 fret6 Csharp Dflat C4sharp D4flat" id="fret6-string3">C#</div>
        <div className="fret string3 fret7 D D4" id="fret7-string3">D</div>
        <div className="fret string3 fret8 Dsharp E4flat D4sharp E4flat" id="fret8-string3">D#</div>
        <div className="fret string3 fret9 E E4" id="fret9-string3">E</div>
        <div className="fret string3 fret10 F F4" id="fret10-string3">F</div>
        <div className="fret string3 fret11 Fsharp Gflat F4sharp G4flat" id="fret11-string3">F#</div>
        <div className="fret string3 fret12 G G4" id="fret12-string3">G</div>
      </div>

      <div className="string" id="fourth-string">
        <div className="fret string4 fret0 D D3 open-note" id="fret0-string4">D</div>
        <div className="fret string4 fret1 Dsharp Eflat D3sharp E3flat sharp-or-flat" id="fret1-string4">D#</div>
        <div className="fret string4 fret2 E E3" id="fret2-string4">E</div>
        <div className="fret string4 fret3 F F3" id="fret3-string4">F</div>
        <div className="fret string4 fret4 Fsharp Gflat F3sharp G3flat sharp-or-flat" id="fret4-string4">F#</div>
        <div className="fret string4 fret5 G G3" id="fret5-string4">G</div>
        <div className="fret string4 fret6 Gsharp Aflat G3sharp A3flat" id="fret6-string4">G#</div>
        <div className="fret string4 fret7 A A3" id="fret7-string4">A</div>
        <div className="fret string4 fret8 Asharp Bflat A3sharp B3flat" id="fret8-string4">A#</div>
        <div className="fret string4 fret9 B B3" id="fret9-string4">B</div>
        <div className="fret string4 fret10 C C4" id="fret10-string4">C</div>
        <div className="fret string4 fret11 Csharp Dflat C4sharp D4flat" id="fret11-string4">C#</div>
        <div className="fret string4 fret12 D D4" id="fret12-string4">D</div>
      </div>

      <div className="string" id="fifth-string">
        <div className="fret string5 fret0 A A2 open-note" id="fret0-string5">A</div>
        <div className="fret string5 fret1 Asharp Bflat A2sharp B2flat sharp-or-flat" id="fret1-string5">A#</div>
        <div className="fret string5 fret2 B B2" id="fret2-string5">B</div>
        <div className="fret string5 fret3 C C3" id="fret3-string5">C</div>
        <div className="fret string5 fret4 Csharp Dflat C3sharp D3flat sharp-or-flat" id="fret4-string5">C#</div>
        <div className="fret string5 fret5 D D3" id="fret5-string5">D</div>
        <div className="fret string5 fret6 Dsharp Eflat D3sharp E3flat" id="fret6-string5">D#</div>
        <div className="fret string5 fret7 E E3" id="fret7-string5">E</div>
        <div className="fret string5 fret8 F F3" id="fret8-string5">F</div>
        <div className="fret string5 fret9 Fsharp Gflat F3sharp G3flat" id="fret9-string5">F#</div>
        <div className="fret string5 fret10 G G3" id="fret10-string5">G</div>
        <div className="fret string5 fret11 Gsharp Aflat G3sharp A3flat" id="fret11-string5">G#</div>
        <div className="fret string5 fret12 A A3" id="fret12-string5">A</div>
      </div>

      <div className="string" id="sixth-string">
        <div className="fret string6 fret0 E E2 open-note" id="fret0-string6">E</div>
        <div className="fret string6 fret1 F F2" id="fret1-string6">F</div>
        <div className="fret string6 fret2 Fsharp Gflat F2sharp G2flat sharp-or-flat" id="fret2-string6">F#</div>
        <div className="fret string6 fret3 G G2" id="fret3-string6">G</div>
        <div className="fret string6 fret4 Gsharp Aflat G2sharp A2flat sharp-or-flat" id="fret4-string6">G#</div>
        <div className="fret string6 fret5 A A2" id="fret5-string6">A</div>
        <div className="fret string6 fret6 Asharp Bflat A2sharp B2flat" id="fret6-string6">A#</div>
        <div className="fret string6 fret7 B B2" id="fret7-string6">B</div>
        <div className="fret string6 fret8 C C3" id="fret8-string6">C</div>
        <div className="fret string6 fret9 Csharp Dflat C3sharp D3flat" id="fret9-string6">C#</div>
        <div className="fret string6 fret10 D D3" id="fret10-string6">D</div>
        <div className="fret string6 fret11 Dsharp Eflat D3sharp E3flat" id="fret11-string6">D#</div>
        <div className="fret string6 fret12 E E3" id="fret12-string6">E</div>

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
