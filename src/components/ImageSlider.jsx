import React, { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';

// Array of image URLs
const images = [
  'https://th.bing.com/th?id=OIP.12nPg3IqGdh0qxl7mFLwFAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
  'https://th.bing.com/th?id=OIP.hA4Ruch-CuHUAf-rxrwaKwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
  'https://th.bing.com/th?id=OIP.TH3di7eJoG-9Syo90IwCnwHaFP&w=296&h=210&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' // Add your image URLs here
];

function ImageSliderOverview() {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <Container style={{ paddingTop: '4rem' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px',
        }}
      >
        {/* Left Section with Image Slider */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: '#f5f5f5',
            padding: '20px',
            borderRadius: '8px',
          }}
        >
          <img
            src={currentImage}
            alt="Slider"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Box>

        {/* Right Section with Overview Text */}
        <Box
          sx={{
            flex: 1,
            padding: '20px',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Overview
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum. Cras venenatis euismod malesuada.
            Fusce vel ligula urna. Suspendisse potenti. Proin id risus at nunc
            cursus vestibulum non ac lacus. Sed auctor tortor id libero
            fermentum, ac aliquam lacus lacinia.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default ImageSliderOverview;
