'use client'
import React from 'react'
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import {StyledInput,} from './style';
import {BiSolidUser }from 'react-icons/bi'

const Input = ({type,placeholder,icon,onChange,name}) => {
  return (
    <div>
     
<Box sx={{
        width: 350,
        maxWidth: '100%',
      }}>
      
         <StyledInput
          fullWidth
          id="fullWidth"
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
            InputProps={{
            startAdornment: (
              <InputAdornment position="start">
              {icon}  
              </InputAdornment>
            ),
          }}
               />
    </Box>
    </div>
  )
}

export default Input
