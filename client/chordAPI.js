import request from "superagent"

const APIendpoint = "https://api.uberchord.com/v1/chords/"

export function getChordFrets(chord) {
  console.log(APIendpoint + chord)
  return request.get(APIendpoint + chord)
}