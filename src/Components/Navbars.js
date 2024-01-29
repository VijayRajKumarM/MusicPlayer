import React from 'react';
import '../Css/Navbars.css';
import { json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const NavBars = () => {
    const [searchValue, setSearchValue] = React.useState('');
    const [responseFromSpringBoot,setResponseFromSpringBoot] = React.useState('');
    const navigate = useNavigate();

  // Handler function to update the state when the input changes
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

const handleGetSongDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/${searchValue}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const data = await response.text();
      setResponseFromSpringBoot(data);
      console.log("hello");
      //console.log(data);
      console.log(responseFromSpringBoot);
      const jsdata = JSON.parse(data);
      console.log("helloworld");
      console.log(jsdata);
      console.log(jsdata.trackid,jsdata.album,jsdata.artist);
      let trackid = jsdata.trackid;
      let album = jsdata.album;
      let artist = jsdata.artist;
      navigate(`/song2/${encodeURIComponent(album)}`, { state: {album,artist,trackid} });
    } catch (error) {
      console.error('Error:', error);
    }
    /*return (
      <div>
        <Link to = {{pathname :'./'}}
      </div>
    )*/
    
  };

    return (
        <nav className="navbar">
            <div className="nav-item">
                <a href="#" idy="home-link">Home</a>
            </div>
            <div className="nav-item">
                <input type="text" id="search-bar" placeholder="Search" onChange={handleInputChange}/>
            </div>
            <div className="sub-button">
                <button id='search-button' onClick={handleGetSongDetails}>Submit</button>
            </div>
            <div className="nav-item" id="user-info">
                <img src="user-avatar.jpg" alt="User Avatar" width="30" height="30" />
                <span>Username</span>
            </div>
        </nav>
    );
};

export default NavBars;
