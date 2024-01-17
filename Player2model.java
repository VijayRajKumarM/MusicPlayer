package com.example.Player1.model2;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import java.util.List;
import com.example.Player1.entry.PlaylistEntry;
@Document(collection = "userplaylist")
public class Player2model {
    @Id
    private String id;
    private String name;
    private List<PlaylistEntry> playlist;

    public Player2model(String id, String name, List<PlaylistEntry> playlist) {
        this.id = id;
        this.name = name;
        this.playlist = playlist;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<PlaylistEntry> getPlaylist() {
        return playlist;
    }

    public void setPlaylist(List<PlaylistEntry> playlist) {
        this.playlist = playlist;
    }
    public void updatePlaylist(List<PlaylistEntry> updatedPlaylist) {
        this.playlist = updatedPlaylist;
    }
    public void addTracksToPlaylist(List<PlaylistEntry> newTracks) {
        if (this.playlist == null) {
            this.playlist = newTracks;
        } else {
            this.playlist.addAll(newTracks);
        }
    }
    public void removeTracksFromPlaylist(List<PlaylistEntry> tracksToRemove) {
        if (this.playlist != null) {
            this.playlist.removeAll(tracksToRemove);
        }
    }
}

