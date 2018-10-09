import React from "react"
import {connect} from 'react-redux'
import Fretboard from "./Fretboard"
import Buttons from "./Buttons"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Guitar HeroKu</h1>
        <Fretboard />
        <Buttons />
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
