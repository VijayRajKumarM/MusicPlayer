import { useParams } from 'react-router-dom';
import React from 'react';
import Navbars from './Components/Navbars';
import DisplayCards from './Components/DisplayCards';
import alb from './assets/alb.jpg';

function Home() {
    const { username } = useParams();

    const songs = [
        { title: 'Sleep drugs', content: 'Sleep songs from Yuvan are fantastic', link: alb },

        { title: 'Sleep drugs', content: 'Sleep songs from Yuvan are fantastic', link: alb },
        { title: 'Sleep drugs', content: 'Sleep songs from Yuvan are fantastic', link: alb },
        { title: 'Sleep drugs', content: 'Sleep songs from Yuvan are fantastic', link: alb },
        { title: 'Sleep drugs', content: 'Sleep songs from Yuvan are fantastic', link: alb },
        { title: 'Sleep drugs', content: 'Sleep songs from Yuvan are fantastic', link: alb },
        { title: 'Sleep drugs', content: 'Sleep songs from Yuvan are fantastic', link: alb },
        { title: 'Sleep drugs', content: 'Sleep songs from Yuvan are fantastic', link: alb }
        // Add more songs as needed
    ];

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    };

    const cardStyle = {
        width: '200px',
        margin: '10px',
    };

    return (
        <div>
            <Navbars />
            <br />
            <div style={containerStyle}>
                {songs.map((song, index) => (
                    <DisplayCards
                        key={index}
                        title={song.title}
                        content={song.content}
                        link={song.link}
                        style={cardStyle}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
