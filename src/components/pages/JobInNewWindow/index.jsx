'use client'
import NavBar from '@/components/molecules/NavBar'
import React from 'react'
import Drawer from '../Homepage/sections/Drawer'
import { useRouter } from 'next/navigation'
import JobDetails from '../Homepage/sections/Drawer/JobDetails'
import Footer from '@/components/molecules/Footer'

const JobInNewWindow = () => {
    // const router = useRouter();
    // const { data } = router.query;
  
    // const jobData = data ? JSON.parse(data) : null;
  return (
    <div>
      <NavBar/>
      {/* {jobData ? (
        <JobDetails data={jobData} />
      ) : (
        <p>No job data available</p>
      )} */}
      <Drawer/>
      <Footer/>
    </div>
  )
}

export default JobInNewWindow
