import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import './AppliedJobs.css'
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineCurrencyDollar } from "react-icons/hi";




const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedjob, setAppliedJob] = useState([]);


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
            setAppliedJob(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied);
        }
    }, [])

    console.log(appliedjob);


    return (
        <div>
            <div className="lg:px-20">
                <div className="job-details">
                    <h2 className="font-man text-2xl font-extrabold">Applied jobs: {appliedjob.length}</h2>

                    <details className="dropdown">
                        <summary className="m-1 btn">open or close</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </details>
                </div>
                <div className="my-20">
                    {
                        appliedjob.map(job => <>
                            <div key={job.id}>
                                <div className="flex items-center gap-4">
                                    <div className="w-4/12 h-4/12 bg-[#F4F4F4] rounded p-5 flex items-center justify-center">
                                        <img className="w-fit h-fit" src={job.logo} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="text-[#474747] font-extrabold text-2xl font-man">{job.job_title}</h2>
                                        <h4 className='font-man text-xl font-semibold text-[#474747] pt-7'>{job.company_name}</h4>
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
                            </div>
                        </>)
                    }
                </div>
            </div> 
        </div>
    );
};

export default AppliedJobs;