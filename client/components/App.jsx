import React from 'react'
// import {connect} from 'react-redux'
import {fetchThing} from '../actions'
import Fretboard from './Fretboard'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    // this.props.dispatch(fetchThing())
  }

  render() {
    return (
      <div className="AppDiv">
        <p>Hi React!</p>
        <Fretboard/>
      </div>
    )
  }
}

export default App

// Keep for testing when removing container
// // export {App}
