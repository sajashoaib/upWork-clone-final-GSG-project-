'use client'
import React, { createContext, useContext, useState } from "react";

const SavedJobContext = createContext();

export const SavedJobProvider = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState([]);

  const addSavedJob = (job) => {
    setSavedJobs([...savedJobs, job]);
  };

  return (
    <SavedJobContext.Provider value={{ savedJobs, addSavedJob }}>
      {children}
    </SavedJobContext.Provider>
  );
};

export const useSavedJobData = () => {
  return useContext(SavedJobContext);
};
