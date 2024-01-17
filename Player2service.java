package com.example.Player1.service2;
import com.example.Player1.model2.Player2model;
import com.example.Player1.repository2.Player2repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.example.Player1.entry.PlaylistEntry;

@Service
public class Player2service {

    @Autowired
    private Player2repository player2repository;

    //NOT NEEDED
    public List<Player2model> getAllMusic() {
        return player2repository.findAll();
    }
    //NEEDED
    public Optional<Player2model> getMusicById(String name) {
        return player2repository.findByName(name);
    }

//NEEDED
    public Player2model createMusic(Player2model music) {
        return player2repository.save(music);
    }



    //NOT NEEDED
    public void deleteMusic(String id) {
        player2repository.deleteById(id);
    }
    //NEEDED
    public Player2model updatePlaylist(String id, List<PlaylistEntry> updatedPlaylist) {
        Optional<Player2model> optionalPlayer2model = player2repository.findById(id);

        if (optionalPlayer2model.isPresent()) {
            Player2model existingMusic = optionalPlayer2model.get();
            existingMusic.updatePlaylist(updatedPlaylist);
            return player2repository.save(existingMusic);
        }

        return null; // Handle non-existent music entry
    }
    //NEEDED
    public Player2model addTracksToPlaylist(String id, List<PlaylistEntry> newTracks) {
        Optional<Player2model> optionalPlayer2model = player2repository.findByName(id);
        System.out.println("name="+id);
        if (optionalPlayer2model.isPresent()) {
            System.out.println("*******YES PRESENT*******");
            Player2model existingMusic = optionalPlayer2model.get();
            existingMusic.addTracksToPlaylist(newTracks);
            return player2repository.save(existingMusic);
        }
        return null; // Handle non-existent music entry
    }
    public Player2model removeTracksFromPlaylist(String name, String album) {
        Optional<Player2model> optionalPlayer2model = player2repository.findByName(name);

        if (optionalPlayer2model.isPresent()) {
            Player2model existingMusic = optionalPlayer2model.get();
            List<PlaylistEntry> playlist = existingMusic.getPlaylist();

            if (playlist != null) {
                playlist.removeIf(entry -> entry.getAlbum().equals(album));
            }

            return player2repository.save(existingMusic);
        }

        return null; // Handle non-existent music entry
    }
    }


