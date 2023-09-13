'use client'
import React from 'react'
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import {StyledInput,} from './style';
import {BiSolidUser }from 'react-icons/bi'

const Input = () => {
  return (
    <div>
     
<Box sx={{
        width: 350,
        maxWidth: '100%',
      }}>
      
         <StyledInput
          fullWidth
          id="fullWidth"
          type='email'
          placeholder='UserName or Email'
            InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BiSolidUser/>
              </InputAdornment>
            ),
          }}
               />
    </Box>
    </div>
  )
}

export default Input
