const initialState = {}

function selectedChord(state = initialState, action) {
  switch (action.type) {
    case "SELECT_CHORD":
      return action.chord
    // case "SELECT_KEY":
    //   return {
    //     selectedKey: action.chord,
    //     selectedChordType: [...state]
    //   }
    // case "SELECT_CHORDTYPE":
    //   return {
    //     selectedKey: [...state],
    //     selectedChordType: action.chord
    //   }
    default:
      return state
  }
}

export default selectedChord