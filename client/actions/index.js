export const entireChordToState = (key, tone, quality) => {
  return {
    type: "SELECT_CHORD",
    chord: {
      selectedKey: key,
      selectedTone: tone,
      selectedQuality: quality
    }
  }
}

export const keyToState = (key) => {
  return {
    type: "SELECT_KEY",
    chord: {
      selectedKey: key,
    }
  }
}

export const toneToState = (tone) => {
  return {
    type: "SELECT_TONE",
    chord: {
      selectedTone: tone,
    }
  }
}

export const qualityToState = (quality) => {
  return {
    type: "SELECT_QUALITY",
    chord: {
      selectedQuality: quality
    }
  }
}

