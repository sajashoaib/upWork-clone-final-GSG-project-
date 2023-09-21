"use client";
import Footer from "@/components/molecules/Footer";
import NavBar from "@/components/molecules/NavBar";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@/components/atoms/Typography";
import ProposalSettings from "./ProposalSettings";
import { EachJobData } from "@/mock/EachJobData";
import AdditionalDetail from "./AdditionalDetails";
import Terms from "./Terms";

const Sections = () => {
  const jobData = EachJobData[0];
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
            <Typography as="h1">Submit a Proposal</Typography>
            <ProposalSettings jobData={jobData} />
            <Terms />
            <AdditionalDetail />
          </Box>
        </Container>
      </React.Fragment>
      <Footer />
    </div>
  );
};

export default Sections;
