import React from "react";
import {connect} from "react-redux"

class SongDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

componentDidMount(){}

render() { 
return (
<div id="song-display-wrapper">
  <h3>Pick a song!</h3>
  <h4>Somewhere Over The Rainbow</h4>
  <p id="song-display">
  [Intro]<br />
 C  Em  Am  F<br />
 C  Em  Am  F<br />
[Chorus] <br />
C         Em<br />
Somewhere over the rainbow<br />
F       C<br />
Way up high<br />
F       C<br />
And the dreams that you dream of<br />
G          Am      F<br />
Once in a lullaby...<br />
     C        Em<br />
Somewhere over the rainbow<br />
F           C<br />
Blue birds fly<br />
F        C<br />
And the dreams that you dream of<br />
G                     Am    F<br />
Dreams really do come true...<br />
 <br />
[Verse]<br /> 
     C<br />
Someday I'll wish upon a star<br />
G                                  Am   F<br />
Wake up where the clouds are far behind me<br />
      C<br />
Where trouble melts like lemon drops<br />
G<br />
High above the chimney tops<br />
       Am           F<br />
That's where you'll find me<br />
 <br />
[Chorus] <br />
    C         Em<br />
Oh, somewhere over the rainbow<br />
F             C<br />
Blue birds fly<br />
F       C<br />
And the dream that you dare to<br />
G               Am   F<br />
Why oh why can't I...<br />
 <br />
[Verse]<br /> 
     C<br />
Someday I'll wish upon a star<br />
G                                  Am   F<br />
Wake up where the clouds are far behind me<br />
      C<br />
Where trouble melts like lemon drops<br />
G<br />
High above the chimney tops<br />
       Am           F<br />
That's where you'll find me<br />
 <br />
[Chorus] <br />
    C         Em<br />
Oh, somewhere over the rainbow<br />
F          C<br />
Way up high<br />
F       C<br />
And the dreams that you dare to<br />
G               Am   F<br />
Why oh why can't I<br />
 <br />
[Outro] <br />
C  Em  F<br />
Oooo, oooo, ooo<br />
C  Em  F<br />
Oooo, oooo, ooo <br />
  </p>
</div>
)}
}


function mapStateToProps(state) {
  return {
    selectedChord: state.selectedChord
  }
}

export default connect(mapStateToProps)(SongDisplay)