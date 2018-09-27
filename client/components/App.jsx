import React from 'react'
import {connect} from 'react-redux'
import {fetchThing} from '../actions'
import KeyChordButtons from './KeyChordButtons'

class App extends React.Component {
// The constructor with just super(props) is done by default and can be left off if there is nothing else inside constructor
  constructor(props) {
    super(props)

    this.displayChord = this.displayChord.bind(this)

  }

  componentDidMount(){
// console.log("------------ App ComponentDidMount --------")
// console.log(this.props)
    this.props.dispatch(fetchThing())
  }

  displayChord(e) {
    console.log('display chord!', e)        
  }

  render() {
    return (
      <div>
        <p>Hi React!</p>
        <KeyChordButtons displayChord={this.displayChord}/>
        {/* <ul>
        {this.props.reducerName.length > 0 && this.props.reducerName.map(something => {
          return <li key={something.id}>{something.name}</li>
        })}
        </ul> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log("------------ App state --------")
  // console.log(state)
  return {
    reducerName: state.reducerName
  }
}

export default connect(mapStateToProps)(App)