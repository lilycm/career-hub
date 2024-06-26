import { useState } from 'react';
import './FeaturedJobs.css'
import { useEffect } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {

    const [jobs, setjobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setjobs(data))
    }, [])
    // console.log(jobs);


    // this is not the best way to load data in a webpage
    // to show only 4 data on a page
    const [jobsDataLength, setJobsDataLength]= useState(4);



    return (
        <div className="lg:my-24 text-center">
            <div>
                <h1 className="font-man text-4xl font-extrabold">Featured Jobs</h1>
                <p className='text-[#757575] font-semibold text-base mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:px-20 gap-6 mt-12 mb-8'>
                {
                    jobs.slice(0, jobsDataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

            <div className={jobsDataLength === jobs.length && 'hidden'}>
                <button onClick={()=> setJobsDataLength(jobs.length)} className='font-man font-extrabold text-xl bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white px-3 py-4 rounded-lg'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;