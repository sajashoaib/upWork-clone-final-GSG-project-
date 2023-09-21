"use client";
import Footer from "@/components/molecules/Footer";
import NavBar from "@/components/molecules/NavBar";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ProfileName from "./ProfileName";
import Testimonials from "./Testimonials";
import OtherExperiences from "./OtherExperiences";
import EmploymentHistory from "./EmploymentHistory";
import Certificate from "./Certificate";

const Sections = () => {
  return (
    <div>
      <NavBar />
      <React.Fragment>
        <Container maxWidth="lg">
          <Box
            sx={{
              width: "100%",
              padding: "20px 15px ",
              borderRadius: "20px",
              margin: "30px 0",
            }}
          >
            <ProfileName />
            <Testimonials />
            <Certificate />
            <EmploymentHistory />
            <OtherExperiences />
          </Box>
        </Container>
      </React.Fragment>
      <Footer />
    </div>
  );
};

export default Sections;
