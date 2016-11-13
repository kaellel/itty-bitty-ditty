/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package kaellelscanner;

/**
 *
 * @author Kenneth
 */

import java.io.*; 
import java.util.ArrayList;

public class DirectoryScanner {
    
    /**
     * notesDatabase[i][j] represents the total number of occurrences in which 
     * the note j (0 <= j <= 127) appears after i. 
     * 
     * notesDatabase[i] represents an array of [0...127] storing the occurrences
     * of note j in [0...127] after the note i. 
     */
    public int[][] notesDatabase; 
    public String activeDirectory; 
    
    public DirectoryScanner(String Directory){
        notesDatabase = new int[128][128]; 
        activeDirectory = Directory; 
    }
    
    private ArrayList getFilesInDirectory(String directory) {
        File folder = new File(directory);
        File[] listOfFiles = folder.listFiles();
        ArrayList<String> List = new ArrayList(); 

        for (int i = 0; i < listOfFiles.length; i++) {
            if (listOfFiles[i].isFile()) {
                List.add(directory + "\\" + listOfFiles[i].getName()); 
            }
        }
        
        return List; 
    }
    
    public int[][] fillTable(int[] song1){				
        int[][] songx = new int[128][128];
        for (int row = 0; row < 127; row++) {
            for (int noteNum = 0; noteNum < 127; noteNum++) {
                if (row == song1[noteNum]) {
                    songx[row][song1[noteNum+1]]++;
                }
            }
        }
        return songx; 
    }
    
    public int[][] fillTable2(SongDefinition Song) {
        int[][] Library = new int[128][128]; 
        for (int i = 0; i < Song.lowThirdNotes.size() - 1; i++){
            Library[Song.lowThirdNotes.get(i)][Song.lowThirdNotes.get(i + 1)] ++; 
        }
        for (int i = 0; i < Song.midThirdNotes.size() - 1; i++){
            Library[Song.midThirdNotes.get(i)][Song.midThirdNotes.get(i + 1)] ++; 
        }
        for (int i = 0; i < Song.highThirdNotes.size() - 1; i++){
            Library[Song.highThirdNotes.get(i)][Song.highThirdNotes.get(i + 1)] ++; 
        }
        return Library; 
    }
    
    public void populateDatabase() throws Exception {
        ArrayList<String> Files = getFilesInDirectory(activeDirectory); 
        for (String file:Files){
            SongDefinition mySong = MidiScanner.getNotes(file); 
            int[][] tmpArray = fillTable2(mySong);    // Replace null with the code Celine and Jerry are writing. 
            for (int i = 0; i< notesDatabase.length; i++) {
                for (int j = 0; j < notesDatabase.length; j++){
                    notesDatabase[i][j] += tmpArray[i][j]; 
                }
            }
        }
    }
}
