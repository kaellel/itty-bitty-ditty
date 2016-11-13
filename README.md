#itty bitty ditty

##About
MLH Prime Southwest Regional 2016 entry for ayushsriv, clillie100, jer-zhang, kaellel, [Insert Ramya]. 

##Inspiration
As students, music plays a large role in our lives. In fact, clillie100 hosts a music radio show two hours per week. 
The ability for computers to generate music presents many possibilities especially when integrated with advanced 
ditigal audio workstations. 

##What it does
Itty bitty ditty is made up of two components: one, a Java back-end that transcribes MIDI music files into notes, 
and compiles a note library storing the probability of a note occuring after each MIDI note; two, a front-end 
user interface that allows the user to select a note upon which itty bitty ditty attempts to compose a subsequent 
song. 

Itty bitty ditty has three libraries upon which it composes songs: one library is derived from electronic and modern 
pop music, one library is derived from instrumental classics, and one is derived from music composed in the fourth 
chord. The user may choose freely between the three libraries by clicking the itty bitty ditty logo on the navigation
bar, and may also choose freely between standard MIDI instruments. 

##How we built it
Itty bitty ditty's back-end processor is located at `/kaellel_scanner/`. 

Itty bitty ditty is built with Java, HTML, CSS, and JavaScript. The Java back-end analyzes a music file by reading each 
note in a song. Then, all occurrences of the notes following a note are recorded. The recorded information is stored in 
a probability format. In other words, the Java back-end builds a music library of `Library[i][j]`, in which `i` represents 
the current note, and `j` represents the following note; `Library[i][j]` represents the total number of occurrences in 
which the note `j (0 <= j <= 127)` appears after note `i`. `Library[i]` represents an array of [0...127] storing the 
occurrences of note `j` in [0...127] after the note `i`. 

When notes are transcribed into the library, itty bitty ditty transcribes notes in the lower third pitch region, mid third 
pitch region, and higher third pitch region separately to preserve audio quality. The library "Fourth Chord" contains song 
transcriptions such as Adele's "Hello" and One Republic's "Apologize". The library "Instrumental Classics" contains song 
transcriptions such as The Beatles's "Yesterday". The library "Modern to Electric Pop" contains song transcriptions such 
as Ariana Grande's "Tattooed Heart". 

Itty bitty ditty's front-end user interface is located in the root directory. 

The user interface accepts mouse and/or touch input. Once the user clicks a note, itty bitty ditty will begin composing and 
playing a song based on the music library. The length of the song composed is randomized to be between 30 - 50 notes; the 
rhythm of the song composed is procedurally generated. The top navigation bar serves as a button to open instrument and 
library settings. 

##Challenges we ran into
Animations with JavaScript, functions and variable scope. 

##Accomplishments that we're proud of
Throughout the development of itty bitty ditty, we managed to shrink a rather complex seven line algorithm to just one 
line. 

##What's next for Itty bitty ditty
Itty bitty ditty will benefit from more advanced music generation algorithms, and more detailed music libraries that 
take into account not only succeeding occurrences in its current state, but also preceding occurrences. Future development 
may include automatic matching of notes to bass. 

##Built With
java
javascript
html
css3