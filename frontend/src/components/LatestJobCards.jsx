import React from 'react';

const  LatestJobCards = ({job}) =>{
  
    const styles = {
        cardContainer: {
          border: '1px solid #ddd',              /* Border around the card */
          borderRadius: '8px',                   /* Rounded corners */
          padding: '16px',                       /* Padding inside the card */
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', /* Slight shadow for depth */
          backgroundColor: '#fff',               /* White background */
          maxWidth: '500px',                     /* Limit card width */
          margin: '16px',                        /* Margin around the card */
          display: 'flex',                       /* Use flexbox layout */
          flexDirection: 'column',               /* Stack items vertically */
          alignItems: 'center',                 /* Center items horizontally */
          textAlign: 'center',                  /* Center text horizontally */
        },
        companyInfo: {
          marginBottom: '12px',                  /* Space between company info and job details */
        },
        companyName: {
          fontSize: '18px',                      /* Company name font size */
          fontWeight: 'bold',                    /* Bold company name */
          marginBottom: '4px',                   /* Space below the company name */
        },
        location: {
          fontSize: '14px',                      /* Location font size */
          color: '#777',                         /* Slightly muted color for location */
        },
        jobDetails: {
          marginBottom: '12px',                  /* Space between job details and other sections */
        },
        jobTitle: {
          fontSize: '20px',                      /* Job title font size */
          fontWeight: 'bold',                    /* Bold job title */
          marginBottom: '8px',                   /* Space below the job title */
        },
        description: {
          fontSize: '14px',                      /* Description font size */
          color: '#555',                         /* Text color for the description */
        },
        badge: {
          display: 'inline-block',               /* Badge as an inline block element */
          padding: '4px 8px',                    /* Padding inside the badge */
          backgroundColor: '#f0ad4e',            /* Badge background color */
          color: '#fff',                         /* Badge text color */
          borderRadius: '12px',                  /* Rounded corners for the badge */
          fontSize: '12px',                      /* Font size for the badge */
          marginBottom: '8px',                   /* Space below the badge */
        },
        jobType: {
          fontSize: '14px',                      /* Job type font size */
          fontWeight: 'bold',                    /* Bold job type */
          marginBottom: '8px',                   /* Space below the job type */
          color: '#5bc0de',                      /* Job type text color */
        },
        salary: {
          fontSize: '16px',                      /* Salary font size */
          fontWeight: 'bold',                    /* Bold salary text */
          color: '#5cb85c',                      /* Salary text color */
        },
      };
      
  return (
    <div style={styles.cardContainer}>
      <div style={styles.companyInfo}>
        <div style={styles.companyName}>{job?.company?.name}</div>
        <p style={styles.location}>India</p>
      </div>
      <div style={styles.jobDetails}>
        <h1 style={styles.jobTitle}>{job?.title}</h1>
        <p style={styles.description}>
          {job?.description}
        </p>
      </div>
      <div style={styles.badge}>{job?.position}</div>
      <div style={styles.jobType}>{job?.jobtype}</div>
      <div style={styles.salary}>{job?.salary}</div>
    </div>
  );
}

export default LatestJobCards;
