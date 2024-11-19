import React, { useEffect, useState } from 'react';
import './JobDescription.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';

const JobDescription = () => {
  const params = useParams();
  const { user } = useSelector(store => store.auth);
  const { singleJob } = useSelector(store => store.job);
  const jobId = params.id;
  const isInitiallyApplied = singleJob?.applications?.some(application=>application.applicant === user._id) || false; // This can be dynamically set based on your logic
  const [isApplied, setIsApplied] = useState()
  const dispatch = useDispatch();
  


  const  applyJobHandler = async () =>{
      try {
        const  res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`,{withCredentials:true});
          if(res.data.success){
            setIsApplied(true)
            const updatedSingleJob = {...singleJob,applications:[...singleJob.applications,{applicant:user?._id}]}
            dispatch(setSingleJob(updatedSingleJob))
            console.log(res.data);
            
            alert(res.data.message)
          }
        
      } catch (error) {
        console.log(error);
        
        
      }
  }

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job)); // Corrected the key to singular "job"
          // setIsApplied(res.data.job?.applications?.some(application=>application.applicant ==  user?._id))
          console.log(setIsApplied)
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className="job-container">
      <div style={{display:"block"}} className="job-header">
        <h1>{singleJob?.title}</h1>
        <div className="job-details">
          <span className='job-data'>{singleJob?.position}</span>
          <span className='job-data'>{singleJob?.jobtype}</span>
          <span className='job-data'>{singleJob?.salary} LPA</span>
        </div>
      </div>

      <div className="job-description">
        <h1>Role: <span>{singleJob?.title}</span></h1>
        <h1>Location: <span>{singleJob?.location}</span></h1>
        <h1>Description: <span>{singleJob?.description}</span></h1>
        <h1>Experience: <span>{singleJob?.experience} years</span></h1>
        <h1>Salary: <span>{singleJob?.salary} LPA</span></h1>
        <h1>Total Applications: <span>{singleJob?.applications?.length > 0 ? singleJob.applications.length : 0}</span></h1>
        <h1>Posted Date: <span>{new Date(singleJob?.createdAt).toLocaleDateString()}</span></h1>
      </div>
      
      <button 
      onClick={isApplied ? null:applyJobHandler}
        className="apply-btn" 
        disabled={isApplied}
        style={{ cursor: isApplied ? "not-allowed" : "pointer" }}
      >
        {isApplied ? "Already Applied" : "Apply Now"}
      </button>
    </div>
  );
};

export default JobDescription;
