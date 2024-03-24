import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utility/localstorage';
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";




const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(idInt);

        toast('You Have Applied Successfully!!')
    }


    return (
        <div>
            <div className='job-details my-10'>
                <h2 className="text-4xl font-bold font-man text-center">Job Details</h2>
            </div>
            <div className='grid md:grid-cols-4 gap-5 md:mt-14 md:px-16'>
                <div className='md:col-span-3 space-y-4'>
                    <p className='text-[#757575] font-man  leading-relaxed'><strong className='text-[#1A1919]'>Job Description:</strong>{job.job_description}</p>
                    <p className='text-[#757575] font-man  leading-relaxed'><strong className='text-[#1A1919]'>Job Responsibility:</strong> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
                    <div>
                        <strong>
                            Educational Requirements:
                        </strong>
                        <p className='text-[#757575]'>{job.educational_requirements}</p>
                    </div>
                    <div>
                        <strong>
                            Experiences:
                        </strong>
                        <p className='text-[#757575]'>{job.experiences}</p>
                    </div>
                </div>
                <div className='md:col-span-1 rounded'>
                    <div className='p-4 bg-gradient-to-r from-[#7e8ffe3b] to-[#9873ff25]'>
                        <h4 className='font-extrabold text-xl font-man text-[#1A1919]'>Job Details</h4>
                        <hr className=' border-black' />
                        <div className='my-5 '>
                            <div className='flex items-center justify-start gap-3'>
                                <HiOutlineCurrencyDollar className='text-4xl' />
                                <p className='text-[#757575]'><span className='font-man text-base font-semibold text-[#474747]'>Salary:</span> {job.salary}</p>
                            </div>
                            <div className='flex items-center justify-start gap-3'>
                                <SlLocationPin className='text-4xl' />
                                <p className='text-[#757575]'><span className='font-man text-base font-semibold text-[#474747]'>Job Title:</span> {job.job_title}</p>
                            </div>
                            <p className='font-man text-xl mt-3'><strong>Contact Information</strong></p>

                        </div>
                        <hr className=' border-black' />
                        <div className='my-5 space-y-3'>
                            <div className='flex items-center justify-start gap-3'>
                                <FaPhoneAlt className='text-3xl' />
                                <p className='text-[#757575]'><span className='font-man text-base font-semibold text-[#474747]'>Phone:</span> {job.contact_information.phone}</p>
                            </div>
                            <div className='flex items-center justify-start gap-3'>
                                <MdOutlineEmail className='text-3xl' />
                                <p className='text-[#757575]'><span className='font-man text-base font-semibold text-[#474747]'>Email:</span> {job.contact_information.email}</p>
                            </div>
                            <div className='flex items-center justify-start gap-3'>
                                <SlLocationPin className='text-4xl' />
                                <p className='text-[#757575]'><span className='font-man text-base font-semibold text-[#474747]'>Address:</span> {job.contact_information.address}</p>
                            </div>
                        </div>

                    </div>

                    <div className='mt-3 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded text-white text-center py-3'>
                        <button onClick={handleApplyJob}>Apply Now</button>
                    </div>

                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;