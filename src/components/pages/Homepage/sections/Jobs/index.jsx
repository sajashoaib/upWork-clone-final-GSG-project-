import Typography from '@/components/atoms/Typography'
import React from 'react'
import { StyledJobs, StyledTitleJob } from './style'
import EachJob from './EachJob'
import { EachJobData } from '@/mock/EachJobData'

const Jobs = () => {
  return (
    <StyledJobs>
      <Typography as='p'>Browse jobs that match your experience to a clients hiring preferences. Ordered by most relevant.</Typography>
      {EachJobData.map((job,index) => (
  
        <EachJob key={index} {...job} />

      ))}
    </StyledJobs>
  )
}

export default Jobs
