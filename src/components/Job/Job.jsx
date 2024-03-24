import './Job.css'
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineCurrencyDollar } from "react-icons/hi";


const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div>
                <img className="w-5/12" src={logo} alt="" />
                <div className='text-start'>
                    <h4 className="text-[#474747] font-extrabold text-2xl font-man">{job_title}</h4>
                    <p className='text-[#757575] font-semibold text-xl'>{company_name}</p>
                    <div className='flex gap-4'>
                        <button className='font-man font-extrabold text-base bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text border border-indigo-500 rounded px-3 py-2'>{remote_or_onsite}</button>
                        <button className='font-man font-extrabold text-base bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text border border-indigo-500 rounded px-3 py-2'>{job_type}</button>
                    </div>
                    <div className='flex gap-7'>
                        <div className='flex gap-3'>
                            <SlLocationPin className='text-4xl' />
                            <p className='text-[#757575] font-man font-semibold text-xl '>{location}</p>
                        </div>
                        <div className='flex gap-3'>
                            <HiOutlineCurrencyDollar className='text-4xl' />
                            <p className='text-[#757575] font-man font-semibold text-xl '>{salary}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;