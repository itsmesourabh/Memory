import React from 'react'
import { Box, Container, Stack, Typography, TextField, RadioGroup, FormControlLabel, Radio, Button, List, ListItem, ListItemIcon } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Form = () => {
  return (
    <div>
       <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        {/* Left Section with Text */}
        <Box
          sx={{
            flex: 1,
            paddingRight: "20px",
          }}
        >
          <Typography variant="h6">Contact Details</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <Typography variant="body1">+1 234 567 890</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <Typography variant="body1">info@example.com</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <Typography variant="body1">123 Example St, City, Country</Typography>
            </ListItem>
          </List>
        </Box>
        {/* Right Section with Form */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#f5f5f5",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <form>
            <Stack spacing={2}>
              <TextField label="First Name" variant="outlined" fullWidth />
              <TextField label="Last Name" variant="outlined" fullWidth />
              <TextField label="Email" type="email" variant="outlined" fullWidth />
              <TextField label="Phone Number" type="tel" variant="outlined" fullWidth />
              
              <TextField
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
              />
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </div>
  )
}

export default Form
