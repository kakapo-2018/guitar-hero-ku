
// export const getChord = (key, tone,chordType) => {
//   return {
//     type: "SELECT_CHORD",
//     chord: {
//       selectedKey: key,
//       selectedTone: tone,
//       selectedChordType: chordType
//     }
//   }
// }

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
