const initialState = []

function reducerName(state = initialState, action) {
  switch (action.type) {
    case "RECEIVE_THING":
// console.log("------------ reducers/reducerName.js switch RECIEVE_THING --------")
// console.log(action.actionObjectData)
      return action.actionObjectData // This then goes into state
    default:
      return state
  }
}

export default reducerName