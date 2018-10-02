# guitar-hero-ku

A visual guide to playing guitar. 


## User Stories

MVP
* As a user I want to see the strings and fretboard (up to 5th fret) and the letters of the notes for each.
* As a user I want to be able to select a note on the fretboard and see the note light up on the fretboard.
* As a user I want to be able to select a chord (in any key, in major or minor) from a list and see the notes lit up on the fretboard.
* As a user I want the app to be mobile-friendly / responsive so I can see the fretboard on my phone.

Stretch
* As a user I want to select different notes on the fretboard and see what chords they make. If the notes do not make up a chord (are too many or too random, or are impossible to play (e.g. two notes on one string)), I want nothing to light up.
* As a user I want to use the entire fretboard (down to 12th fret) and see the notes in different positions. 
* As a user I want to choose whether or not to include open strings.
* As a user I want to be able to enter a sequence of chords or notes and have the app play them back (by lighting up on the fretboard, not sound) so I can play along/practice.
* As a user I want to set the tempo in BPM at which playback runs.
* As a user I want to be able to select time (e.g. 4/4, 3/4) for the chord sequence I have entered for playback.
* As a user I want to see the notes in my guitar chord on a piano view and a music staff view.
* As a user I want to see the chords which are related to the chord I've selected in a circle of fifths.
* As a user I want this to be a mobile app built with React Native.
* As a user I want to access a database of well-known (public domain) songs which I can select and play along with..


Super-stretch

* As a user I want to be able to enter a melody and have the app play it back the same way as chords.

## Documentation

<!-- ### Note and chord references
* C# is C^
* C4 is middle C -->


### Views
* Main app page: Chord finder
* Help: text guide for usage
* Piano view (alternative to Guitar view)

### API Docs
Dispatch from playback to change chords:
`this.props.dispatch(entireChordToState(key, tone, chordType))`
e.g.
* key: "C"
* tone: "#"
* chordType: "m"



## Reference

* Tonal module docs: https://www.npmjs.com/package/tonal