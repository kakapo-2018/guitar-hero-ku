import request from "superagent"
const APIendpoint = "/v1/chords/"

export function getAPIChordFrets(chord) {
  return request.get(APIendpoint + chord)
}