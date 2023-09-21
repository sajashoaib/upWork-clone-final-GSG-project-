'use client'
import NavLoginSignUp from '@/components/molecules/NavBarLogin&SignUp'
import React from 'react'
import LoginForm from './LoginForm'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { StyledBox } from './style';
import FooterLoginSignUp from '@/components/molecules/FooterLogin&Signup';

const Login = () => {
  return (
    <div>
      <NavLoginSignUp isLoginPage={false}/>
      <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm" >
      <StyledBox >
     <LoginForm/>
      </StyledBox>     
    </Container>
  </React.Fragment>
  <FooterLoginSignUp/>
    </div>
  )
}

export default Login
