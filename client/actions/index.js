
export const getChord = (key, tone,chordType) => {
  return {
    type: "SELECT_CHORD",
    chord: {
      selectedKey: key,
      selectedTone: tone,
      selectedChordType: chordType
    }
  }
}

// export const keyToState = (key) => {
//   return {
//     type: "SELECT_KEY",
//     chord: {
//       selectedKey: key,
//     }
//   }
// }

// export const chordTypeToState = (chordType) => {
//   return {
//     type: "SELECT_CHORDTYPE",
//     chord: {
//       selectedChordType: chordType
//     }
//   }
// }
