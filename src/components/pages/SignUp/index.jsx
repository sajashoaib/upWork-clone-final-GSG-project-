"use client";
import React from "react";
import NavLoginSignUp from "@/components/molecules/NavBarLogin&SignUp";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { StyledBox } from "../Login/style";
import SignUpForm from "./SignUPForm";
import FooterLoginSignUp from "@/components/molecules/FooterLogin&Signup";

const SignUp = () => {
  return (
    <div>
      <NavLoginSignUp isLoginPage={true} />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <StyledBox>
            <SignUpForm />
          </StyledBox>
        </Container>
      </React.Fragment>
      <FooterLoginSignUp />
    </div>
  );
};

export default SignUp;
