import request from "superagent"
const APIendpoint = "https://api.uberchord.com/v1/chords/"

export function getAPIChordFrets(chord) {
  return request.get(APIendpoint + chord)
}