import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Grid, Container } from '@mui/material';

// Sample data for the courses
const coursesData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300x200',
    name: 'Course 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$199',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300x200',
    name: 'Course 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$299',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/300x200',
    name: 'Course 3',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: '$399',
  },
];

function CoursesSection() {
  return (
    <Container style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <Box textAlign="center" marginBottom={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Our Courses
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {coursesData.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                borderRadius: '8px',
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {course.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {course.description}
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                  {course.price}
                </Typography>
                <Box mt={2}>
                  <Button variant="contained" color="primary" style={{ marginRight: '8px' }}>
                    View Details
                  </Button>
                  <Button variant="outlined" color="primary">
                    Book Free Trial
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CoursesSection;

