'use client'
import NavLoginSignUp from '@/components/molecules/NavBarLogin&SignUp'
import React from 'react'
import LoginForm from './LoginForm'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { StyledBox } from './style';
import FooterLoginSignUp from '@/components/molecules/FooterLogin&Signup';

const Login = () => {
  const data = { someKey: 'someValue' };

  if (typeof window !== 'undefined') {
    localStorage.setItem('fulldata', JSON.stringify(data));
    console.log('we are running on the client');
  } else {
    console.log('we are running on the server');
  }
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
