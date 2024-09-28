import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";

const AboutSectionThree = () => {
  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: "#f7f7f7", // Light background color
        width: "100vw", // Full viewport width
        minHeight: "100vh", // Full viewport height
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Right Content (Image) */}
          <Grid item xs={12} md={6}>
            <Box>
              <img
                src="assets/img/gallery/about3.png"
                alt="About Section Image"
                style={{ width: "100%", borderRadius: 8 }}
              />
            </Box>
          </Grid>

          {/* Left Content (Text and Features) */}
          <Grid item xs={12} md={6}>
            <Box>
              {/* Section Title */}
              <Box mb={4}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#475fa9" , fontSize :"3rem" }}
                >
                  Outcomes of learning web development
                </Typography>
              </Box>

              {/* Feature 1 */}
              <Box display="flex" alignItems="center" mb={3}>
                <img
                  src="assets/img/icon/right-icon.svg"
                  alt="Right Icon"
                  style={{ width: 30, height: 30, marginRight: 16 }}
                />
                <Typography variant="body1" sx={{ color: "black" , fontSize :"1.5rem"}}>
                  Master the fundamentals of HTML, CSS, and JavaScript to build
                  responsive websites.
                </Typography>
              </Box>

              {/* Feature 2 */}
              <Box display="flex" alignItems="center" mb={3}>
                <img
                  src="assets/img/icon/right-icon.svg"
                  alt="Right Icon"
                  style={{ width: 30, height: 30, marginRight: 16 }}
                />
                <Typography variant="body1" sx={{ color: "black"  , fontSize :"1.5rem"}}>
                  Learn how to develop full-stack applications with real-world
                  projects.
                </Typography>
              </Box>

              {/* Feature 3 */}
              <Box display="flex" alignItems="center" mb={3}>
                <img
                  src="assets/img/icon/right-icon.svg"
                  alt="Right Icon"
                  style={{ width: 30, height: 30, marginRight: 16 }}
                />
                <Typography variant="body1" sx={{ color: "black" , fontSize :"1.5rem" }}>
                  Build a portfolio of projects that showcase your web
                  development skills.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSectionThree;