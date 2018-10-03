import request from "superagent"
const APIendpoint = "/api/v1/chords/" // ??? but actual link doesn't have "api/"

export function getAPIChordFrets(chord) {
return request.get(APIendpoint + chord)
}