import React from 'react';
import reactImage from '../components/react.png'; // Adjust the path as needed
import './Job.css'; // Link to your CSS file
import { useNavigate } from 'react-router-dom';
import { current } from '@reduxjs/toolkit';

const Job =({job}) => {
  const Navigate = useNavigate();
  // const jobid = "fdjkgbserihgb";
  const  daysAgoFunction = (mongodbtime)=>{
      const createdAt =   new  Date(mongodbtime);
      const currenttime = new Date();
      const timeDifference = currenttime  - createdAt
      return Math.floor(timeDifference/(1000*24*60*60))
  }     

  return (
    <div className="job-card">
      <div className="job-header">
        <p className="job-time">{daysAgoFunction(job?.createdAt) == 0 ? "today" : `${daysAgoFunction(job?.createdAt)} days ago `}</p>
        <button className="job-logo-btn">
          <img src={reactImage} alt="Job Logo" className="job-logo" />
        </button>
          <img src="" alt="bookmark" />
      </div>
      <div className="job-info">
        <h1 className="job-company">{job?.company?.name}</h1>
        <p className="job-location">{job?.position}</p>
        <p className="job-location">india</p>
                                  
      </div>
      <div className="job-title">
        <h1>{job?.title}</h1>
        <p>{job?.description}</p>
      </div>
      <div className="job-actions">
        <button onClick={()=>Navigate(`/description/${job._id}`)} className="job-btn">Details</button>
        <button className="job-btn save-btn">Save for later</button>
      </div>
    </div>
  );
}

export default Job;
