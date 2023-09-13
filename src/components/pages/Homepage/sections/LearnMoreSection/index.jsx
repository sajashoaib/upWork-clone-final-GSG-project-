'use client'
import Typography from '@/components/atoms/Typography'
import React from 'react'
import { StyledDivLearnmore } from './style'
import Buttons from '@/components/atoms/Button'

const LearnMoreSection = () => {
  return (
    <StyledDivLearnmore>
      <Typography as='h1'> Get 80 Connects each month</Typography>
      <Typography as='p'>Join Freelancer Plus to start each month fresh with 80 Connects. Youll get a lot of other perks too! Join now to unlock new features 
      to help you grow your network and market your skills.</Typography>
      <Buttons
      label="learn more"
      backgroundColor="white"
      width="150px"
      textColor="green"
    />
    </StyledDivLearnmore>
      
  )
}

export default LearnMoreSection
