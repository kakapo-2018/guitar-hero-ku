const initialState = {}

function selectedChord(state = initialState, action) {
  switch (action.type) {
    case "SELECT_CHORD":
      return action.chord
       // This then goes into state
    default:
      return state
  }
}

export default selectedChord