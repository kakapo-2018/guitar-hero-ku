import React from "react"
import {connect} from 'react-redux'
import * as Chord from "tonal-chord"
import * as Note from "tonal-note"
import {getAPIChordFrets} from "../chordAPI"
import { chord } from "tonal-dictionary";

class Fretboard extends React.Component {
  constructor(props){
    super(props)

    this.stateOfSharpFlats = this.stateOfSharpFlats.bind(this)
    this.displaySharpOrFlat = this.displaySharpOrFlat.bind(this)
    this.displaySharp = this.displaySharp.bind(this)
    this.displayFlat = this.displayFlat.bind(this)
    this.getChordKey = this.getChordKey.bind(this)
    this.getFretsForChord = this.getFretsForChord.bind(this)
    this.translateEnharmonics = this.translateEnharmonics.bind(this)
    this.getURLforAPI = this.getURLforAPI.bind(this)
    this.translateFretArrayToStrings = this.translateFretArrayToStrings.bind(this)
    this.clearLitNotes = this.clearLitNotes.bind(this)
    this.displayChordNotes = this.displayChordNotes.bind(this)
    this.lightUpNote = this.lightUpNote.bind(this)
    this.unLightNote = this.unLightNote.bind(this)
  }

componentDidMount() {
// --- Event listener for all frets to trigger lightUpNote on direct click
  let frets = document.getElementsByClassName("fret")
  for (let i = 0; i < frets.length; i++) {
    frets[i].addEventListener("click", (x) => {
      this.lightUpNote(x.target.id)
    })
    frets[i].addEventListener("dblclick", (x) => {
      this.unLightNote(x.target.id)
    })

  }
}

stateOfSharpFlats() {
  if (this.props.selectedChord.selectedTone !== undefined) {
    let sharpsAndFlats = document.getElementsByClassName("sharp-or-flat")
    for (let i = 0; i < sharpsAndFlats.length; i++) {
      this.displaySharpOrFlat(sharpsAndFlats[i].attributes.id.value)
    }
  }
}

displaySharpOrFlat(inputID) {
// ---- Adjust innerHTML of fretboard depending on tone selected
  let fretToAlter = document.getElementById(inputID)
    if (this.props.selectedChord.selectedTone === "#") {
      this.displaySharp(fretToAlter)
    }
    else if (this.props.selectedChord.selectedTone === "b") {
      this.displayFlat(fretToAlter)
    }
    if (this.props.selectedChord.selectedTone === "") {
      fretToAlter.innerHTML = ""
    }
}

displaySharp(fretToAlter) {
  if (fretToAlter.attributes.note.value === "Asharp-Bflat") {fretToAlter.innerHTML = "A#"}
  if (fretToAlter.attributes.note.value === "Csharp-Dflat") {fretToAlter.innerHTML = "C#"}
  if (fretToAlter.attributes.note.value === "Dsharp-Eflat") {fretToAlter.innerHTML = "D#"}
  if (fretToAlter.attributes.note.value === "Fsharp-Gflat") {fretToAlter.innerHTML = "F#"}
  if (fretToAlter.attributes.note.value === "Gsharp-Aflat") {fretToAlter.innerHTML = "G#"}
}

displayFlat(fretToAlter) {
  if (fretToAlter.attributes.note.value === "Asharp-Bflat") {fretToAlter.innerHTML = "Bb"}
  if (fretToAlter.attributes.note.value === "Csharp-Dflat") {fretToAlter.innerHTML = "Db"}
  if (fretToAlter.attributes.note.value === "Dsharp-Eflat") {fretToAlter.innerHTML = "Eb"}
  if (fretToAlter.attributes.note.value === "Fsharp-Gflat") {fretToAlter.innerHTML = "Gb"}
  if (fretToAlter.attributes.note.value === "Gsharp-Aflat") {fretToAlter.innerHTML = "Ab"}
}


getChordKey() {
// --- For getting the key, depending on if the tone is included:
  if (this.props.selectedChord.selectedTone) {
    return this.props.selectedChord.selectedKey + this.props.selectedChord.selectedTone
  }
  else {
    return this.props.selectedChord.selectedKey
  }
}

getFretsForChord() {
// --- For fetching the fret positions to light up each chord.
  this.clearLitNotes()

  let chordKey = this.getChordKey()
  let chordKeyForAPI = this.translateEnharmonics(chordKey) // e.g. C3 -> Db as API does not deal in sharps
  let chordQuality = this.props.selectedChord.selectedQuality || ""

  let URLforAPI = this.getURLforAPI(chordKeyForAPI, chordQuality)

  getAPIChordFrets(URLforAPI)
  .then(res => {
    if (res.body.length > 0) {
      let fretData = (res.body[0].strings || "").split(" ")
      this.translateFretArrayToStrings(fretData)
    }
  })
}

translateEnharmonics(chordKey) {
// ---- To convert keys with sharps to flats so they work for API
  if (chordKey != undefined && chordKey.includes("#") || chordKey != undefined && chordKey.includes("Cb") || chordKey != undefined && chordKey.includes("Fb")) {
    return Note.enharmonic(chordKey)
  }
  else return chordKey
}

getURLforAPI(chordKeyForAPI, chordQuality) {
  if (chordQuality === "maj" || chordQuality === "") {
    let URLforAPI = chordKeyForAPI
    return URLforAPI
    }
  else {
    let URLforAPI = chordKeyForAPI + "_" + chordQuality
    return URLforAPI
  }
}

translateFretArrayToStrings(fretArray) {
// ---- For capturing the fret numbers to light up each chord

  let thickToThinArray = fretArray.reverse()
  for (let i = 0; i < thickToThinArray.length; i++) {
    const thisFret = thickToThinArray[i];
    if (!isNaN(thisFret)) {
      let thisID = "fret" + thisFret + "-string" + (i+1)
      this.lightUpNote(thisID)
    }
    else {
      // Placeholder additional function for muted strings
    }
  }
}

clearLitNotes() {
// --- To clear all currently-lit divs when a new chord is selected
  let litNotes = document.getElementsByClassName("lit")
  while (litNotes.length > 0) {
  for (let i = 0; i < litNotes.length; i++) {
    this.unLightNote(litNotes[i].attributes.id.value)
    }
  }
}

displayChordNotes() {
  let chordNotes = Chord.notes(this.getChordKey(), this.props.selectedChord.selectedQuality)

  if (chordNotes.length > 0) {
    document.getElementById("note-display-text").innerHTML = chordNotes.join(" ")
  }
}

lightUpNote(incomingID) {
// --- To add the "lit" CSS class to selected fret divs
  let selectedNote = document.getElementById(incomingID)
  selectedNote.classList.add("lit")


  if (selectedNote.classList.contains("sharp-or-flat")) {
    if (this.props.selectedChord.selectedTone == undefined || this.props.selectedChord.selectedTone === "") {
      let chordNotes = Chord.notes(this.getChordKey())
      for (let i = 0; i < chordNotes.length; i++) {
        if (chordNotes[i].includes("#")) {
        this.displaySharp(selectedNote)
        }
        else if (chordNotes[i].includes("b")) {
        this.displayFlat(selectedNote)
        }
      }
    }
  }
}

unLightNote(incomingID) {
  let selectedNote = document.getElementById(incomingID)
  selectedNote.classList.remove("lit")
}

render() {
this.stateOfSharpFlats()
this.getFretsForChord()
this.displayChordNotes()

  return (
    <div className="fretboard">

    <div className="string" id="zero-string">
        <div className="fret string0 fret00">0</div>
        <div className="fret string0 fret01"></div>
        <div className="fret string0 fret02"></div>
        <div className="fret string0 fret03">3rd Fret</div>
        <div className="fret string0 fret04"></div>
        <div className="fret string0 fret05">5th Fret</div>
        <div className="fret string0 fret06"></div>
        <div className="fret string0 fret07">7th Fret</div>
        <div className="fret string0 fret08"></div>
        <div className="fret string0 fret09">9th Fret</div>
        <div className="fret string0 fret010"></div>
        <div className="fret string0 fret011"></div>
        <div className="fret string0 fret012">12th Fret</div>
      </div>

      <div className="string" id="first-string">
        <div className="fret string1 fret0" string="1" fret="0" note="E" scinote="E4" id="fret0-string1">E</div>
        <div className="fret string1 fret1" string="1" fret="1" note="F" scinote="F4" id="fret1-string1">F</div>
        <div className="fret string1 fret2 sharp-or-flat" string="1" fret="2" note="Fsharp-Gflat" scinote="F4sharp G4flat" id="fret2-string1"></div>
        <div className="fret string1 fret3" string="1" fret="3" note="G" scinote="G4" id="fret3-string1">G</div>
        <div className="fret string1 fret4 sharp-or-flat" string="1" fret="4" note="Gsharp-Aflat" scinote="G4sharp A4flat" id="fret4-string1"></div>
        <div className="fret string1 fret5" string="1" fret="5" note="A" scinote="A4" id="fret5-string1">A</div>
        <div className="fret string1 fret6 sharp-or-flat" string="1" fret="6" note="Asharp-Bflat" scinote="A4sharp B4flat" id="fret6-string1"></div>
        <div className="fret string1 fret7" string="1" fret="7" note="B" scinote="B4" id="fret7-string1">B</div>
        <div className="fret string1 fret8" string="1" fret="8" note="C" scinote="C5" id="fret8-string1">C</div>
        <div className="fret string1 fret9 sharp-or-flat" string="1" fret="9" note="Csharp-Dflat" scinote="C5sharp D5flat" id="fret9-string1"></div>
        <div className="fret string1 fret10" string="1" fret="10" note="D" scinote="D5" id="fret10-string1">D</div>
        <div className="fret string1 fret11 sharp-or-flat" string="1" fret="11" note="Dsharp-Eflat" scinote="D5sharp E5flat" id="fret11-string1"></div>
        <div className="fret string1 fret12" string="1" fret="12" note="E" scinote="E5" id="fret12-string1">E</div>
      </div>

      <div className="string" id="second-string">
        <div className="fret string2 fret0" string="2" fret="0" note="B" scinote="B3" id="fret0-string2">B</div>
        <div className="fret string2 fret1" string="2" fret="1" note="C" scinote="C4" id="fret1-string2">C</div>
        <div className="fret string2 fret2 sharp-or-flat" string="2" fret="2" note="Csharp-Dflat" scinote="C4sharp D4flat" id="fret2-string2"></div>
        <div className="fret string2 fret3" string="2" fret="3" note="D" scinote="D4" id="fret3-string2">D</div>
        <div className="fret string2 fret4 sharp-or-flat" string="2" fret="4" note="Dsharp-Eflat" scinote="D4sharp E4flat" id="fret4-string2"></div>
        <div className="fret string2 fret5" string="2" fret="5" note="E" scinote="E4" id="fret5-string2">E</div>
        <div className="fret string2 fret6" string="2" fret="6" note="F" scinote="F4" id="fret6-string2">F</div>
        <div className="fret string2 fret7 sharp-or-flat" string="2" fret="7" note="Fsharp-Gflat" scinote="F4sharp G4flat" id="fret7-string2"></div>
        <div className="fret string2 fret8" string="2" fret="8" note="G" scinote="G4" id="fret8-string2">G</div>
        <div className="fret string2 fret9 sharp-or-flat" string="2" fret="9" note="Gsharp-Aflat" scinote="G4sharp A4flat" id="fret9-string2"></div>
        <div className="fret string2 fret10" string="2" fret="10" note="A" scinote="A4" id="fret10-string2">A</div>
        <div className="fret string2 fret11 sharp-or-flat" string="2" fret="11" note="Asharp-Bflat" scinote="A4sharp B4flat" id="fret11-string2"></div>
        <div className="fret string2 fret12" string="2" fret="12" note="B" scinote="B4" id="fret12-string2">B</div>
      </div>

      <div className="string" id="third-string">
        <div className="fret string3 fret0" string="3" fret="0" note="G" scinote="G3" id="fret0-string3">G</div>
        <div className="fret string3 fret1 sharp-or-flat" string="3" fret="1" note="Gsharp-Aflat" scinote="G3sharp A3flat" id="fret1-string3"></div>
        <div className="fret string3 fret2" string="3" fret="2" note="A" scinote="A3" id="fret2-string3">A</div>
        <div className="fret string3 fret3 sharp-or-flat" string="3" fret="3" note="Asharp-Bflat" scinote="A3sharp B3flat" id="fret3-string3"></div>
        <div className="fret string3 fret4" string="3" fret="4" note="B" scinote="B3" id="fret4-string3">B</div>
        <div className="fret string3 fret5" string="3" fret="5" note="C" scinote="C4" id="fret5-string3">C</div>
        <div className="fret string3 fret6 sharp-or-flat" string="3" fret="6" note="Csharp-Dflat" scinote="C4sharp D4flat" id="fret6-string3"></div>
        <div className="fret string3 fret7" string="3" fret="7" note="D" scinote="D4" id="fret7-string3">D</div>
        <div className="fret string3 fret8 sharp-or-flat" string="3" fret="8" note="Dsharp-Eflat" scinote="D4sharp E4flat" id="fret8-string3"></div>
        <div className="fret string3 fret9" string="3" fret="9" note="E" scinote="E4" id="fret9-string3">E</div>
        <div className="fret string3 fret10" string="3" fret="10" note="F" scinote="F4" id="fret10-string3">F</div>
        <div className="fret string3 fret11 sharp-or-flat" string="3" fret="11" note="Fsharp-Gflat" scinote="F4sharp G4flat" id="fret11-string3"></div>
        <div className="fret string3 fret12" string="3" fret="12" note="G" scinote="G4" id="fret12-string3">G</div>
      </div>

      <div className="string" id="fourth-string">
        <div className="fret string4 fret0" string="4" fret="0" note="D" scinote="D3" id="fret0-string4">D</div>
        <div className="fret string4 fret1 sharp-or-flat" string="4" fret="1" note="Dsharp-Eflat" scinote="D3sharp E3flat" id="fret1-string4"></div>
        <div className="fret string4 fret2" string="4" fret="2" note="E" scinote="E3" id="fret2-string4">E</div>
        <div className="fret string4 fret3" string="4" fret="3" note="F" scinote="F3" id="fret3-string4">F</div>
        <div className="fret string4 fret4 sharp-or-flat" string="4" fret="4" note="Fsharp-Gflat" scinote="F3sharp G3flat" id="fret4-string4"></div>
        <div className="fret string4 fret5" string="4" fret="5" note="G" scinote="G3" id="fret5-string4">G</div>
        <div className="fret string4 fret6 sharp-or-flat" string="4" fret="6" note="Gsharp-Aflat" scinote="G3sharp A3flat" id="fret6-string4"></div>
        <div className="fret string4 fret7" string="4" fret="7" note="A" scinote="A3" id="fret7-string4">A</div>
        <div className="fret string4 fret8 sharp-or-flat" string="4" fret="8" note="Asharp-Bflat" scinote="A3sharp B3flat" id="fret8-string4"></div>
        <div className="fret string4 fret9" string="4" fret="9" note="B" scinote="B3" id="fret9-string4">B</div>
        <div className="fret string4 fret10" string="4" fret="10" note="C" scinote="C4" id="fret10-string4">C</div>
        <div className="fret string4 fret11 sharp-or-flat" string="4" fret="11" note="Csharp-Dflat" scinote="C4sharp D4flat" id="fret11-string4"></div>
        <div className="fret string4 fret12" string="4" fret="12" note="D" scinote="D4" id="fret12-string4">D</div>
      </div>

      <div className="string" id="fifth-string">
        <div className="fret string5 fret0" string="5" fret="0" note="A" scinote="A2" id="fret0-string5">A</div>
        <div className="fret string5 fret1 sharp-or-flat" string="5" fret="1" note="Asharp-Bflat" scinote="A2sharp B2flat" id="fret1-string5"></div>
        <div className="fret string5 fret2" string="5" fret="2" note="B" scinote="B2" id="fret2-string5">B</div>
        <div className="fret string5 fret3" string="5" fret="3" note="C" scinote="C3" id="fret3-string5">C</div>
        <div className="fret string5 fret4 sharp-or-flat" string="5" fret="4" note="Csharp-Dflat" scinote="C3sharp D3flat" id="fret4-string5"></div>
        <div className="fret string5 fret5" string="5" fret="5" note="D" scinote="D3" id="fret5-string5">D</div>
        <div className="fret string5 fret6 sharp-or-flat" string="5" fret="6" note="Dsharp-Eflat" scinote="D3sharp E3flat" id="fret6-string5"></div>
        <div className="fret string5 fret7" string="5" fret="7" note="E" scinote="E3" id="fret7-string5">E</div>
        <div className="fret string5 fret8" string="5" fret="8" note="F" scinote="F3" id="fret8-string5">F</div>
        <div className="fret string5 fret9 sharp-or-flat" string="5" fret="9" note="Fsharp-Gflat" scinote="F3sharp G3flat" id="fret9-string5"></div>
        <div className="fret string5 fret10" string="5" fret="10" note="G" scinote="G3" id="fret10-string5">G</div>
        <div className="fret string5 fret11 sharp-or-flat" string="5" fret="11" note="Gsharp-Aflat" scinote="G3sharp A3flat" id="fret11-string5"></div>
        <div className="fret string5 fret12" string="5" fret="12" note="A" scinote="A3" id="fret12-string5">A</div>
      </div>

      <div className="string" id="sixth-string">
        <div className="fret string6 fret0" string="6" fret="0" note="E" scinote="E2" id="fret0-string6">E</div>
        <div className="fret string6 fret1" string="6" fret="1" note="F" scinote="F2" id="fret1-string6">F</div>
        <div className="fret string6 fret2 sharp-or-flat" string="6" fret="2" note="Fsharp-Gflat" scinote="F2sharp G2flat" id="fret2-string6"></div>
        <div className="fret string6 fret3" string="6" fret="3" note="G" scinote="G2" id="fret3-string6">G</div>
        <div className="fret string6 fret4 sharp-or-flat" string="6" fret="4" note="Gsharp-Aflat" scinote="G2sharp A2flat" id="fret4-string6"></div>
        <div className="fret string6 fret5" string="6" fret="5" note="A" scinote="A2" id="fret5-string6">A</div>
        <div className="fret string6 fret6 sharp-or-flat" string="6" fret="6" note="Asharp-Bflat" scinote="A2sharp B2flat" id="fret6-string6"></div>
        <div className="fret string6 fret7" string="6" fret="7" note="B" scinote="B2" id="fret7-string6">B</div>
        <div className="fret string6 fret8" string="6" fret="8" note="C" scinote="C3" id="fret8-string6">C</div>
        <div className="fret string6 fret9 sharp-or-flat" string="6" fret="9" note="Csharp-Dflat" scinote="C3sharp D3flat" id="fret9-string6"></div>
        <div className="fret string6 fret10" string="6" fret="10" note="D" scinote="D3" id="fret10-string6">D</div>
        <div className="fret string6 fret11 sharp-or-flat" string="6" fret="11" note="Dsharp-Eflat" scinote="D3sharp E3flat" id="fret11-string6"></div>
        <div className="fret string6 fret12" string="6" fret="12" note="E" scinote="E3" id="fret12-string6">E</div>
      </div>

      <div className="string" id="seventh-string">
        <div className="fret string7 fret0"></div>
        <div className="fret string7 fret1"></div>
        <div className="fret string7 fret2"></div>
        <div className="fret string7 fret3"></div>
        <div className="fret string7 fret4"></div>
        <div className="fret string7 fret5"></div>
        <div className="fret string7 fret6"></div>
        <div className="fret string7 fret7"></div>
        <div className="fret string7 fret8"></div>
        <div className="fret string7 fret9"></div>
        <div className="fret string7 fret10"></div>
        <div className="fret string7 fret11"></div>
        <div className="fret string7 fret12"></div>
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
