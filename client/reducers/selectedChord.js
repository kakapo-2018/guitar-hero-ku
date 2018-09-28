const initialState = {}

function selectedChord(state = initialState, action) {
  switch (action.type) {
    case "SELECT_CHORD":
      return action.chord
    default:
      return state
  }
}

export default selectedChord