import React from 'react'
import JobDetails from './JobDetails'

const Drawer = ({data}) => {
    if (!data) {
        return <p></p>; 
      }
    
      return (
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <JobDetails data={data} />
        </div>
      );
    };


export default Drawer
