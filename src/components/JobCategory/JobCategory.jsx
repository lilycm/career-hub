import './JobCategory.css'

const JobCategory = () => {
    return (
        <div>
            <div className="mt-20 text-center space-y-5">
                <h2 className="text-5xl font-extrabold font-man">Job Category List</h2>
                <p className='text-[#757575] font-semibold text-base font-man'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-8 gap-4 lg:px-20'>
                <div className='bg-gradient-to-t from-[#7e8ffe44] to-[#9873ff2d] px-6 py-6 rounded-lg'>
                    <img className='p-4 bg-gradient-to-t from-[#9873ff36] to-[#7e8ffe48]' src="/src/assets/icons/accounts.png" alt="" />
                    <h4 className='font-man text-xl font-extrabold text-[#474747] pt-7'>Account & Finance</h4>
                    <p className='text-[#A3A3A3] text-base font-semibold font-man'>300 Jobs Available</p>
                </div>
                <div className='bg-gradient-to-t from-[#7e8ffe44] to-[#9873ff2d] px-6 py-6 rounded-lg'>
                    <img className='p-4 bg-gradient-to-t from-[#9873ff36] to-[#7e8ffe48]' src="/src/assets/icons/creative.png" alt="" />
                    <h4 className='font-man text-xl font-extrabold text-[#474747] pt-7'>Creative Design</h4>
                    <p className='text-[#A3A3A3] text-base font-semibold font-man'>100+ Jobs Available</p>
                </div>
                <div className='bg-gradient-to-t from-[#7e8ffe44] to-[#9873ff2d] px-6 py-6 rounded-lg'>
                    <img className='p-4 bg-gradient-to-t from-[#9873ff36] to-[#7e8ffe48]' src="/src/assets/icons/marketing.png" alt="" />
                    <h4 className='font-man text-xl font-extrabold text-[#474747] pt-7'>Marketing & Sales</h4>
                    <p className='text-[#A3A3A3] text-base font-semibold font-man'>150 Jobs Available</p>
                </div>
                <div className='bg-gradient-to-t from-[#7e8ffe44] to-[#9873ff2d] px-6 py-6 rounded-lg'>
                    <img className='p-4 bg-gradient-to-t from-[#9873ff36] to-[#7e8ffe48]' src="/src/assets/icons/chip.png" alt="" />
                    <h4 className='font-man text-xl font-extrabold text-[#474747] pt-7'>Engineering Job</h4>
                    <p className='text-[#A3A3A3] text-base font-semibold font-man'>224 Jobs Available</p>
                </div>
            </div>
        </div>


    );
};

export default JobCategory;