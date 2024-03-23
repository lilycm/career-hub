

const Banner = () => {
    return (
        <div className="lg:px-14 lg:flex mt-12">
            <div className="space-y-4">
                <h1 className="text-[#1A1919] font-bold text-7xl">One Step <br /> Closer To Your <br /> <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text">Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            </div>
            <div>
                <img src="../../assets/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;