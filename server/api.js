const endpoint = "https://api.uberchord.com/v1/chords/"
const request = require('superagent')

const data = {
  "C" : "[{\"strings\": \"X 3 2 0 1 0\"}]",
  "C_dim": "[{\"strings\": \"X 3 4 5 4 X\"}]"
}

function getChord(chord) {
  console.log(chord)
  let cachedChord = data[chord]

  if (!cachedChord) {
    return request.get(`${endpoint}/${chord}`).then(res => {
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