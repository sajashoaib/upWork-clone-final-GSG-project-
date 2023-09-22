"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const JobDataContext = createContext();
const JOB_DATA_KEY = "jobData";

export const useJobData = () => {
  return useContext(JobDataContext);
};

export const JobDataProvider = ({ children }) => {
  const [jobData, setJobData] = useState(() => {
    const savedJobData = localStorage.getItem(JOB_DATA_KEY);
    return savedJobData ? JSON.parse(savedJobData) : null;
  });
  useEffect(() => {
    if (jobData) {
      localStorage.setItem(JOB_DATA_KEY, JSON.stringify(jobData));
    } else {
      localStorage.removeItem(JOB_DATA_KEY);
    }
  }, [jobData]);

  const setJob = (data) => {
    setJobData(data);
  };

  return (
    <JobDataContext.Provider value={{ jobData, setJob }}>
      {children}
    </JobDataContext.Provider>
  );
};
