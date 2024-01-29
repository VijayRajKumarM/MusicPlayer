// SongPage2.js

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbars from './Components/Navbars';
import imag from './assets/back.jpg';
import link from './assets/alb.jpg';
import ASlider from './Components/ASlider';
import IconButton from '@mui/material/IconButton';
import PlaylistAdd from '@mui/icons-material/PlaylistAdd';
import Baritem from './Components/Baritem';

const SongPage2 = () => {
  const location = useLocation();
  const {album,artist,trackid} = location.state || {};
  console.log("in songpage2");
  console.log(album);
  console.log(artist);
  console.log(trackid);
  const [audioPlayer, setAudioPlayer] = useState(null);
  //const [audioUrl,setAudioUrl] = useState('https://p.scdn.co/mp3-preview/5410200eb247f6e4ec219a9372c9446593f6ff20');
  let audioUrl = trackid;
  try {
    const newtracks = [{'album' : album,'artist' : artist, 'trackid' : trackid}];
    const response =  fetch(`http://localhost:8080/api/music/vijay.rajkumar2003@gmail.comyajiv@2110/addTracksToRecentlist`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newtracks),
    });

    const data =  response.text();
    console.log(data);
    console.log("success");
  }
  catch (error) {
    console.error('Error:', error);
  }

  
    const playlistAdd = async () => {
    try {
      const newtracks = [{'album' : album,'artist' : artist, 'trackid' : trackid}];
      const response = await fetch(`http://localhost:8080/api/music/vijay.rajkumar2003@gmail.comyajiv@2110/addTracksToPlaylist`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newtracks),
      });

      const data = await response.text();
    }
    catch (error) {
      console.error('Error:', error);
    }
  };
  const playAudio = () => {
    if (audioPlayer) {
      audioPlayer.play();
    }
  };

  const pauseAudio = () => {
    if (audioPlayer) {
      audioPlayer.pause();
    }
  };

  const skipPrevious = () => {
    // Add logic to skip to the previous song
  };

  const skipNext = () => {
    // Add logic to skip to the next song
  };

  useEffect(() => {
    // Start playing the audio as soon as the component mounts
    playAudio();

    // Cleanup function
    return () => {
      // Pause the audio and perform any cleanup if necessary
      pauseAudio();
    };
  }, [audioPlayer]); // Ensure useEffect runs when audioPlayer changes

  return (
    <div style={{ position: 'relative' }}>
      <Navbars />
      <div
        style={{
          backgroundColor: 'blue',
          width: '100%',
          height: '600px',
          boxSizing: 'border-box',
          position: 'relative',
        }}
      >
        <img src={imag} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Background" />
        <div
          style={{
            position: 'absolute',
            height: '450px',
            width: '30%',
            top: '45%', // Adjust to position vertically
            left: '47%', // Adjust to position horizontally
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            border: '1px solid #ccc',
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
            textAlign: 'center',
            borderRadius: '8px',
          }}
        >
          <h2>
            {album}
            <IconButton onClick={playlistAdd} color="red" aria-label="add to playlist" style={{ backgroundColor: 'Green' }}>
              <PlaylistAdd />
            </IconButton>
          </h2>
          <p>{artist}</p>
          <img src={link} alt="Song Cover" />

          {/* Audio Player */}
          <audio ref={(player) => setAudioPlayer(player)} src={audioUrl}></audio>

          {/* ASlider component */}
          <ASlider audioPlayer={audioPlayer} />

          {/* Baritem component */}
          <Baritem playAudio={playAudio} pauseAudio={pauseAudio} skipPrevious={skipPrevious} skipNext={skipNext} />
        </div>
      </div>
    </div>
  );
};

export default SongPage2;
