'use client'
import Typography from '@/components/atoms/Typography'
import React from 'react'
import { StyledDivLearnmore } from './style'
import Buttons from '@/components/atoms/Button'
import { Button } from '@mui/material'

const LearnMoreSection = () => {
  return (
    <StyledDivLearnmore>
      <Typography as='h1'> Get 80 Connects each month</Typography>
      <Typography as='p'>Join Freelancer Plus to start each month fresh with 80 Connects. Youll get a lot of other perks too! Join now to unlock new features 
      to help you grow your network and market your skills.</Typography>
      <Button
      label="learn more"
      style={{
        backgroundColor: '#ffffff',
        color:'green',
        border:'green'
      }}
     
      width="150px"
      
    />
    </StyledDivLearnmore>
      
  )
}

export default LearnMoreSection
