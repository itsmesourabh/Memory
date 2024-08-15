import React from "react";
import { Box, Typography } from "@mui/material";

function HeaderBeloz() {
  return (
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
      <img
        src="https://memorypower.rabsconnect.in/static/media/c1.9524f062f12bc3a1798c.png"
        alt="Left Side"
        style={{ width: "60vh", height: "45vh" }}
      />
      <Box
        sx={{
          textAlign: "center",
          flexGrow: 1,
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "10px" }}>
          Our teams are here to help
        </Typography>
        <Typography variant="body1">
          Questions, bug reports, feedback — we’re here for it all.
        </Typography>
      </Box>
      <img
        src="https://memorypower.rabsconnect.in/static/media/c2.90ee53a2e874e39b953f.png"
        alt="Right Side"
        style={{ width: "60vh", height: "45vh" }}
      />
    </Box>
  );
}

export default HeaderBeloz;
