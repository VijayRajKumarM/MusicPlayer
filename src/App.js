
//  REACT PLAYER
/*import React, { useState } from 'react';
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
*/



//****************************************************************************************************************************************** */
    


//LOGIN
/*
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [passwords, setPasswords] = useState('');
  const [data,setData] = useState([{}]);

  const handleLogin = (event) => {
    try {
      fetch(`/Player1model/${username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then(response => response.json())
        .then(data => {
          // setData and other logic that depends on the fetched data should be inside this block
          setData(data);
          console.log("data=",data);
          console.log("password=",data.password);
          setPasswords(data.password);
  
          // Use the retrieved password as needed
  
          // Validate the entered password
          if (passwords === data.password) {
            // Password is correct
            alert('Login Successful');
          } else {
            // Password is incorrect
            alert('Invalid Error');
          }
        })
        .catch(error => console.error(error));
    } catch (error) {
      // Handle errors (e.g., user not found)
      alert('Some error');
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={passwords}
          onChange={(e) => setPasswords(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleLogin}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
*/


//********************************************************************************************************************************************** */


/*
// SEARCH SONG
import React, { useState } from 'react';

const MusicApp = () => {
  const [songName, setSongName] = useState('');
  const [responseFromSpringBoot, setResponseFromSpringBoot] = useState('');

  const handleGetSongDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/${songName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const data = await response.text();
      setResponseFromSpringBoot(data);
      console.log("hello");
      console.log(responseFromSpringBoot);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Music App</h2>
      <div>
        <label>Song Name:</label>
        <input
          type="text"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleGetSongDetails}>Get Song Details</button>
      </div>
      <div>
        <p>Response from Spring Boot: {responseFromSpringBoot}</p>
      </div>
    </div>
  );
};

export default MusicApp;

*/


//ACTUAL CODE
// src/App.js
import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import { Card } from '@mui/material';
import Baritem from './Components/Baritem';
import SongPage from './SongPage'; 
import ASlider from './Components/ASlider';

import './Components/Baritem';
import { Album } from '@material-ui/icons';
import SongPage2 from './SongPage2';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/song/:title" element={<SongPage/>} />
      <Route path="/song2/:title" element={<SongPage2/>}/>
      {/*<Route path="/" element={<Home/>} />*/}
        {/* Other routes for different pages */}
      </Routes>
    </Router>
  );
};

export default App;
