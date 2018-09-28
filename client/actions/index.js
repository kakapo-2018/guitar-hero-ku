import request from "superagent"


export function fetchThing() {
  return (dispatch) => {
    request.get("/api/v1/route")
    .then((res) => {
// console.log("------------ actions/index.js fetchThing() --------")
// console.log(res.body)
      return res.body //array of objects from the route
    }).then(dataFromRoute => {
      dispatch(selectChord(dataFromRoute))
    })
  }
}

export function selectChord(key, chordType){
  let placeholderKey = "F"
  let placeholderChordType = "m"
  return {
    type: "SELECT_CHORD",
    chord: {
      selectedKey: placeholderKey,
      selectedChordType: placeholderChordType
    }
  }
}