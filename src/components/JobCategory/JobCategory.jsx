
import { useEffect, useState } from 'react';
import './JobCategory.css'
import JobCateList from '../JobCateList/JobCateList';

const JobCategory = () => {
    const [jobCategory, setJobCategory] = useState([]);
    useEffect(() => {
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setJobCategory(data))
    }, [])

    return (
        <div>
            <div>
                <div className="mt-20 text-center space-y-5">
                    <h2 className="text-5xl font-extrabold font-man">Job Category List</h2>
                    <p className='text-[#757575] font-semibold text-base font-man'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div  className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-8 gap-4 lg:px-20'>
                    {
                        jobCategory.map(jobList=> <JobCateList key={jobList.id} jobList={jobList}></JobCateList>)
                    }
                </div>
            </div>
        </div>
    );
}

export default JobCategory;