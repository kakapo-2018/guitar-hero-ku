import React from 'react'
// import {connect} from 'react-redux'
import {fetchThing} from '../actions'
class App extends React.Component {
    constructor(props) {
      super(props)
    }

  componentDidMount(){
    // this.props.dispatch(fetchThing())
  }

  displayChord(e) {
    console.log('display chord!', e)        
  }

  render() {
    return (
      <div className="AppDiv">
        <p>Hi React!</p>
        <Fretboard/>
        <KeyChordButtons displayChord={this.displayChord}/>
      </div>
    )
  }
}

export default App

// Keep for testing when removing container
// // export {App}
