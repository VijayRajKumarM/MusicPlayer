// ASlider.js

import React, { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';

function ASlider({ audioPlayer}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const currentTime = audioPlayer.currentTime;
      const duration = audioPlayer.duration;

      if (!isNaN(currentTime) && !isNaN(duration)) {
        setProgress((currentTime / duration) * 100);
      }
    };

    const interval = setInterval(updateProgress, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [audioPlayer]);

  const handleSliderChange = (_, newValue) => {
    if (audioPlayer) {
      const newTime = (newValue / 100) * audioPlayer.duration;
      audioPlayer.currentTime = newTime;
    }
  };

  return (
    <Slider
      value={progress}
      onChange={handleSliderChange}
      aria-labelledby="continuous-slider"
      sx={{ width: '100%', color: 'primary.main' }}
    />
  );
}

export default ASlider;
