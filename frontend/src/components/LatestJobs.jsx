import React from 'react'
import LatestJobCards from './LatestJobCards'
import { useSelector } from 'react-redux'

const randomJobs= [1,2,3,4,5,6,7,8]
const LatestJobs = () => {
  const {alljobs} = useSelector(store=> store.job)
    const styles = {
        gridContainer: {
        marginTop:"50px",
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',  /* Similar to grid-cols-3 */
          gap: '1rem',                             /* Similar to gap-4 (16px) */
          marginBottom: '1.25rem',                 /* Similar to my-5 (20px bottom margin) */
        }
      };
      
  return (
    <>
    <div>

    <div style={styles.gridContainer}>
    {alljobs.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job} />)}
  </div>
    </div>
    </>
  
  )
}

export default LatestJobs