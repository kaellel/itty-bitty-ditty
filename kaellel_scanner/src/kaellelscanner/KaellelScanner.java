/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package kaellelscanner;

import java.io.IOException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.sound.sampled.UnsupportedAudioFileException;

/**
 *
 * @author Kenneth
 */
public class KaellelScanner {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        try {
            DirectoryScanner d = new DirectoryScanner("C:\\Users\\Kenneth\\Desktop\\Music Generator\\Library\\Instrumental Classics"); 
            d.populateDatabase(); 
            int[][] Library = d.notesDatabase; 
            for (int i = 0; i < 128; i++) {
                for (int j = 0; j < 128; j++){
                    if (j < 127) 
                        System.out.print(Integer.toString(Library[i][j]) + ","); 
                    else 
                        System.out.print(Integer.toString(Library[i][j])); 
                }
                System.out.print(";"); 
            }
        } catch (Exception ex) {
            Logger.getLogger(KaellelScanner.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
}
