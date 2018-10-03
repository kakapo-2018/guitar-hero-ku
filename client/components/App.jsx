import React from "react"
import {connect} from 'react-redux'
import Fretboard from "./Fretboard"
import KeyChordButtons from "./KeyChordButtons"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Guitar HeroKu</h1>
        <Fretboard />
        <KeyChordButtons />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reducerName: state.reducerName
  }
}

export default connect(mapStateToProps)(App)
