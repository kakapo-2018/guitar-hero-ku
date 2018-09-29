import React from "react"

class Fretboard extends React.Component {
  constructor(props){
    super(props)

    this.lightUpNote = this.lightUpNote.bind(this)
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
  // console.log("lighting up", noteID)
  let selectedNote = document.getElementById(noteID)
  selectedNote.classList.add("lit")
}



render() {
  return(
    <div className="fretboard">

{/* Probably should add full flats and sharp possibilities on every note... but cannot be bothered right now and we may not need them */}
      <div className="string" id="first-string">
        <div className="fret string1 fret0 E E4 open-note" id="fret0-string1">E</div>
        <div className="fret string1 fret1 F F4" id="fret1-string1">F</div>
        <div className="fret string1 fret2 Fsharp Gflat F4sharp G4flat sharp-or-flat" id="fret2-string1">F#</div>
        <div className="fret string1 fret3 G G4" id="fret3-string1">G</div>
        <div className="fret string1 fret4 Gsharp Aflat G4sharp A4flat sharp-or-flat" id="fret4-string1">G#</div>
        <div className="fret string1 fret5 A A4" id="fret5-string1">A</div>
      </div>

      <div className="string" id="second-string">
        <div className="fret string2 fret0 B B3 open-note" id="fret0-string2">B</div>
        <div className="fret string2 fret1 C C4" id="fret1-string2">C</div>
        <div className="fret string2 fret2 Csharp Dflat C4sharp D4flat sharp-or-flat" id="fret2-string2">C#</div>
        <div className="fret string2 fret3 D D4" id="fret3-string2">D</div>
        <div className="fret string2 fret4 Dsharp Eflat D4sharp E4flat sharp-or-flat" id="fret4-string2">D#</div>
        <div className="fret string2 fret5 E E4" id="fret5-string2">E</div>
      </div>

      <div className="string" id="third-string">
        <div className="fret string3 fret0 G G3 open-note" id="fret0-string3">G</div>
        <div className="fret string3 fret1 Gsharp Aflat G3sharp A3flat sharp-or-flat" id="fret1-string3">G#</div>
        <div className="fret string3 fret2 A A3" id="fret2-string3">A</div>
        <div className="fret string3 fret3 Asharp Bflat A3sharp B3flat sharp-or-flat" id="fret3-string3">A#</div>
        <div className="fret string3 fret4 B B3" id="fret4-string3">B</div>
        <div className="fret string3 fret5 C C4" id="fret5-string3">C</div>
      </div>

      <div className="string" id="fourth-string">
        <div className="fret string4 fret0 D D3 open-note" id="fret0-string4">D</div>
        <div className="fret string4 fret1 Dsharp Eflat D3sharp E3flat sharp-or-flat" id="fret1-string4">D#</div>
        <div className="fret string4 fret2 E E3" id="fret2-string4">E</div>
        <div className="fret string4 fret3 F F3" id="fret3-string4">F</div>
        <div className="fret string4 fret4 Fsharp Gflat F3sharp G3flat sharp-or-flat" id="fret4-string4">F#</div>
        <div className="fret string4 fret5 G G3" id="fret5-string4">G</div>
      </div>

      <div className="string" id="fifth-string">
        <div className="fret string5 fret0 A A2 open-note" id="fret0-string5">A</div>
        <div className="fret string5 fret1 Asharp Bflat A2sharp B2flat sharp-or-flat" id="fret1-string5">A#</div>
        <div className="fret string5 fret2 B B2" id="fret2-string5">B</div>
        <div className="fret string5 fret3 C C3" id="fret3-string5">C</div>
        <div className="fret string5 fret4 Csharp Dflat C3sharp D3flat sharp-or-flat" id="fret4-string5">C#</div>
        <div className="fret string5 fret5 D D3" id="fret5-string5">D</div>
      </div>

      <div className="string" id="sixth-string">
        <div className="fret string6 fret0 E E2 open-note" id="fret0-string6">E</div>
        <div className="fret string6 fret1 F F2" id="fret1-string6">F</div>
        <div className="fret string6 fret2 Fsharp Gflat F2sharp G2flat sharp-or-flat" id="fret2-string6">F#</div>
        <div className="fret string6 fret3 G G2" id="fret3-string6">G</div>
        <div className="fret string6 fret4 Gsharp Aflat G2sharp A2flat sharp-or-flat" id="fret4-string6">G#</div>
        <div className="fret string6 fret5 A A2" id="fret5-string6">A</div>
      </div>

    </div>
  )
}
}

export default Fretboard