import request from "superagent"

const APIendpoint = "https://api.uberchord.com/v1/chords/"

export function getChordFrets(chord) {
  console.log("in getChordFrets")
  console.log(APIendpoint + chord)
  return request.get(APIendpoint + chord)
}

// export function getSatellite(satId) {
//   return request.get(APIendpoint + 'chord/' + satId)
// }