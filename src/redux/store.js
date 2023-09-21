import savedJobsSlice from "./savedjobsreducers";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    savedJobs: savedJobsSlice,
  },
});
