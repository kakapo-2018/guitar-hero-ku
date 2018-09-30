# Lianna To-Do list
## clear chord button (esp for clearing sharps/flats)

## write function to build a major/minor chord given a tonic and the triad structures. 
* select the tonic and then find the rest of the chord by relative position
* use a conditional that won't allow any notes above a certain fret to play (e.g. position one = fret5 or below), add functionality for other positions later
* use a conditional that won't allow two notes on the same sting (maybe defaulting to the lowest-numbered fret)

### notes
* Cmajor has CEG - fine. Start with C3 on string5, add E3 on string 4, G3 on string 3(open), C4 on string 2 and E4 on string 1.

### data
* major chord is major triad + minor triad,
* a minor chord is a minor triad + a maj triad,
* dimimnished is two minor triads,
* augmented is 2 major triads,
* sus skips the third
* etc


### Concerns: 
* if I build a function to create a Major chord given a tonic, whether it will actually spit out the notes we play for standard position-1 guitar chords.
* The computer has no idea how far fingers can stretch and I don't know if standard finger positions have lots of exceptions to accomodate that.


### Maybes, depending on functionality:
- make lightup selection by string/fret grid instead of ID or class
- make functionality for double sharps


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


