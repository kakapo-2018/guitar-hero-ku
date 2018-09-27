import React from "react"

class Fretboard extends React.Component {
  constructor(props){
    super(props)

    this.lightUpNote = this.lightUpNote.bind(this)
  }

lightUpNote(noteID) {
  console.log("lighting up", noteID)
  let selectedNote = document.getElementById(noteID)
  selectedNote.classList.add("lit")
}


render() {
  return(
    <div className="fretboard">

    <button id="testing" onClick={() => this.lightUpNote("fret-G5-Estring1")}>Test lightUpNote on G5</button>

      <div className="string" id="Estring1">
        <div className="fret" id="fret-E5-Estring1">E</div>
        <div className="fret" id="fret-F5-Estring1">F</div>
        <div className="fret" id="fret-F5sharp-Estring1">F#</div>
        <div className="fret" id="fret-G5-Estring1">G</div>
        <div className="fret" id="fret-G5sharp-Estring1">G#</div>
        <div className="fret" id="fret-A5-Estring1">A</div>
      </div>

      <div className="string" id="Bstring2">
        <div className="fret" id="fret-B5-Bstring2">B</div>
        <div className="fret" id="fret-C5-Bstring2">C</div>
        <div className="fret" id="fret-C5sharp-Bstring2">C#</div>
        <div className="fret" id="fret-D5-Bstring2">D</div>
        <div className="fret" id="fret-D5sharp-Bstring2">D#</div>
        <div className="fret" id="fret-E5-Bstring2">E</div>
      </div>

      <div className="string" id="Gstring3">
        <div className="fret" id="fret-G4-Gstring3">G</div>
        <div className="fret" id="fret-G4sharp-Gstring3">G#</div>
        <div className="fret" id="fret-A5-Gstring3">A</div>
        <div className="fret" id="fret-A5sharp-Gstring3">A#</div>
        <div className="fret" id="fret-B5-Gstring3">B</div>
        <div className="fret" id="fret-C5-Gstring3">C</div>
      </div>

      <div className="string" id="Dstring4">
        <div className="fret" id="fret-D4-Dstring4">D</div>
        <div className="fret" id="fret-D4sharp-Dstring4">D#</div>
        <div className="fret" id="fret-E4-Dstring4">E</div>
        <div className="fret" id="fret-F4-Dstring4">F</div>
        <div className="fret" id="fret-F4sharp-Dstring4">F#</div>
        <div className="fret" id="fret-G4-Dstring4">G</div>
      </div>

      <div className="string" id="Astring5">
        <div className="fret" id="fret-A4-Astring5">A</div>
        <div className="fret" id="fret-A4sharp-Astring5">A#</div>
        <div className="fret" id="fret-B4-Astring5">B</div>
        <div className="fret" id="fret-C4-Astring5">C</div>
        <div className="fret" id="fret-C4sharp-Astring5">C#</div>
        <div className="fret" id="fret-D4-Astring5">D</div>
      </div>

      <div className="string" id="Estring6">
        <div className="fret" id="fret-E3-Estring6">E</div>
        <div className="fret" id="fret-F3-Estring6">F</div>
        <div className="fret" id="fret-F3sharp-Estring6">F#</div>
        <div className="fret" id="fret-G3-Estring6">G</div>
        <div className="fret" id="fret-G3sharp-Estring6">G#</div>
        <div className="fret" id="fret-A4-Estring6">A</div>
      </div>

    </div>
  )
}
}

export default Fretboard