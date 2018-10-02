const initialState = {
  // selectedKey: "",
  // selectedTone: "",
  // selectedQuality: ""
}

function selectedChord(state = initialState, action) {
  switch (action.type) {
    case "SELECT_CHORD":
      return action.chord
      
    case "SELECT_KEY" :
      return {
        selectedKey: action.chord.selectedKey,
        selectedTone: state.selectedTone,
        selectedQuality: state.selectedQuality
      }

    case "SELECT_TONE" :
      return {
        selectedKey: state.selectedKey,
        selectedTone: action.chord.selectedTone,
        selectedQuality: state.selectedQuality
      }

    case "SELECT_QUALITY" :
      return {
        selectedKey: state.selectedKey,
        selectedTone: state.selectedTone,
        selectedQuality: action.chord.selectedQuality
      }

    default:
      return state
  }
}

export default selectedChord