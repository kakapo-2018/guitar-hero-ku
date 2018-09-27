import React from "react"
// import {connect} from 'react-redux'
import Fretboard from "./Fretboard"
import KeyChordButtons from "./KeyChordButtons"


class App extends React.Component {
    constructor(props) {
      super(props)

    this.displayChord = this.displayChord.bind(this)
    }

  componentDidMount(){
    // this.props.dispatch(fetchThing())
  }

  displayChord(e) {
    console.log('display chord!', e)     
  }

  render() {
    return (
      <div>
        <p>Guitar HeroKu</p>
        <Fretboard />
        <KeyChordButtons displayChord={this.displayChord}/>
      </div>
    )
  }
}

export default App

// Keep for testing when removing container
// // export {App}
