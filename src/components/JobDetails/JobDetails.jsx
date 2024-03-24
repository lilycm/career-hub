import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utility/localstorage';





const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob = ()=>{
        saveJobApplication(idInt);

        toast('You Have Applied Successfully!!')
    }


    return (
        <div>
            <div className='job-details my-10'>
                <h2 className="text-4xl font-bold font-man text-center">Job Details</h2>
            </div>
            <div className='grid md:grid-cols-4 gap-5 md:mt-14 md:px-16'>
                <div className='md:col-span-3'></div>
                <div className='md:col-span-1 bg-gradient-to-r from-[#7e8ffe3b] to-[#9873ff25] py-4'>
                    <div className='px-2'>
                        <h4 className='font-extrabold text-xl font-man text-[#1A1919]'>Job Details</h4>
                    </div>
                    <div className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded text-white text-center py-3'>
                        <button onClick={handleApplyJob}>Apply Now</button>
                    </div>

                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;