// Baritem.js

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const Baritem = ({ playAudio, pauseAudio, skipPrevious, skipNext }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPauseClick = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePreviousClick = () => {
    skipPrevious();
  };

  const handleNextClick = () => {
    skipNext();
  };

  return (
    <Card style={{ backgroundColor: 'pink', maxWidth: '100%', maxHeight: '100px', borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardContent style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'white' }}>
        <IconButton onClick={handlePreviousClick} style={{ backgroundColor: 'green' }}>
          <SkipPreviousIcon />
        </IconButton>
        <IconButton onClick={handlePlayPauseClick} style={{ backgroundColor: 'green' }}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <IconButton onClick={handleNextClick} style={{ backgroundColor: 'green' }}>
          <SkipNextIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Baritem;
