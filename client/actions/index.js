// import request from "superagent"

export const getChord = (key, chordType) => {
  console.log("in getChord")
  console.log(key, chordType)

  return {
    type: "SELECT_CHORD",
    chord: {
      selectedKey: key,
      selectedChordType: chordType
    }
  }
}
