const initialState = {}

function selectedChord(state = initialState, action) {
  switch (action.type) {
    case "SELECT_CHORD":
      return action.chord
      
    case "SELECT_KEY" :
      return {
        selectedKey: action.chord.selectedKey,
        selectedTone: state.selectedTone,
        selectedChordType: state.selectedChordType
      }

    case "SELECT_TONE" :
      return {
        selectedKey: state.selectedKey,
        selectedTone: action.chord.selectedTone,
        selectedChordType: state.selectedChordType
      }

    case "SELECT_CHORDTYPE" :
      return {
        selectedKey: state.selectedKey,
        selectedTone: state.selectedTone,
        selectedChordType: action.chord.selectedChordType
      }

    default:
      return state
  }
}

export default selectedChord