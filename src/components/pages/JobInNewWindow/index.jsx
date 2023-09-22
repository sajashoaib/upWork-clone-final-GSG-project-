"use client";
import NavBar from "@/components/molecules/NavBar";
import React, { useEffect } from "react";
import Drawer from "../Homepage/sections/Drawer";
import { useRouter } from "next/navigation";
import JobDetails from "../Homepage/sections/Drawer/JobDetails";
import Footer from "@/components/molecules/Footer";
import { useJobData } from "@/context/JobDataContext";

const JobInNewWindow = () => {
  const { jobData } = useJobData();

  useEffect(() => {
    if (jobData) {
      console.log("Job Data:", jobData);
    }
  }, [jobData]);
  return (
    <div>
      <NavBar />
      {jobData ? (
        <JobDetails data={jobData} width="70%" margin="10px auto" />
      ) : (
        <p>No job data available</p>
      )}
      <Drawer />
      <Footer />
    </div>
  );
};

export default JobInNewWindow;
