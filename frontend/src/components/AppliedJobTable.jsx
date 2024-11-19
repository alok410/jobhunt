import React from 'react';
import './AppliedJobTable.css';

const AppliedJobTable = () => {
  const appliedJobs = [
    { date: '2024-09-01', role: 'Software Engineer', company: 'ABC Corp', status: 'Applied' },
    { date: '2024-09-02', role: 'Frontend Developer', company: 'XYZ Ltd', status: 'Interview' },
    { date: '2024-09-03', role: 'Backend Developer', company: 'DEF Inc', status: 'Rejected' },
    { date: '2024-09-04', role: 'Full Stack Developer', company: 'GHI Tech', status: 'Offer' }
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Applied':
        return 'status-applied';
      case 'Interview':
        return 'status-interview';
      case 'Rejected':
        return 'status-rejected';
      case 'Offer':
        return 'status-offer';
      default:
        return '';
    }
  };

  return (
    <div className="table-container"> 
      <h1>A list of your applied companies</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Job Role</th>
            <th>Company</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appliedJobs.map((job, index) => (
            <tr key={index}>
              <td>{job.date}</td>
              <td>{job.role}</td>
              <td>{job.company}</td>
              <td className={getStatusClass(job.status)}>{job.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppliedJobTable;
