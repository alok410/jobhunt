import React from 'react'
import NavBar from './shared/Navbar'
import Job from './job'
import './Browse.css'; // Adjust the path as needed


const randomJobs = [1,2,5,55,54,4,4,4,4,3]
function Browse() {
  return (
    <div>
      <NavBar/>
        <h1 className='heading'>Search Results ({randomJobs.length})</h1>
      <div className="job-container">
        
        {randomJobs.map((item, index) => {
          return (
            <Job key={index} />
          )
        })}
      </div>
    </div>
  )
}

export default Browse
