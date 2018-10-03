import request from "superagent"
const APIendpoint = "/api/v1/chords/"

export function getAPIChordFrets(chord) {
  return request.get(APIendpoint + chord)
}