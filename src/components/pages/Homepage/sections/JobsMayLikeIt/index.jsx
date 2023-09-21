import React,{useState} from 'react'
import { StyledJobsMayLikeIt } from './style'
import Typography from '@/components/atoms/Typography'
import TabsJob from '../Tabs'
import Jobs from '../Jobs'

const JobsMayLikeIt = () => {
  const [savedJobs, setSavedJobs] = useState([]); 

  const handleSaveJob = (job) => {
    setSavedJobs((prevSavedJobs) => [...prevSavedJobs, job]);
  };

  const handleUnSaveJob = (job) => {
    setSavedJobs((prevSavedJobs) => prevSavedJobs.filter((savedJob) => savedJob !== job));
  };

  return (
    <StyledJobsMayLikeIt>
      <Typography as='h1'>Jobs you might like</Typography>
      <TabsJob savedJobs={savedJobs}  onSaveJob={handleSaveJob} onUnSaveJob={handleUnSaveJob}/>
      {/* <Jobs/> */}
    </StyledJobsMayLikeIt>
  )
}

export default JobsMayLikeIt
