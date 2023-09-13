'use client'
import React from 'react'
import { Box } from '@mui/material'
import { StyledSpan, StyledToolBar } from './style';
import Typography from '@/components/atoms/Typography';
const NavLoginSignUp = ({isLoginPage}) => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
        <StyledToolBar >
        <img src='../../assets/images/Upwork-Logo-1-500x281.png' alt="error" width="100px"/>
        {isLoginPage &&  <Typography as='p'>Here to hire talent?<StyledSpan> Join as a Client</StyledSpan></Typography>}
        </StyledToolBar>
    </Box>
    </div>
    
  )
}

export default NavLoginSignUp
