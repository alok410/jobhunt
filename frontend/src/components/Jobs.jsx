import React from 'react';
import NavBar from './shared/Navbar';
import FilterCard from './FilterCard';
import Job from './job';
import { useSelector } from 'react-redux';

const  Jobs = () => {
    const {alljobs} = useSelector(store=> store.job)
    const jobs = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            <div>
                <NavBar />
                <div style={{ Width: '800px', marginTop: '20px' }}>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <FilterCard />
                        <div style={{ width: '0%' }}>
                        </div>
        
                        {
                            alljobs.length <= 0 ? (
                                <span>Job Not Found</span>
                            ) : (
                                <div style={{ flex: 1, height: '88vh', overflowY: 'auto', paddingBottom: '20px' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                                        {
                                            alljobs.map((job) => (
                                                <div key={job._id}>
                                                    <Job job={job}/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Jobs;
