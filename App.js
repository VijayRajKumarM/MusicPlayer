import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const song = "Jailer";

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleButtonClick = () => {
    // Send data to Flask server
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data from the Flask server
        console.log(data);
        setIsPlaying(!isPlaying); // Update player state based on the server response
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  };
  const handleButtonClick2 = () => {
    // Send data to Flask server
    fetch('/searchsong', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        song,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data from the Flask server
        console.log(data);
        setIsPlaying(!isPlaying); // Update player state based on the server response
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  };
  return (
    <div>
      <h2>My Music Player App</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="button" onClick={handleButtonClick}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button type = "button" onClick={handleButtonClick2}>
          Song
        </button>
      </form>
      <ReactPlayer
        url="https://p.scdn.co/mp3-preview/2616272ce2d83d6d9d15d31fb93b548501bc8f4c?cid=04924240c02b4ceca8e9953b2910f5cd"
        controls
        playing={isPlaying}
        width="100%"
        height="50px"
      />
    </div>
  );
};

export default MusicPlayer;
