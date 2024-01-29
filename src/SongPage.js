// SongPage.js

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbars from './Components/Navbars';
import imag from './assets/back.jpg';
import ASlider from './Components/ASlider';
import IconButton from '@mui/material/IconButton';
import PlaylistAdd from '@mui/icons-material/PlaylistAdd';
import Baritem from './Components/Baritem';

const SongPage = () => {

  const location = useLocation();
  const { link, title, content } = location.state || {};
  const [audioPlayer, setAudioPlayer] = useState(null);
  const [audioUrl,setAudioUrl] = useState('https://p.scdn.co/mp3-preview/5410200eb247f6e4ec219a9372c9446593f6ff20');

  const playlistAdd = () => {
    // Add logic to add the current song to the playlist
  };
  const playlistextract = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/music/vijay.rajkumar2003@gmail.comyajiv@2110`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const data = await response.text();
      const jsdata = JSON.parse(data);
      console.log(data);
      console.log(jsdata);
    }
    catch (error) {
      console.error('Error:', error);
    }
  };

  //const audioUrl = 'https://p.scdn.co/mp3-preview/5410200eb247f6e4ec219a9372c9446593f6ff20';

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
      <div>
      <button onClick={playlistextract}>extractplaylist</button>
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
            {title}
            <IconButton onClick={playlistAdd} color="red" aria-label="add to playlist" style={{ backgroundColor: 'Green' }}>
              <PlaylistAdd />
            </IconButton>
          </h2>
          <p>{content}</p>
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
    </div>
  );
};

export default SongPage;
