'use client'
import React, { createContext, useContext, useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "savedJobs";
const SavedJobContext = createContext();

export const SavedJobProvider = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState(()=>{
  const savedJobData = localStorage.getItem(LOCAL_STORAGE_KEY);
  return savedJobData ? JSON.parse(savedJobData) : null;
  });
  useEffect(() => {
    if (savedJobs) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedJobs));
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }, [savedJobs]);

  const addSavedJob = (job) => {
    setSavedJobs([...savedJobs, job]);
  };

  return (
    <SavedJobContext.Provider value={{ savedJobs, addSavedJob}}>
      {children}
    </SavedJobContext.Provider>
  );
};

export const useSavedJobData = () => {
  return useContext(SavedJobContext);
};
