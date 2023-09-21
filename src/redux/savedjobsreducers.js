import { createSlice } from "@reduxjs/toolkit";

const savedJobsSlice = createSlice({
  name: "savedJobs",
  initialState: {
    savedJobsList: [],
  },
  reducers: {
    addSavedJob: (state, action) => {
      state.savedJobsList.push(action.payload);
    },
    removeSavedJob: (state, action) => {
      state.savedJobsList = state.savedJobsList.filter(
        (job) => job.id !== action.payload
      );
    },
  },
});

export const { addSavedJob, removeSavedJob } = savedJobsSlice.actions;

export default savedJobsSlice.reducer;
