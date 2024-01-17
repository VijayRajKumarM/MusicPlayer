package com.example.Player1.entry;
public class PlaylistEntry {
    private String album;
    private String artist;
    private String trackid;

    public String getAlbum() {
        return album;
    }

    public void setAlbum(String album) {
        this.album = album;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getTrackid() {
        return trackid;
    }

    public void setTrackid(String trackid) {
        this.trackid = trackid;
    }

    public PlaylistEntry(String album, String artist, String trackid) {
        this.album = album;
        this.artist = artist;
        this.trackid = trackid;
    }
// Constructors, getters, and setters
}
