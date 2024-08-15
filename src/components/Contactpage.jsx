import React from 'react';

import useFetch from "../hooks/useFetch";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Button, CardActionArea, CardActions } from "@mui/material";
import {  List, ListItem, ListItemIcon } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Row, Col, Card, Spinner } from "react-bootstrap";
import HeaderBeloz from "../../src/components/HeaderBeloz";
import Form from '../../src/components/Form';

function ContactPage() {

  const { data, loading, error } = useFetch("/data.json"); // Path to the JSON file in the public directory

  if (loading) return <Spinner animation="border" />;
  if (error) return <p>Error: {error.message}</p>;

  return (

    <Container style={{ paddingTop: "4rem" }}>
    <HeaderBeloz />

    <Row>
      {data.map((item) => (
        <Col md={4} key={item.id} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <CardActions>
                <Button size="small" color="primary">
                  {item.fame}
                </Button>
              </CardActions>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        position: "relative",
      }}
    >
      {/* Left Section with Text */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Row>
        <Typography variant="h6">
          Contact Us
        </Typography>
        <br />
        <Typography variant="h4">
          Our Locations
        </Typography>
        <Typography variant="h7">
        Come visit our friendly team at one of our offices.
        </Typography>
        </Row>
      </Box>

      {/* Right Section with List */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <Typography variant="body1">Location 1</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <Typography variant="body1">Location 2</Typography>
          </ListItem>
        </List>
      </Box>
    </Box>
    <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "#e0e0e0",
        }}
      >
        <Box
          component="img"
          src="/src/assets/map.png"
          alt="Map"
          sx={{ width: "100%",  borderRadius: "8px" }} // Adjust size and styling as needed
        />
      </Box>

      <Form/>

  
  </Container>
    
  );
}

export default ContactPage;
