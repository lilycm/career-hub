import './Banner.css'

const Banner = () => {
    return (
        <div className="lg:px-14 lg:flex items-center justify-center lg:pt-12 bg-[#f3f0fc]">
            <div className="space-y-4">
                <h1 className="text-[#1A1919] font-extrabold text-7xl font-man">One Step <br /> Closer To Your <br /> <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text">Dream Job</span></h1>
                <p className="pt-4 font-man">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-man">Get Started</button>
            </div>
            <div>
                <img src='/src/assets/images/user.png' alt="" />
            </div>
        </div>
    );
};

export default Banner;