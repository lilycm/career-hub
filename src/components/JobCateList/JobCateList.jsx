

const JobCateList = ({jobList}) => {
    const {logo, category_name, availability}= jobList
    return (
        <div>
            <div>
                    <div className='bg-gradient-to-t from-[#7e8ffe44] to-[#9873ff2d] px-6 py-6 rounded-lg'>
                        <img className='p-4 bg-gradient-to-t from-[#9873ff36] to-[#7e8ffe48]' src={logo} alt="" />
                        <h4 className='font-man text-xl font-extrabold text-[#474747] pt-7'>{category_name}</h4>
                        <p className='text-[#A3A3A3] text-base font-semibold font-man'>{availability}</p>
                    </div>
                </div>
        </div>
    );
};

export default JobCateList;