import React from 'react'
import { StyledJobsMayLikeIt } from './style'
import Typography from '@/components/atoms/Typography'
import TabsJob from '../Tabs'
import Jobs from '../Jobs'

const JobsMayLikeIt = () => {
  return (
    <StyledJobsMayLikeIt>
      <Typography as='h1'>Jobs you might like</Typography>
      <TabsJob/>
      <Jobs/>
    </StyledJobsMayLikeIt>
  )
}

export default JobsMayLikeIt
