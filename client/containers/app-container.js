import App from '../components/App'
import {connect} from 'react-redux'

function mapStateToProps(state) {
  return {
    reducerName: state.reducerName
  }
}

export default connect(mapStateToProps)(App)