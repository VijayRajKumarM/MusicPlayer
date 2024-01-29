import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import PlayOutlineIcon from '@rsuite/icons/PlayOutline'; // Make sure this import is correct
import { useNavigate } from 'react-router-dom';
const DisplayCards = ({ title, content, link }) => {
  const navigate = useNavigate();

  const HandleNew=()=>
  {
    navigate(`/song/${encodeURIComponent(title)}`, { state: { link, title, content } });
  }
  return (
    <Card
      elevation={3}
      style={{
        maxWidth: '220px',
        height: 250,
        margin: '16px',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardContent style={{ textAlign: 'center' }}>
        <img
          src={link}
          alt="Album"
          style={{
            width: '70%',
            height: 'auto',
            borderRadius: '5px',
            objectFit: 'cover',
          }}
        />
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <IconButton onClick={HandleNew}
          style={{ backgroundColor: 'cyan' }}
          color="primary"
          aria-label="pause"
        >
          <PlayOutlineIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default DisplayCards;
