import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {

    const links = <>
        <li className="mx-2 font-man font-bold text-lg"><NavLink to='/'>Home</NavLink></li>
        <li className="mx-2 font-man font-bold text-lg"><NavLink to='/statistics'>Statistics</NavLink></li>
        <li className="mx-2 font-man font-bold text-lg"><NavLink to='/applied'>Applied Jobs</NavLink></li>
        <li className="mx-2 font-man font-bold text-lg"><NavLink to='/blog'>Blog</NavLink></li>
    </>

// <li><a className="font-semibold text-[#757575] text-base"></a></li>
{/* <li><a className="font-semibold text-[#757575] text-base"></a></li> */}

    return (
        <div className="">
            <div className="navbar lg:px-14 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-extrabold tracking-wider">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Star Applying</a>
                </div>
            </div>
        </div>
    );
};

export default Header;