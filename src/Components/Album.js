import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';



/*  album*/ 
function ContinuousSlider() {
  const [value, setValue] = React.useState(30);
const slideStyle={
  padding:20,
  width:'200',height:200,
}

  return (
    <Box sx={{ width: 200 }} style={slideStyle}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
      </Stack>
      <Slider defaultValue={30} aria-label="Disabled slider" />
    </Box>
  );
}
const Album = () => {
  const cardStyle = {
    backgroundColor: 'pink',
    padding: '20px',
    width:'40%',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin: '0 auto',
     // Center the card horizontally
    //marginLeft:'20%',
     marginTop: '50vh', // Center the card vertically
    transform: 'translateY(-50%)',
    height:600
  };
  return (
    <div>
    <Card style={cardStyle}>
      <CardContent>
        <Typography variant="h5" component="div">
          Song Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
                    By the singer name
        </Typography>
        <br></br>
        <img src="https://reactjs.org/logo-og.png" alt="react logo" style={{height: '350px', maxWidth: '60%',
    marginBottom: '15px',
    borderRadius: '8px', }}/>

    <br></br>
   <ContinuousSlider></ContinuousSlider>
      </CardContent>


    </Card>
    
    </div>
  );
};


export default Album;