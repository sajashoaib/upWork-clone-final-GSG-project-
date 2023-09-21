'use client'
import { Box, Button, TextField, styled } from "@mui/material";


export const StyledInput=styled(TextField)`
border-radius:10px;
margin-bottom:10px;
border: 1px solid ${(props)=>props.theme.colors.gray02};       
&:hover {
    border-color: ${(props)=>props.theme.colors.gray01}; 
    box-shadow: 0 0 5px ${(props)=>props.theme.colors.gray01}; 
  }

`
