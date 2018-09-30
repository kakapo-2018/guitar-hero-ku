import React from "react"
import {connect} from 'react-redux'

import * as Chord from "tonal-chord"

class Fretboard extends React.Component {
  constructor(props){
    super(props)

    this.lightUpNote = this.lightUpNote.bind(this)
    this.lightUpChord = this.lightUpChord.bind(this)
    this.getFretList = this.getFretList.bind(this)
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

// maybe need to do this differently, IE need the full chord info when lighting up so to actually get chords rather than a jumble of notes that could make a chord if sorted
getFretList() {
  let testnote = "C4" // change to be incoming note. Need to split between scinote and normal notes
  let list = []
  let frets = document.getElementsByClassName("fret")
    for (let i = 0; i < frets.length; i++) {
      if (frets[i].attributes.scinote.textContent === testnote) {
        console.log(frets[i].attributes.id.value)
        // console.log(frets[i].attributes.scinote.textContent)
        this.lightUpNote(frets[i].attributes.id.value)
      }

      // console.log(frets[i].attributes.note) // note without sci
      // console.log(frets[i].attributes.scinote) //note with sci
      // console.log(frets[i].attributes.class)
      // console.log(frets[i].attributes.string) //name of string
      // console.log(frets[i].attributes.fret) //name of fret
      // console.log(frets[i].attributes.string) // all classes
    }
  console.log(list)

// frets[i].attributes.id.nodeValue // or value //get fretID
// frets[i].classList.value)//gets all classes as a string with spaces
}


getChordNotes() {
//get key:
  if (this.props.selectedChord.selectedTone) {
    let chordKey = this.props.selectedChord.selectedKey + this.props.selectedChord.selectedTone
    console.log(chordKey)
  }
  else {
    let chordKey = this.props.selectedChord.selectedKey
    console.log(chordKey)
  }

  // let notes = Chord.notes(chordKey, this.props.selectedChord.selectedChordType)


  // for (let i = 0; i < notes.length; i++) {
  //   let thisNote = String(notes[i])
  //   // this.lightUpChord(thisNote)
  // }
}

lightUpChord(incoming) {
    console.log("incoming is", incoming)


// ---------------------------- IN PROGRESS --------------------

// Build a major chord given a tonic
// limit to 1 note per string and not above fret 5
// translate sharps and flats.... somehow. Each "#" + 1, each "b" -1 ?
// need to select tonic without sharp/flat interference
// start with thicketst/highest-numbered string, look into first five frets for instance of note. THEN build
// do a test run with selecting any fret and getting it to print off all higher frets in sequential order, ignoring any that are past the fret limit
// still would be nicer if tonal had a way to build by scientific notation


// add a check: If ##, take init letter and replace F## -> G, etc
// OR, and probably better, make the selection by relative place. Maybe


// ------------------ OLD but working functionality for single sharps
// //for sharps
//     if (incoming.includes("#")) {
//       // change "#" to "sharp" to match class name
//       let arr = incoming.split("#")
//       arr.push("sharp")
//       let noteInWords = arr.join("")

//       // get all divs with that class and add lit class
//       let notesByClass = document.getElementsByClassName(noteInWords)
//       for (let i = 0; i < notesByClass.length; i++) {
//         notesByClass[i].classList.add("lit")
//       }
//     }
//     else {
//       let notesByClass = document.getElementsByClassName(incoming)
//       for (let i = 0; i < notesByClass.length; i++) {
//         notesByClass[i].classList.add("lit")
//       }
//     }
// // DOESN'T WORK FOR DOUBLE SHARPS. SIGH


}





render() {
this.getChordNotes()
  this.getFretList()

  return (
    <div className="fretboard">

{/* Probably should add full flats and sharp possibilities on every note... but cannot be bothered right now and we may not need them */}

      <div className="string" id="first-string">
        <div className="fret string1 fret0" string="string1" fret="fret0" note="E" scinote="E4" id="fret0-string1">E</div>
        <div className="fret string1 fret1" string="string1" fret="fret1" note="F" scinote="F4" id="fret1-string1">F</div>
        <div className="fret string1 fret2" string="string1" fret="fret2" note="Fsharp Gflat" scinote="F4sharp G4flat" id="fret2-string1">F#</div>
        <div className="fret string1 fret3" string="string1" fret="fret3" note="G" scinote="G4" id="fret3-string1">G</div>
        <div className="fret string1 fret4" string="string1" fret="fret4" note="Gsharp Aflat" scinote="G4sharp A4flat" id="fret4-string1">G#</div>
        <div className="fret string1 fret5" string="string1" fret="fret5" note="A" scinote="A4" id="fret5-string1">A</div>
        <div className="fret string1 fret6" string="string1" fret="fret6" note="Asharp Bflat" scinote="A4sharp B4flat" id="fret6-string1">A#</div>
        <div className="fret string1 fret7" string="string1" fret="fret7" note="B" scinote="B4" id="fret7-string1">B</div>
        <div className="fret string1 fret8" string="string1" fret="fret8" note="C" scinote="C5" id="fret8-string1">C</div>
        <div className="fret string1 fret9" string="string1" fret="fret9" note="Csharp Dflat" scinote="C5sharp D5flat" id="fret9-string1">C#</div>
        <div className="fret string1 fret10" string="string1" fret="fret10" note="D" scinote="D5" id="fret10-string1">D</div>
        <div className="fret string1 fret11" string="string1" fret="fret11" note="Dsharp Eflat" scinote="D5sharp E5flat" id="fret11-string1">D#</div>
        <div className="fret string1 fret12" string="string1" fret="fret12" note="E" scinote="E5" id="fret12-string1">E</div>
      </div>

      <div className="string" id="second-string">
        <div className="fret string2 fret0" string="string2" fret="fret0" note="B" scinote="B3" id="fret0-string2">B</div>
        <div className="fret string2 fret1" string="string2" fret="fret1" note="C" scinote="C4" id="fret1-string2">C</div>
        <div className="fret string2 fret2" string="string2" fret="fret2" note="Csharp" scinote="Dflat"
id="fret2-string2">C#</div>
        <div className="fret string2 fret3" string="string2" fret="fret3" note="D" scinote="D4" id="fret3-string2">D</div>
        <div className="fret string2 fret4" string="string2" fret="fret4" note="Dsharp Eflat" scinote="D4sharp E4flat" id="fret4-string2">D#</div>
        <div className="fret string2 fret5" string="string2" fret="fret5" note="E" scinote="E4" id="fret5-string2">E</div>
        <div className="fret string2 fret6" string="string2" fret="fret6" note="F" scinote="F4" id="fret6-string2">F</div>
        <div className="fret string2 fret7" string="string2" fret="fret7" note="Fsharp Gflat" scinote="F4sharp G4flat" id="fret7-string2">F#</div>
        <div className="fret string2 fret8" string="string2" fret="fret8" note="G" scinote="G4" id="fret8-string2">G</div>
        <div className="fret string2 fret9" string="string2" fret="fret9" note="Gsharp Aflat" scinote="G4sharp A4flat" id="fret9-string2">G#</div>
        <div className="fret string2 fret10" string="string2" fret="fret10" note="A" scinote="A4" id="fret10-string2">A</div>
        <div className="fret string2 fret11" string="string2" fret="fret11" note="Asharp Bflat" scinote="A4sharp B4flat" id="fret11-string2">A#</div>
        <div className="fret string2 fret12" string="string2" fret="fret12" note="B" scinote="B4" id="fret12-string2">B</div>
      </div>

      <div className="string" id="third-string">
        <div className="fret string3 fret0" string="string3" fret="fret0" note="G" scinote="G3" id="fret0-string3">G</div>
        <div className="fret string3 fret1" string="string3" fret="fret1" note="Gsharp Aflat" scinote="G3sharp A3flat" id="fret1-string3">G#</div>
        <div className="fret string3 fret2" string="string3" fret="fret2" note="A" scinote="A3" id="fret2-string3">A</div>
        <div className="fret string3 fret3" string="string3" fret="fret3" note="Asharp Bflat" scinote="A3sharp B3flat" id="fret3-string3">A#</div>
        <div className="fret string3 fret4" string="string3" fret="fret4" note="B" scinote="B3" id="fret4-string3">B</div>
        <div className="fret string3 fret5" string="string3" fret="fret5" note="C" scinote="C4" id="fret5-string3">C</div>
        <div className="fret string3 fret6" string="string3" fret="fret6" note="Csharp Dflat" scinote="C4sharp D4flat" id="fret6-string3">C#</div>
        <div className="fret string3 fret7" string="string3" fret="fret7" note="D" scinote="D4" id="fret7-string3">D</div>
        <div className="fret string3 fret8" string="string3" fret="fret8" note="Dsharp E4flat" scinote="D4sharp E4flat" id="fret8-string3">D#</div>
        <div className="fret string3 fret9" string="string3" fret="fret9" note="E" scinote="E4" id="fret9-string3">E</div>
        <div className="fret string3 fret10" string="string3" fret="fret10" note="F" scinote="F4" id="fret10-string3">F</div>
        <div className="fret string3 fret11" string="string3" fret="fret11" note="Fsharp Gflat" scinote="F4sharp G4flat" id="fret11-string3">F#</div>
        <div className="fret string3 fret12" string="string3" fret="fret12" note="G" scinote="G4" id="fret12-string3">G</div>
      </div>

      <div className="string" id="fourth-string">
        <div className="fret string4 fret0" string="string4" fret="fret0" note="D" scinote="D3" id="fret0-string4">D</div>
        <div className="fret string4 fret1" string="string4" fret="fret1" note="Dsharp Eflat" scinote="D3sharp E3flat" id="fret1-string4">D#</div>
        <div className="fret string4 fret2" string="string4" fret="fret2" note="E" scinote="E3" id="fret2-string4">E</div>
        <div className="fret string4 fret3" string="string4" fret="fret3" note="F" scinote="F3" id="fret3-string4">F</div>
        <div className="fret string4 fret4" string="string4" fret="fret4" note="Fsharp Gflat" scinote="F3sharp G3flat" id="fret4-string4">F#</div>
        <div className="fret string4 fret5" string="string4" fret="fret5" note="G" scinote="G3" id="fret5-string4">G</div>
        <div className="fret string4 fret6" string="string4" fret="fret6" note="Gsharp Aflat" scinote="G3sharp A3flat" id="fret6-string4">G#</div>
        <div className="fret string4 fret7" string="string4" fret="fret7" note="A" scinote="A3" id="fret7-string4">A</div>
        <div className="fret string4 fret8" string="string4" fret="fret8" note="Asharp Bflat" scinote="A3sharp B3flat" id="fret8-string4">A#</div>
        <div className="fret string4 fret9" string="string4" fret="fret9" note="B" scinote="B3" id="fret9-string4">B</div>
        <div className="fret string4 fret10" string="string4" fret="fret10" note="C" scinote="C4" id="fret10-string4">C</div>
        <div className="fret string4 fret11" string="string4" fret="fret11" note="Csharp Dflat" scinote="C4sharp D4flat" id="fret11-string4">C#</div>
        <div className="fret string4 fret12" string="string4" fret="fret12" note="D" scinote="D4" id="fret12-string4">D</div>
      </div>

      <div className="string" id="fifth-string">
        <div className="fret string5 fret0" string="string5" fret="fret0" note="A" scinote="A2" id="fret0-string5">A</div>
        <div className="fret string5 fret1" string="string5" fret="fret1" note="Asharp Bflat" scinote="A2sharp B2flat" id="fret1-string5">A#</div>
        <div className="fret string5 fret2" string="string5" fret="fret2" note="B" scinote="B2" id="fret2-string5">B</div>
        <div className="fret string5 fret3" string="string5" fret="fret3" note="C" scinote="C3" id="fret3-string5">C</div>
        <div className="fret string5 fret4" string="string5" fret="fret4" note="Csharp Dflat" scinote="C3sharp D3flat" id="fret4-string5">C#</div>
        <div className="fret string5 fret5" string="string5" fret="fret5" note="D" scinote="D3" id="fret5-string5">D</div>
        <div className="fret string5 fret6" string="string5" fret="fret6" note="Dsharp Eflat" scinote="D3sharp E3flat" id="fret6-string5">D#</div>
        <div className="fret string5 fret7" string="string5" fret="fret7" note="E" scinote="E3" id="fret7-string5">E</div>
        <div className="fret string5 fret8" string="string5" fret="fret8" note="F" scinote="F3" id="fret8-string5">F</div>
        <div className="fret string5 fret9" string="string5" fret="fret9" note="Fsharp Gflat" scinote="F3sharp G3flat" id="fret9-string5">F#</div>
        <div className="fret string5 fret10" string="string5" fret="fret10" note="G" scinote="G3" id="fret10-string5">G</div>
        <div className="fret string5 fret11" string="string5" fret="fret11" note="Gsharp Aflat" scinote="G3sharp A3flat" id="fret11-string5">G#</div>
        <div className="fret string5 fret12" string="string5" fret="fret12" note="A" scinote="A3" id="fret12-string5">A</div>
      </div>

      <div className="string" id="sixth-string">
        <div className="fret string6 fret0" string="string6" fret="fret0" note="E" scinote="E2" id="fret0-string6">E</div>
        <div className="fret string6 fret1" string="string6" fret="fret1" note="F" scinote="F2" id="fret1-string6">F</div>
        <div className="fret string6 fret2" string="string6" fret="fret2" note="Fsharp Gflat" scinote="F2sharp G2flat" id="fret2-string6">F#</div>
        <div className="fret string6 fret3" string="string6" fret="fret3" note="G" scinote="G2" id="fret3-string6">G</div>
        <div className="fret string6 fret4" string="string6" fret="fret4" note="Gsharp Aflat" scinote="G2sharp A2flat" id="fret4-string6">G#</div>
        <div className="fret string6 fret5" string="string6" fret="fret5" note="A" scinote="A2" id="fret5-string6">A</div>
        <div className="fret string6 fret6" string="string6" fret="fret6" note="Asharp Bflat" scinote="A2sharp B2flat" id="fret6-string6">A#</div>
        <div className="fret string6 fret7" string="string6" fret="fret7" note="B" scinote="B2" id="fret7-string6">B</div>
        <div className="fret string6 fret8" string="string6" fret="fret8" note="C" scinote="C3" id="fret8-string6">C</div>
        <div className="fret string6 fret9" string="string6" fret="fret9" note="Csharp Dflat" scinote="C3sharp D3flat" id="fret9-string6">C#</div>
        <div className="fret string6 fret10" string="string6" fret="fret10" note="D" scinote="D3" id="fret10-string6">D</div>
        <div className="fret string6 fret11" string="string6" fret="fret11" note="Dsharp Eflat" scinote="D3sharp E3flat" id="fret11-string6">D#</div>
        <div className="fret string6 fret12" string="string6" fret="fret12" note="E" scinote="E3" id="fret12-string6">E</div>

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
