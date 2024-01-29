// YourComponent.js

import React from 'react';

const Albcard = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // 100% of viewport height
      }}
    >
      {/* Your card content goes here */}
      <div
        style={{
          width: '70%', // Adjust the width as needed, leaving outer spaces
          maxWidth: '400px', // Set a maximum width for the card
          padding: '20px',
          border: '1px solid #ccc',
          backgroundColor: '#fff',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <h1>Your Card Title</h1>
        <p>Your card content goes here.</p>
      </div>
    </div>
  );
};

export default Albcard;
