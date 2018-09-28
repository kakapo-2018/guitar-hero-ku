import React from "react"
// import {connect} from 'react-redux'
import Fretboard from "./Fretboard"
import KeyChordButtons from "./KeyChordButtons"


class App extends React.Component {
    constructor(props) {
      super(props)

    }

  componentDidMount(){
  }


  render() {
    return (
      <div>
        <p>Guitar HeroKu</p>
        <Fretboard />
        <KeyChordButtons />
      </div>
    )
  }
}

export default App

// Keep for testing when removing container
// // export {App}
