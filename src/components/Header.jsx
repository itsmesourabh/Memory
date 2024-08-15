import React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";

import {
  Home as HomeIcon,
  AutoAwesomeOutlined as AboutIcon,
  School as CoursesIcon,
  Call as ContactIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

function Header() {
  const [anchorElAbout, setAnchorElAbout] = useState(null);
  const [anchorElCourses, setAnchorElCourses] = useState(null);

  const handleClickAbout = (event) => {
    setAnchorElAbout(event.currentTarget);
  };

  const handleCloseAbout = () => {
    setAnchorElAbout(null);
  };

  const handleClickCourses = (event) => {
    setAnchorElCourses(event.currentTarget);
  };

  const handleCloseCourses = () => {
    setAnchorElCourses(null);
  };

  return (
    <AppBar position="fixed" color="primary"  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar variant="dense">
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <img
                src="/src/assets/mainimage.png"
                alt="logo"
                style={{ width: 140, padding: 5 }}
              />
            </Typography>
          </Box>

          <Button color="inherit" href="/" startIcon={<HomeIcon />}>
            Home
          </Button>
          <Button
            color="inherit"
            startIcon={<AboutIcon />}
            onClick={handleClickAbout}
          >
            About Us
          </Button>
          <Menu
            anchorEl={anchorElAbout}
            open={Boolean(anchorElAbout)}
            onClose={handleCloseAbout}
          >
            <MenuItem onClick={handleCloseAbout}>Team</MenuItem>
            <MenuItem onClick={handleCloseAbout}>History</MenuItem>
            <MenuItem onClick={handleCloseAbout}>Careers</MenuItem>
          </Menu>
          <Button
            color="inherit"
            startIcon={<CoursesIcon />}
            onClick={handleClickCourses}
          >
            Courses
          </Button>
          <Menu
            anchorEl={anchorElCourses}
            open={Boolean(anchorElCourses)}
            onClose={handleCloseCourses}
          >
            <MenuItem onClick={handleCloseCourses}>Programming</MenuItem>
            <MenuItem onClick={handleCloseCourses}>Design</MenuItem>
            <MenuItem onClick={handleCloseCourses}>Marketing</MenuItem>
          </Menu>
          <Button color="inherit" href="/contact" startIcon={<ContactIcon />}>
            Contact Us
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
          >
            <Button
              variant="outlined"
              color="inherit"
              href="https://memorypowerbackenddashboard.rabs.support/register"
              target="_blank"
              startIcon={<AboutIcon />}
            >
              Join Class
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              href="https://memorypowerbackenddashboard.rabs.support/register"
              target="_blank"
              startIcon={<CoursesIcon />}
            >
              Book A Free Trial
            </Button>
          </Box>

          <IconButton color="inherit" aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Twitter">
            <TwitterIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
