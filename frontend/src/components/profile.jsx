import React, { useState } from 'react';
import NavBar from './shared/Navbar';
import AppliedJobTable from './AppliedJobTable';
import './profile.css';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';
import store from '@/redux/store';

const skills = ['html', 'CSS', 'Javascript', 'Reactjs'];
const isResume = true;

const profile = () => {
  const {user} = useSelector(store=>store.auth) 
  const [open, setOpen] =useState(false)
  return (
    <div>
      <NavBar />

      {/* Profile Card Container */}
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <div>
              <img src="" alt="ProfileLogo" />
            </div>
            <div>
              <h1>{user.fullname}</h1>
              <p>{user.profile.bio}</p>
            </div>
            <button onClick={()=>setOpen(true)}>Edit</button>
          </div>

          <div className="contact-info">
            <div>
              <img src="" alt="mailIco" />
              <span>{user.email}</span>
            </div>
            <div>
              <img src="" alt="contactIco" />
              <span>{user.phoneNumber}</span>
            </div>
          </div>

          <div className="skills-section">
            <h1>Skills</h1>
            {user.profile.skills.length !== 0 ? (
              user.profile.skills.map((item, index) => (
                <div key={index}>
                  <button>{item}</button>
                </div>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>

          <div className="resume-section">
            <label htmlFor="resume">Resume</label>
            {isResume ? (
              <a target="blank" href={user.profile.resume}>
               {user?.profile?.resumeOriginalName}
              </a>
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
      </div>

      {/* Applied Jobs Section as Separate Container */}
      <div className="applied-jobs-section">
        <h1 style={{textAlign:"center"}}>Applied Jobs</h1>
        <AppliedJobTable />
      </div>
    <UpdateProfileDialog  open = {open} setOpen={setOpen}/>
    </div>
  );
}

export default profile;
