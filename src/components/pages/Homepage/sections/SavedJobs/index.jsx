
import { removeSavedJob } from '@/redux/savedjobsreducers';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SavedJobs = () => {
//   const savedJobs = useSelector((state) => state.savedJobs.savedJobsList); 
//   const dispatch = useDispatch();

//   const handleRemoveJob = (jobId) => {
//     dispatch(removeSavedJob(jobId));
//   };

  return (
    <div>
      <h2>Saved Jobs</h2>
      {/* <ul>
        {savedJobs.map((job) => (
          <li key={job.id}>
            <span>{job.title}</span>
            <button onClick={() => handleRemoveJob(job.id)}>Remove</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default SavedJobs;
