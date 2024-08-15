import React from "react";
import ImageSlider from "../../src/components/ImageSlider";
import CoursesSection from '../../src/components/CoursesSection'
import { Box, Typography, Container, Card, CardContent, CardMedia, Button, Grid } from '@mui/material';



const cardData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    title: 'Service 1',
    description: 'Description of Service 1',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    title: 'Service 2',
    description: 'Description of Service 2',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    title: 'Service 3',
    description: 'Description of Service 3',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    title: 'Service 4',
    description: 'Description of Service 4',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/150',
    title: 'Service 5',
    description: 'Description of Service 5',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/150',
    title: 'Service 6',
    description: 'Description of Service 6',
  },
];


function HomePage() {
  return (
    <>
    <ImageSlider/>
    <Container style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
    <Box textAlign="center" marginBottom={4}>
      <Typography variant="h3" component="h1" gutterBottom>
        Services We Offer
      </Typography>
    </Box>
    <Grid container spacing={4}>
      {cardData.map((card) => (
        <Grid item xs={12} sm={6} md={4} key={card.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
              <Box mt={2}>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Box textAlign="center" marginTop={4}>
        <img
          src="/src/assets/just.png"
          alt="Additional Information"
          style={{ width: '100%', height: 'auto', marginTop: '2rem' }}
        />
      </Box>
      <CoursesSection/>
  </Container>
  </>
  );
}

export default HomePage;
