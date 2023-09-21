'use client'
import Typography from '@/components/atoms/Typography'
import React,{useState,useEffect} from 'react'
import { StyledJobs, StyledTitleJob } from './style'
import EachJob from './EachJob'
import { EachJobData } from '@/mock/EachJobData'

const Jobs = () => {
  const handleSaveJob = () => {
    console.log('Job saved');
  };
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
   
  return (
    <StyledJobs>
      <Typography as='p'>Browse jobs that match your experience to a clients hiring preferences. Ordered by most relevant.</Typography>
      {jobs.map((job,index) => (
          <EachJob key={index} {...job} data={job} onSaveJob={handleSaveJob}/>
      ))}
    </StyledJobs>
  )
}

export default Jobs
