const endpoint = "https://api.uberchord.com/v1/chords/"
const request = require('superagent')

const data = {
  "C" : "[{\"strings\": \"X 3 2 0 1 0\"}]",
  "C_maj7" : "[{\"strings\": \"X 3 2 0 0 0\"}]",
  "C_7" : "[{\"strings\": \"X 3 2 3 1 0\"}]",
  "C_m" : "[{\"strings\": \"X 3 5 5 4 3\"}]",
  "C_m7" : "[{\"strings\": \"X 3 5 3 4 3\"}]",
  "C_dim" : "[{\"strings\": \"X 3 4 5 4 X\"}]",
  "D_m" : "[{\"strings\": \"X X 0 2 3 1\"}]",
  "E_m" : "[{\"strings\": \"0 2 2 0 0 0\"}]",
  "F" : "[{\"strings\": \"1 3 3 2 1 1\"}]",
  "G" : "[{\"strings\": \"3 2 0 0 0 3\"}]",
  "A_m" : "[{\"strings\": \"X 0 2 2 1 0\"}]",
  "A_m7" : "[{\"strings\": \"X 0 2 0 1 0\"}]",
  "B_dim" : "[{\"strings\": \"X 2 3 4 3 X\"}]",
  "D" : "[{\"strings\": \"X X 0 2 3 2\"}]",
  "E" : "[{\"strings\": \"0 2 2 1 0 0\"}]",
  "F#_m" : "[{\"strings\": \"2 4 4 2 2 2\"}]",
  "A" : "[{\"strings\": \"X 0 2 2 2 0\"}]",
  "B_m" : "[{\"strings\": \"X 2 4 4 3 2\"}]",
  "B" : "[{\"strings\": \"X 2 4 4 4 2\"}]",
}

function getChord(chord) {
  let cachedChord = data[chord]

  if (true || !cachedChord) {
    return request.get(`${endpoint}${chord}`).then(res => {
      let apiChord = res.body
      data[chord] = apiChord
      return res
    })
  } else {
    return Promise.resolve({body : JSON.parse(cachedChord)})
  }
}

module.exports = {
  getChord
}