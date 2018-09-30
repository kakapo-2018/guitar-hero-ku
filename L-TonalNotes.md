
# Good things from Tonal:
## tonal-note
### Note.simplify => String

  Simplify the note: find an enhramonic note with less accidentals.

  Returns: String - the simplfiied note or null if not valid note

  Example

    Note.simplify("C##") // => "D"

    Note.simplify("C###") // => "D#"

    Note.simplify("C###", false) // => "Eb"

    Note.simplify("B#4") // => "C5"

  2nd argument: useSameAccType: boolean, (optional, true by default) set to true to ensure the returned note has the same accidental types that the given note

### Note.enharmonic => String

  Get the simplified and enhramonic note of the given one.

  Kind: static constant of Note

  Returns: String - the enhramonic note

  Example

    Note.enharmonic("Db") // => "C#"

    Note.enhramonic("C") // => "C"

### Scale.props(name) ⇒ Object
Get scale properties. It returns an object with:

name: the scale name
names: a list with all possible names (includes the current)
intervals: an array with the scale intervals
chroma: scale croma (see pcset)
setnum: scale chroma number

## tonal-pcset

### PcSet.isSupersetOf(set, notes) => boolean
### PcSet.includes(set, note) => Boolean
Test if a given pitch class set includes a note
### PcSet.filter(set, notes) => Array


