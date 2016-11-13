package kaellelscanner;

import java.io.File;
import java.util.ArrayList;

import javax.sound.midi.MidiEvent;
import javax.sound.midi.MidiMessage;
import javax.sound.midi.MidiSystem;
import javax.sound.midi.Sequence;
import javax.sound.midi.ShortMessage;
import javax.sound.midi.Track;

public class MidiScanner {
    public static final int NOTE_ON = 0x90;
    public static final int NOTE_OFF = 0x80;
    public static final String[] NOTE_NAMES = {"C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"};
    
    /**
     * Returns an SongDefinition of all notes in an MIDI file. 
     * @param fName
     * @return
     * @throws Exception 
     */
    public static SongDefinition getNotes(String fName) throws Exception {
        ArrayList<Integer> resultLower = new ArrayList(); 
        ArrayList<Integer> resultMid = new ArrayList(); 
        ArrayList<Integer> resultHigher = new ArrayList(); 
        
        Sequence sequence = MidiSystem.getSequence(new File(fName));  
        int trackNumber = 0;
        for (Track track :  sequence.getTracks()) {
            trackNumber++;
            for (int i=0; i < track.size(); i++) { 
                MidiEvent event = track.get(i); 
                MidiMessage message = event.getMessage();
                if (message instanceof ShortMessage) {
                    ShortMessage sm = (ShortMessage) message;
                    if (sm.getCommand() == NOTE_ON) {
                        int key = sm.getData1();
                        int octave = (key / 12)-1;
                        int note = key % 12;
                        String noteName = NOTE_NAMES[note];
                        int velocity = sm.getData2();
                        if (key < 127 / 3) {
                            resultLower.add(key); 
                        } else if (key < 127 * 2 / 3) {
                            resultMid.add(key);
                        } else
                            resultHigher.add(key); 
                    } 
                } else {
                }
            }
        }
        
        SongDefinition returnSong = new SongDefinition(); 
        returnSong.highThirdNotes = resultHigher; 
        returnSong.lowThirdNotes = resultLower; 
        returnSong.midThirdNotes = resultMid; 
        
        return returnSong; 
    }
}
