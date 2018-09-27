import React from "react"
// import {connect} from 'react-redux'
import Fretboard from "./Fretboard"
import KeyChordButtons from "./KeyChordButtons"


class App extends React.Component {
    constructor(props) {
      super(props)

    this.state = {
      selectedKey: "C",
      selectedChordType: "M"
    }
    console.log("----------state in App -------")
    console.log(this.state)
    console.log("------------")
    }

  componentDidMount(){
    // this.props.dispatch(fetchThing())
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
