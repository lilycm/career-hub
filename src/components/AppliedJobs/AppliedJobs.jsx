import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import './AppliedJobs.css'
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";



const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedjobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter= filter=>{
        if(filter === "All"){
            setDisplayJobs(appliedjobs)
        }
        else if(filter === "Remote"){
            const remoteJobs = appliedjobs.filter(job=> job.remote_or_onsite=== "Remote");
            setDisplayJobs(remoteJobs);
        }
        else if(filter === "Onsite"){
            const onsiteJobs = appliedjobs.filter(job=> job.remote_or_onsite === "Onsite");
            setDisplayJobs(onsiteJobs);
        }
    }


    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

            // another way
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied)
            // console.log(jobs, storedJobIds, jobsApplied);
        }
    }, [])

    console.log(appliedjobs);


    return (
        <div>
            <div className="">
                <div className="job-details">
                    <h2 className="font-man text-2xl font-extrabold">Applied jobs: {appliedjobs.length}</h2>
                </div>
                <div className="lg:my-20 lg:px-20">
                    <div className="flex justify-end mb-7">
                        <details className="dropdown">
                            <summary className="m-1 btn">Filter By <FaChevronDown />
                            </summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li onClick={()=>handleJobsFilter("All")}><a>All</a></li>
                                <li onClick={()=>handleJobsFilter("Remote")}><a>Remote</a></li>
                                <li onClick={()=>handleJobsFilter("Onsite")}><a>Onsite</a></li>
                            </ul>
                        </details>
                    </div>
                    {
                        displayJobs.map(job => <>
                            <div key={job.id}>
                                <div className="flex justify-between items-center gap-4 mb-6 border rounded p-7 hover:shadow-2xl">
                                    <div className="w-4/12 h-4/12 bg-[#F4F4F4] rounded p-5 flex items-center justify-center">
                                        <img className="w-9/12 h-fit" src={job.logo} alt="" />
                                    </div>
                                    <div className="">
                                        <div className="space-y-4">
                                            <h2 className="text-[#474747] font-extrabold text-2xl font-man">{job.job_title}</h2>
                                            <h4 className='font-man text-xl font-semibold text-[#474747]'>{job.company_name}</h4>
                                            <div className='flex gap-4'>
                                                <button className='font-man font-extrabold text-base bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text border border-indigo-500 rounded px-3 py-2'>{job.remote_or_onsite}</button>
                                                <button className='font-man font-extrabold text-base bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text border border-indigo-500 rounded px-3 py-2'>{job.job_type}</button>
                                            </div>
                                            <div className='flex gap-7'>
                                                <div className='flex gap-3'>
                                                    <SlLocationPin className='text-4xl' />
                                                    <p className='text-[#757575] font-man font-semibold text-xl '>{job.location}</p>
                                                </div>
                                                <div className='flex gap-3'>
                                                    <HiOutlineCurrencyDollar className='text-4xl' />
                                                    <p className='text-[#757575] font-man font-semibold text-xl '>{job.salary}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <Link to={`/job/${job.id}`}><button className='font-man font-extrabold text-xl bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white px-3 py-4 rounded-lg'>View Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;