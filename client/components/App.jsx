import React from "react"
import {connect} from 'react-redux'
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


// Keep for testing when removing container
// export default App
// // export {App}
