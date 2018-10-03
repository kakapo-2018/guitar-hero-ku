import request from "superagent"
const APIendpoint = "/api/v1/chords/"

export function getAPIChordFrets(chord) {
  console.log("in getAPIChordFrets")
  console.log("chord is: ", chord)
  // console.log(request.get(APIendpoint + chord));
return request.get(APIendpoint + chord)
}