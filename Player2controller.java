package com.example.Player1.controller2;
import com.example.Player1.model2.Player2model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.Player1.service.*;
import com.example.Player1.service2.*;
import java.util.List;
import java.util.Optional;
import com.example.Player1.entry.PlaylistEntry;

@RestController
@RequestMapping("/api/music")
public class Player2controller {

    @Autowired
    private Player2service musicService;

    @GetMapping
    public List<Player2model> getAllMusic() {
        return musicService.getAllMusic();
    }

    @GetMapping("/{id}")
    public Optional<Player2model> getMusicById(@PathVariable String id) {
        return musicService.getMusicById(id);
    }

    @PostMapping
    public Player2model createMusic(@RequestBody Player2model music) {
        return musicService.createMusic(music);
    }

    @DeleteMapping("/{id}")
    public void deleteMusic(@PathVariable String id) {
        musicService.deleteMusic(id);
    }
    @PatchMapping("/{id}/updatePlaylist")
    public Player2model updatePlaylist(@PathVariable String id, @RequestBody List<PlaylistEntry> updatedPlaylist) {
        return musicService.updatePlaylist(id, updatedPlaylist);
    }
    @PatchMapping("/{id}/addTracksToPlaylist")
    public Player2model addTracksToPlaylist(@PathVariable String id, @RequestBody List<PlaylistEntry> newTracks) {
        System.out.println("Printing new tracks:");
        for (PlaylistEntry track : newTracks) {
            System.out.println("Album: " + track.getAlbum());
            System.out.println("Artist: " + track.getArtist());
            //System.out.println("Track ID: " + track.getTrackId());
            System.out.println("--------------------");
        }
        return musicService.addTracksToPlaylist(id, newTracks);
    }
    @DeleteMapping("/{id}/removeTracksFromPlaylist/{id1}")
    public Player2model removeTracksFromPlaylist(@PathVariable String id, @PathVariable String id1) {
        return musicService.removeTracksFromPlaylist(id, id1);
    }
}
