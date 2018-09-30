
export const keyToState = (key) => {
  return {
    type: "SELECT_KEY",
    chord: {
      selectedKey: key,
    }
  }
}

export const toneToState = (tone) => {
  return {
    type: "SELECT_TONE",
    chord: {
      selectedTone: tone,
    }
  }
}

export const chordTypeToState = (chordType) => {
  return {
    type: "SELECT_CHORDTYPE",
    chord: {
      selectedChordType: chordType
    }
  }
}

